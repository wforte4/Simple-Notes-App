import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import Theme from '../styles/theme'
import { useState, useEffect } from 'react'
import { ToggleSwitch, When } from '../components/elements';
import { updateProfile } from '../store/actions/postAction';

function MyProfile({themeColor}) {

    const dispatch = useDispatch()
    const {profile, auth} = useSelector(state => state.post)
    const [thisProfile, setProfile] = useState(null)
    const [authorization, setAuth] = useState(null)
    const [inputs, setInputs] = useState({
        email: '',
        firstName: '',
        lastName: '',
        themeDefault: ''
    })
    const [hasChanged, setChanged] = useState(false)
    console.log(thisProfile)

    useEffect(() => {
        if(profile) {
            setProfile(profile)
            setAuth(auth)
            setInputs({
                email: profile.email,
                firstName: profile.firstName,
                lastName: profile.lastName,
                themeDefault: profile.userTheme
            })

        }
    }, [thisProfile == null && auth && profile])

    const handleChange = (e) => {
        e.persist()
        if(hasChanged == false) setChanged(true)
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const submitChanges = async (e) => {
        e.preventDefault()
        dispatch(updateProfile(profile.userId, authorization.accessToken, inputs))
        
    }

    const toggleTheme = (e) => {
        e.persist()
        if(hasChanged == false) setChanged(true)
        if(inputs.themeDefault === 'Light') setInputs({...inputs, themeDefault: Theme.colors.dark})
        else setInputs({...inputs, themeDefault: 'Light'})
    }

    return (
        <div className='profile'>
            <h1>My Profile</h1>
            <img className='userIcon' src="/think.png"/>
            <form onSubmit={submitChanges} autoComplete='off'>
                <div className='line'></div>
                <div className='section'>
                    <label>Email: </label>
                    <input 
                        name='email'
                        value={inputs.email}
                        onChange={handleChange}
                        autoComplete='off'
                    />
                </div>
                <div className='line'></div>
                <div className='section'>
                    <label>First Name: </label>
                    <input 
                        name='firstName'
                        value={inputs.firstName}
                        onChange={handleChange}
                        autoComplete='off'
                    />
                </div>
                <div className='line'></div>
                <div className='section'>
                    <label>Last Name: </label>
                    <input 
                        name='lastName'
                        value={inputs.lastName}
                        onChange={handleChange}
                        autoComplete='off'
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
                {hasChanged && <button type='submit'>Save Changes</button>}
            </form>
            <Link href='/forgotpassword'><div className='link'>Forgot Password</div></Link>
            <style jsx>{`
                .section {
                    float: left;
                    width: 95%;
                    margin: 8px 0;
                    padding: 15px 2.5%;
                    display: flex;
                    align-items: center;
                    border-radius: 4px;
                    box-shadow: ${Theme.sh.grey};
                    justify-content: space-between;
                }
                input {
                    margin: 0px 0;
                    min-width: 30%;
                }
                .profile {
                    float: left;
                    width: 80%;
                    margin: 40px 5%;
                    padding: 10px 5%;
                    min-height: 200px;
                    margin-top: 140px;
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
                    margin: 10px 0;
                    font: 26px 'Montserrat';
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
                form button {
                    margin: 20px 0;
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