import { useState } from "react"
import { useDispatch } from "react-redux"
import { signIn } from "../store/actions/postAction"
import Theme from "../styles/theme"


function Login() {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()

    const handleType = (e) => {
        e.persist()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(signIn(inputs.email, inputs.password))
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
                    value={inputs.password}
                    onChange={handleType}
                    placeholder='Password'
                    required
                />
                <button type='submit'>Login</button>
            </form>
            <style jsx>{`
                form {
                    width: 350px;
                    height: 450px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    padding: 0;
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-items: center;
                    transform: translate(-50%,-50%);
                    background: white;
                    border-radius: 3px;
                    box-shadow: ${Theme.sh.mat};
                }
                input {
                    float: left;
                    width: 80%;
                    padding: 5px 5%;
                    margin: 10px 5%;
                    font: 15px 'Roboto';
                }
                button {
                    float: left;
                    width: 80%;
                    padding: 5px 5%;
                    margin: 5px 5%;
                    margin-top: 40px;
                    font: 15px 'Roboto';
                }
                form img {
                    float: left;
                    width: 80px;
                    height: 80px;
                    margin: 20px 0;
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