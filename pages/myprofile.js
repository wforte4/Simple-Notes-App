import Link from 'next/link'
import { useSelector } from 'react-redux';
import Theme from '../styles/theme'
import { useState, useEffect } from 'react'
import { ToggleSwitch, When } from '../components/elements';
import { patchUser } from '../services/apiservice';

function MyProfile({themeColor}) {
    const {profile, auth} = useSelector(state => state.post)
    const initialState = {
        email: profile ? profile.email: null,
        firstName: profile ? profile.firstName: null,
        lastName: profile ? profile.lastName: null,
        themeDefault: profile ? profile.userTheme: null
    };
    const [inputs, setInputs] = useState(initialState)
    const [hasChanged, setChanged] = useState(false)

    const handleChange = (e) => {
        e.persist()
        if(hasChanged == false) setChanged(true)
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const updateProfile = async (e) => {
        e.preventDefault()
        const update = await patchUser(profile ? profile.userId: null, auth ? auth.accessToken: null, inputs)
        if(update) console.log(update)
    }

    const toggleTheme = (e) => {
        e.persist()
        if(hasChanged == false) setChanged(true)
        if(inputs.themeDefault === 'Light') setInputs({...inputs, themeDefault: Theme.colors.dark})
        else setInputs({...inputs, themeDefault: 'Light'})
    }

    return (
        <div className='profile'>
            <img className='userIcon' src="/userIcon.png"/>
            <h1>{profile && profile.name}</h1>
            <form onSubmit={updateProfile}>
                <div className='line'></div>
                <div className='section'>
                    <label>Email: </label>
                    <input 
                        name='email'
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='line'></div>
                <div className='section'>
                    <label>First Name: </label>
                    <input 
                        name='firstName'
                        value={inputs.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className='line'></div>
                <div className='section'>
                    <label>Last Name: </label>
                    <input 
                        name='lastName'
                        value={inputs.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className='line'></div>
                <div className='section'>
                    <label>Permission Level: </label>
                    <h3>{profile && profile.permissionLevel}</h3>
                </div>
                <div className='line'></div>
                <div className='section'>
                    <label>Default Theme Color: </label>
                    <ToggleSwitch active={inputs.themeDefault === 'Light' ? true: false} onClick={toggleTheme} floatLeft={true} />
                    <label>{inputs.themeDefault === 'Light' ? 'Light': 'Dark'}</label>
                </div>
                <When condition={hasChanged}>
                    <button type='submit'>Save Changes</button>
                </When>
            </form>
            <Link href='/forgotpassword'><h2>Forgot Password</h2></Link>
            <style jsx>{`
                .section {
                    float: left;
                    width: 100%;
                    margin: 10px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                input {
                    margin: 0px 0;
                }
                .profile {
                    float: left;
                    width: 80%;
                    margin: 40px 5%;
                    padding: 10px 5%;
                    min-height: 200px;
                    margin-top: 140px;
                    box-shadow: ${Theme.sh.mat};
                    border-radius: 4px;
                }
                .userIcon {
                    float: left;
                    width: 50px;
                    height: 50px;
                    margin: 10px 0;
                    margin-left: 50%;
                    transform: translateX(-50%);
                }
                h1 {
                    float: left;
                    margin: 10px;
                    font: 32px 'Montserrat';
                    width: 100%;
                    text-align: center;
                }
                .break {
                    float: left;
                    width: 100%;
                    margin: 5px 0;
                }
                form {
                    padding: 10px 5%;
                    margin: 30px 0;
                    float: left;
                    width: 90%;
                }
                form h3 {
                    float: left;
                    margin: 10px 5px;
                    font: 16px 'Roboto';
                }
                form input {
                    float: left;
                    margin: 0 0px;
                }
                form label {
                    list-style: none;
                    float: left;
                    margin: 12px 5px;
                    font: 16px 'Roboto';
                }
                h2 {
                    float: left;
                    font: 16px 'Roboto';
                    border-radius: 4px;
                    cursor: pointer;
                    box-shadow: ${Theme.sh.mat};
                    background: ${Theme.colors.pink};
                    color: white;
                    padding: 8px;
                    margin: 10px 5px;
                }
            `}</style>
        </div>
    )
}

export default MyProfile