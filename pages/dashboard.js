import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Theme from '../styles/theme'
import { uploadThought } from '../services/thoughtservice'
import { fetchThoughts } from "../store/actions/postAction"
import Link from 'next/link'

function Dashboard({themeColor}) {

    const {profile, auth, thoughts} = useSelector(state => state.post)
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({
        thought: '', 
        user: profile,
        auth: auth
    })

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
            <Link href='/'><div className='link'>Back to home</div></Link>
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
                </form>
            </div>
            <style jsx>{`
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
                    width: 70%;
                    border-radius: 4px;
                    box-shadow: ${Theme.sh.mat};
                    position: absolute;
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
                    margin: 30px 0;
                    min-height: 150px;
                    resize: vertical;
                    font: 16px 'Roboto';
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