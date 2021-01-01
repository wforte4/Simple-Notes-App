import Theme from '../styles/theme'
import Head from "next/head";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { DropDown, ToggleSwitch } from '../components/elements'
import { useState, useEffect } from 'react'
import { signOut } from '../store/actions/postAction'

function Navigation({themeColor, setTheme}) {

    const {profile} = useSelector(state => state.post)
    const [active, setActive] = useState(false)
    const router = useRouter()

    const dispatch = useDispatch()

    useEffect(() => {
        if(active == true) setActive(false)
    }, [router.pathname])

    const logout = () => {
        dispatch(signOut())
    }

    const toggleActive = (e) => {
        e.persist()
        if(active) setActive(false)
        else setActive(true)
    }

    const toggleTheme = (e) => {
        e.persist()
        if(themeColor === '#ffffff') setTheme(Theme.colors.dark)
        else setTheme('#ffffff')
    }

    return (
        <div id="nav">
            <img src='/mainicon.png' className='logo'/>
            <Link href='/'><h1 className="title up">Synapse</h1></Link><Link href='/'><h1 className="title flash">Flash</h1></Link>
            <ul className='navLinks'>
                <Link href='/'><li>Home</li></Link>
                {profile ? null: <Link href='/login'><li>Login</li></Link>}
            </ul>
            {profile && <div className='profile' onClick={toggleActive}>
                <h1>{profile && profile.name}</h1>
                <img src="/userIcon.png"/>
            </div>}
            <DropDown
                width='200px'
                height='auto'
                top='100px'
                right='10px'
                isActive={active}
                background={themeColor}
                links={[
                    {href: '/dashboard', title: 'Dashboard'},
                    {href: '/myprofile', title: 'My Profile' }, 
                    {action: ()=> {
                        logout()
                        setActive(false)
                    }, title: 'Logout'}
                ]}
            >
                <div className='toggletheme'>
                    <h2>{themeColor === '#ffffff' ? 'Light': 'Dark'}</h2>
                    <ToggleSwitch top='18px' right='30px' margin={'10px'} active={themeColor === '#ffffff' ? true: false} onClick={toggleTheme}/>
                </div>
            </DropDown>
            <style jsx>{`
                #nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100px;
                    transition: all .3s ease;
                    background: ${themeColor === '#ffffff' ? 'rgba(255,255,255,.9)': 'rgba(20,20,20,.9)'};
                    backdrop-filter: blur(12px);
                    z-index: 99;
                    box-shadow: ${Theme.sh.mat};
                }
                .toggletheme {
                    float: left;
                    width: 100%;
                    position: relative;
                    box-shadow: ${Theme.sh.mat};
                    padding: 10px 0;
                }
                .toggletheme h2 {
                    float: left;
                    font: 16px 'Roboto';
                    margin: 10px 30px;
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                }
                .profile {
                    position: absolute;
                    top: 0;
                    right: 10px;
                    width: 230px;
                    height: 100px;
                    cursor: pointer;
                }
                .profile img {
                    position: absolute;
                    top: 50%;
                    right: 20px;
                    width: 30px;
                    height: 30px;
                    transform: translate(0,-50%);
                }
                .profile h1 {
                    float: left;
                    font: 15px 'Roboto';
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    margin: 0;
                    margin-top: 50px;
                    transform: translate(-60%,-50%);
                    margin-left: 50%;
                }
                .navLinks {
                    float: left;
                    margin: 22px 20px;
                    padding: 10px 0;
                }
                .navLinks li {
                    float: left;
                    padding: 10px;
                    list-style: none;
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    font: 16px 'Roboto';
                    cursor: pointer;
                }
                .logo {
                    float: left;
                    width: 70px;
                    height: 70px;
                    padding: 15px;
                }
                .title {
                    float: left;
                    font: 38px ${Theme.font.title};
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    margin: 15px 2.5px;
                    padding: 10px 2.5px;
                    cursor: pointer;
                    transition: all .3s ease;
                }
                .up:hover {
                    transform: translateY(-2px);
                    text-shadow: 0 1px #000;
                }
                .flash {
                    background: -webkit-linear-gradient(left, ${Theme.colors.pink}, ${Theme.colors.purple}, ${Theme.colors.pinklight});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </div>
    )
}

function Footer({themeColor}) {
    return (
        <div id="footer">

            <img src='/mainicon.png' className='logo'/>
            <Link href='/'><h1 className="title up">Synapse</h1></Link><Link href='/'><h1 className="title flash">Flash</h1></Link>
            <div className='bottomBar'>
                <h2>Copyright SynapseFlash © 2020</h2>
            </div>
            <style jsx>{`
                .bottomBar {
                    background: ${themeColor === '#ffffff' ? 'grey': 'black'};
                    min-height: 100px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 90%;
                    padding: 5px 5%;
                }
                .bottomBar h2 {
                    color: white;
                    float: left;
                    font: 18px 'Montserrat';
                    margin: 35px 30px;
                }
                .logo {
                    float: left;
                    width: 70px;
                    height: 70px;
                    padding: 15px;
                }
                .title {
                    float: left;
                    font: 38px ${Theme.font.title};
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    margin: 15px 2.5px;
                    padding: 10px 2.5px;
                    cursor: pointer;
                    transition: all .3s ease;
                }
                .up:hover {
                    transform: translateY(-2px);
                    text-shadow: 0 1px #fff;
                }
                .flash {
                    background: -webkit-linear-gradient(left, ${Theme.colors.pink}, ${Theme.colors.purple}, ${Theme.colors.pinklight});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                #footer {
                    float: left;
                    position: relative;
                    width: 100%;
                    transition: background .3s ease;
                    background: ${themeColor};
                    box-shadow: ${Theme.sh.mat};
                    min-height: 600px;
                }
            `}</style>
        </div>
    )
}

function Layout({children, themeColor, setTheme}) {
    return (
        <div id='layout'>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Andika+New+Basic&family=Montserrat:wght@700&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            <Navigation themeColor={themeColor} setTheme={setTheme}></Navigation>
            {children}
            <Footer themeColor={themeColor}></Footer>
            <style jsx global>{`
                #__next {
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    float: left;
                }
                #layout {
                    height: 100%;
                    width: 100%;
                }
                html {
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    float: left;
                    color: ${themeColor === '#ffffff' ? 'black': 'white'};
                }
                body {
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    transition: background .3s ease;
                    background: ${themeColor};
                }
                button {
                    border: none;
                    padding: 10px;
                    font: 16px 'Roboto';
                    cursor: pointer;
                    border-radius: 4px;
                    transition: all .3s ease;
                }
                button:hover {
                    background: ${Theme.colors.dark};
                    color: white;
                }
                button:focus {
                    outline: none;
                    box-sizing: border-box;
                    border: 1px solid #f5d9fc;
                    box-shadow: ${Theme.sh.glow}, ${Theme.sh.glowinset};
                }
                input {
                    border: 1px solid ${Theme.colors.purple};
                    box-sizing: border-box;
                    padding: 10px 5px;
                    border-radius: 4px;
                    font: 15px 'Roboto';
                    color: ${themeColor === '#ffffff' ? 'black': 'white'};
                    background: ${themeColor};
                    transition: all .3s ease;
                }
                input:focus, textarea:focus {
                    outline: none;
                    box-sizing: border-box;
                    border: 1px solid #f5d9fc;
                    box-shadow: ${Theme.sh.glow}, ${Theme.sh.glowinset};
                    background: none;
                }
                textarea {
                    border: 1px solid ${Theme.colors.purple};
                    box-sizing: border-box;
                    padding: 10px 5px;
                    border-radius: 4px;
                    font: 15px 'Roboto';
                    min-height: 250px;
                    color: ${themeColor === '#ffffff' ? 'black': 'white'};
                    background: ${themeColor};
                    transition: all .3s ease;
                }
                .break {
                    float: left;
                    width: 100%;
                    height: 2px;
                    margin: 5px 0;
                    background: linear-gradient(to right, ${Theme.colors.pink}, ${Theme.colors.purple}, ${Theme.colors.pinklight});
                }
                .link {
                    cursor: pointer;
                    font: 16px 'Roboto';
                    padding: 5px;
                    background: -webkit-linear-gradient(left, ${Theme.colors.pink}, ${Theme.colors.purple}, ${Theme.colors.pinklight});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </div>
    )
}

export default Layout