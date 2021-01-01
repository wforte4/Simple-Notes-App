import Theme from "../styles/theme"
import { useState } from 'react'
import { forgotPassword } from '../services/apiservice'

function ForgotPassword() {

    const [inputs, setInputs] = useState({
        email: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleType = (e) => {
        e.persist()
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const response = await forgotPassword(inputs.email)
        console.log(response)
        setLoading('response')
    }

    return (
        <div className='forgotpass'>
            <div className='center'>
                <h1>Forgot Password</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name='email'
                        type='email'
                        value={inputs.email}
                        onChange={handleType}
                        placeholder='Email Address'
                        required
                    />
                    {error ? <div className='info'>{error}</div>: null}
                    <button type='submit'>Submit</button>
                </form>
                <img className='loader' src='/loader.gif'/>
            </div>
            <style jsx>{`
                .forgotpass {
                    float: left;
                    height: 100%;
                    width: 100%;
                    display: grid;
                    justify-content: center;
                    align-items: center;
                }
                .info {
                    float: left;
                    font: 16px 'Roboto';
                    color: red;
                }
                .center {
                    width: 350px;
                    height: 250px;
                    padding: 40px;
                    box-shadow: ${Theme.sh.mat};
                    border-radius: 6px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-flow: column wrap;
                }
                .center h1 {
                    font: 20px 'Montserrat';
                    margin: 5px;
                    margin-bottom: 10px;
                }
                input {
                    margin: 10px;
                    min-width: 250px;
                }
                form {
                    display: ${loading == false ? 'block': 'none'};
                }
                .loader {
                    float: left;
                    width: 45px;
                    height: 45px;
                    margin: 10px 0;
                    display: ${loading == false ? 'none': 'block'};
                }
                .res {
                    float: left;
                    font: 16px 'Roboto';
                    width: 90%;

                    display: ${loading === 'response' ? 'block': 'none'};
                }
            `}</style>
        </div>
    )
}

export default ForgotPassword