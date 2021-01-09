import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Theme from '../styles/theme'
import { uploadThought } from '../services/thoughtservice'
import { fetchThoughts } from "../store/actions/postAction"
import Link from 'next/link'
import { useWindowSize } from "../components/hooks"

function Dashboard({themeColor}) {

    const {profile, auth, thoughts} = useSelector(state => state.post)
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({
        thought: '', 
        user: profile,
        auth: auth
    })
    const [focus, setFocus] = useState(0)
    const window = useWindowSize()
    const offset = window.height

    useEffect(() => {
        dispatch(fetchThoughts(profile.email, auth))
    }, [])

    const handleType = (e) => {
        e.persist()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const uploadNewThought = async (e) => {
        e.preventDefault()
        setInputs({...inputs, thought: ''})
        const newThought = await uploadThought(inputs.thought, profile.email, "normal", auth)
        if(newThought) console.log(newThought)
    }

    return (
        <div className='dash'>
            <div className='top-right'><Link href='/'><div className='link '>Back to home</div></Link></div>
            <div className='uploadThought'>
                <form onSubmit={uploadNewThought}>
                    <label>Start Thinking</label>
                    <img className='thinklogo' src='/think.png'/>
                    <textarea
                        name='thought'
                        value={inputs.thought}
                        onChange={handleType}
                        placeholder='Hmm...what am i thinking today?'
                        required
                    />
                    <button type='submit'>Upload Thought</button>
                    <div className='seemind link' onClick={()=> setFocus(1)}>See my mind</div>
                </form>
            </div>
            <div className="mindmap">
                <div className='link' onClick={()=> setFocus(0)}>Back to upload</div>
                <div className='map'>
                    
                </div>
            </div>
            <style jsx>{`
                .seemind {
                    float: left;
                }
                .mindmap {

                    display: flex;
                    justify-content: center;
                    margin-top: 60px;
                }
                .top-right {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 20;
                    width: 100%;
                    background: ${themeColor};
                }
                .thinklogo {
                    float: left;
                    width: 60px;
                    height: 60px;
                    margin: 10px 0 ;
                }
                .item h2 {
                    position: absolute;
                    font: 14px 'Roboto';
                    bottom: 10px;
                    text-align: center;
                    left: 50%;
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    transform: translate(-50%);
                }
                .uploadThought {
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                    box-shadow: ${Theme.sh.mat};
                    position: absolute;
                    transition: all .8s ease-in-out;
                    margin-top: -${focus * offset}px;
                    background: ${themeColor};
                    box-shadow: ${Theme.sh.grey};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
                .uploadThought form {
                    float: left;
                    width: 90%;
                    padding: 30px 5%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-flow: column wrap;
                    height: auto;
                }
                .uploadThought label {
                    float: left;
                    margin: 20px 0;
                    padding: 0;
                    width: 100%;
                    text-align: center;
                    font: 18px 'Montserrat';
                }
                .uploadThought button {
                    float: left;
                    margin: 20px 0;
                    min-width: 20%;
                }
                .uploadThought textarea {
                    float: left;
                    width: 80%;
                    padding: 25px 2.5%;
                    box-shadow: none;
                    border: none;
                    margin: 30px 0;
                    min-height: 150px;
                    resize: vertical;
                    font: 15px ${Theme.font.style};
                }
                .dash {
                    float: left;
                    width: 100%;
                    position: relative;
                    height: 100%;
                    overflow-y: hidden;
                }
            `}</style>
        </div>
    )
}

export default Dashboard