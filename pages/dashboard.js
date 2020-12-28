import { useState } from "react"
import { useSelector } from "react-redux"
import Theme from '../styles/theme'
import { uploadThought } from '../services/thoughtservice'


function Dashboard({themeColor}) {

    const {profile} = useSelector(state => state.post)
    const [inputs, setInputs] = useState({
        thought: '', 
        user: profile && profile.email
    })

    const handleType = (e) => {
        e.persist()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const uploadNewThought = (e) => {
        e.preventDefault()
        const newThought = uploadThought(inputs.thought, inputs.user)
    }

    return (
        <div className='dash'>
            <div className='welcome'>
                <h1>Hello, {profile && profile.name}</h1>
                <div className='list'>
                    <div className='item'>
                        <div className='frame'>
                            <img src='/uploadCircle.png'/>
                        </div>
                        <h2>Upload Thought</h2>
                    </div>
                    <div className='item'>
                        <div className='frame'>
                            <img src='/history.png'/>
                        </div>
                        <h2>Thought History</h2>
                    </div>
                </div>
            </div>
            <div className='uploadthought'>
                <h1>Upload New Thought</h1>
                <form onSubmit={uploadNewThought}>
                    <label>Thought</label>
                    <textarea
                        name='thought'
                        value={inputs.thought}
                        onChange={handleType}
                        required
                    />
                    <button type='submit'>Upload Thought</button>
                </form>
            </div>
            <style jsx>{`
                .list {
                    float: left;
                    width: 100%;
                    display: flex;
                }
                .item {
                    float: left;
                    width: 200px;
                    height: 200px;
                    position: relative;
                }
                .item img {
                    max-width: 80px;
                }
                .item .frame {
                    position: absolute;
                    width: 140px;
                    height: 140px;
                    left: 50%;
                    display: grid;
                    place-items: center;
                    transform: translate(-50%);
                    box-shadow: ${Theme.sh.mat};
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all .3s ease;
                    background: linear-gradient(to right, ${Theme.colors.pink}, ${Theme.colors.purple}, ${Theme.colors.pinklight});
                }
                .item .frame:hover {
                    transform: translate(-50%, -3px) scale(1.05, 1.05);
                    box-shadow: ${Theme.sh.hardmat};
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
                .uploadthought {
                    float: left;
                    width: 90%;
                    margin: 30px 5%;
                    border-radius: 4px;
                    box-shadow: ${Theme.sh.mat};
                }
                .uploadthought form {
                    float: left;
                    width: 90%;
                    padding: 30px 5%;
                }
                .uploadthought label {
                    float: left;
                    margin: 10px 0;
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    border-bottom: 1px solid blue;
                    font: 16px 'Roboto';
                }
                .uploadthought textarea {
                    float: left;
                    width: 95%;
                    padding: 25px 2.5%;
                    margin: 10px 0;
                    min-height: 150px;
                    resize: vertical;
                    font: 16px 'Roboto';
                }
                .uploadthought h1 {
                    float: left;
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    font: 32px 'Montserrat';
                    padding: 10px 40px;
                }
                .welcome {
                    float: left;
                    width: 90%;
                    margin: 30px 5%;
                    border-radius: 4px;
                    box-shadow: ${Theme.sh.mat};
                }
                .welcome h1 {
                    float: left;
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    font: 32px 'Montserrat';
                    padding: 20px;
                }
                .dash {
                    float: left;
                    width: 100%;
                    margin-top: 100px;
                    min-height: 800px;
                }
            `}</style>
        </div>
    )
}

export default Dashboard