import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../store/actions/postAction"
import Theme from "../styles/theme"
import Link from 'next/link'
import { createProfile } from "../services/apiservice"

function CreateProfile({themeColor}) {

    const [inputs, setInputs] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        themeDefault: ''
    })
    const dispatch = useDispatch()
    const {errorMessage} = useSelector(state => state.post)
    const [createdUser, setCreatedUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleType = (e) => {
        e.persist()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)
        const newUser = await createProfile(inputs)
        if(newUser) {
            if(newUser.error) setError(newUser.error)
            if(newUser.id) setCreatedUser(true)
        }
        
        setLoading(false)

    }

    return (
        <div id="body">
            <img id="bgbody" src="/mainbg.png"/>
            <form onSubmit={submitForm}>
                <img src="/think.png"/>
                <input
                    name='email'
                    value={inputs.email}
                    onChange={handleType}
                    placeholder='Email Address'
                    required
                />
                <input
                    name='firstName'
                    value={inputs.firstName}
                    onChange={handleType}
                    placeholder='First Name'
                    required
                />
                <input
                    name='lastName'
                    value={inputs.lastName}
                    onChange={handleType}
                    placeholder='Last Name'
                    required
                />
                <input
                    name='password'
                    type='password'
                    value={inputs.password}
                    onChange={handleType}
                    placeholder='Password'
                    required
                />
                {createdUser && <p className='info'>Congragulation's you have created a user account, you may now login!</p>}
                {createdUser && <Link href='/login'><div className='link'>Login</div></Link>}
                {loading && <img src='/loader.gif' className='loader'/>}
                {error && <p className='info fail'>{error}</p>}
                <button type='submit'>Create Profile</button>
            </form>
            <style jsx>{`
                form {
                    width: 350px;
                    height: 480px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    padding: 5%;
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-items: center;
                    transform: translate(-50%,-50%);
                    background: ${themeColor === '#ffffff' ? 'rgba(255,255,255,.9)': 'rgba(20,20,20,.9)'};
                    backdrop-filter: blur(15px);
                    border-radius: 22px;
                    box-shadow: ${Theme.sh.mat};
                }
                .loader {

                }
                .info {
                    float: left;
                    font: 16px 'Roboto';
                    margin: 5px 0;
                    text-align: center;
                }
                .fail {
                    color: red;
                }
                input {
                    float: left;
                    width: 80%;
                    padding: 8px 5%;
                    margin: 10px 5%;
                    font: 15px 'Roboto';
                    display: ${loading || createdUser ? 'none': 'block'};
                }
                button {
                    float: left;
                    width: 80%;
                    padding: 10px 5%;
                    margin: 5px 5%;
                    margin-top: 40px;
                    border: none;
                    box-shadow: ${Theme.sh.mat};
                    display: ${loading || createdUser ? 'none': 'block'};
                    cursor: pointer;
                    font: 16px 'Roboto';
                }
                form img {
                    float: left;
                    width: 80px;
                    height: 80px;
                    margin: 40px 0;
                    margin-top: -10px;
                }
                #body {
                    float: left;
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                #bgbody {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    transform: translate(-50%,-50%);
                }
            `}</style>
        </div>
    )
}

export default CreateProfile