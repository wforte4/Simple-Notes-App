import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../store/actions/postAction"
import Theme from "../styles/theme"


function Login({themeColor}) {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const {errorMessage} = useSelector(state => state.post)
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
        setLoading(true)
        await dispatch(signIn(inputs.email, inputs.password))
        setLoading(false)

    }

    return (
        <div id="body">
            <img id="bgbody" src="/mainbg.png"/>
            <form onSubmit={submitForm}>
                <img src="/userIcon.png"/>
                <input
                    name='email'
                    value={inputs.email}
                    onChange={handleType}
                    placeholder='Email Address'
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
                {errorMessage && <p className='info'>{errorMessage}</p>}
                <button type='submit'>Login</button>
            </form>
            <style jsx>{`
                form {
                    width: 350px;
                    height: 450px;
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
                .info {
                    float: left;
                    font: 16px 'Roboto';
                    color: red;
                }
                input {
                    float: left;
                    width: 80%;
                    padding: 8px 5%;
                    margin: 10px 5%;
                    font: 15px 'Roboto';
                    border-radius: 10px;
                }
                button {
                    float: left;
                    width: 80%;
                    padding: 10px 5%;
                    margin: 5px 5%;
                    margin-top: 40px;
                    border: none;
                    border-radius: 8px;
                    box-shadow: ${Theme.sh.mat};
                    cursor: pointer;
                    font: 16px 'Roboto';
                }
                button:hover {
                    background: grey;
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
                    height: 100%;
                    transform: translate(-50%,-50%);
                }
            `}</style>
        </div>
    )
}

export default Login