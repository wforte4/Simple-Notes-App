import Link from 'next/link'
import { useSelector } from 'react-redux';
import Theme from '../styles/theme'

function MyProfile({themeColor}) {
    const {profile} = useSelector(state => state.post)

    return (
        <div className='profile'>
            <img className='userIcon' src="/userIcon.png"/>
            <h1>{profile && profile.name}</h1>
            <ul>
                <div className='break'></div>
                <label>Email: </label>
                <li>{profile && profile.email}</li>
                <div className='break'></div>
                <label>Full Name: </label>
                <li>{profile && profile.name}</li>
                <div className='break'></div>
                <label>Permission Level: </label>
                <li>{profile && profile.permissionLevel}</li>
            </ul>
                <Link href='/forgotpassword'><h2>Forgot Password</h2></Link>
            <style jsx>{`
                .profile {
                    float: left;
                    width: 80%;
                    margin: 40px 5%;
                    padding: 10px 5%;
                    min-height: 200px;
                    background: ${themeColor};
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
                ul {
                    padding: 10px 5%;
                    float: left;
                    width: 90%;
                }
                ul li {
                    list-style: none;
                    float: left;
                    margin: 10px 5px;
                    font: 16px 'Roboto';
                }
                ul label {
                    list-style: none;
                    float: left;
                    margin: 12px 5px;
                    font: 14px 'Roboto';
                }
                h2 {
                    float: left;
                    font: 16px 'Montserrat';
                    border-radius: 4px;
                    cursor: pointer;
                    box-shadow: ${Theme.sh.mat};
                    background: ${Theme.colors.pink};
                    color: white;
                    padding: 10px;
                    margin: 10px 5px;
                }
            `}</style>
        </div>
    )
}

export default MyProfile