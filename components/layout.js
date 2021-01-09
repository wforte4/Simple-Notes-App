import Theme from '../styles/theme'
import Head from "next/head";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { DropDown, ToggleSwitch, When, HamburgerEx, Row, Col } from '../components/elements'
import { useState, useEffect } from 'react'
import { signOut } from '../store/actions/postAction'

function Navigation({themeColor, setTheme, show}) {

    const [active, setActive] = useState(false)
    const router = useRouter()
    const [links, setLinks] = useState([
        {href: '/dashboard', title: 'Dashboard'},
        {href: '/myprofile', title: 'My Profile' }, 
        {action: ()=> {
            logout()
            setActive(false)
        }, title: 'Logout'}
    ])
    const {profile, auth, loading} = useSelector(state => state.post)
    const [userProfile, setProfile] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if(active == true) setActive(false)
    }, [router.pathname])

    useEffect(() => {
        if(profile && userProfile == null) {
            setProfile(profile)
            if(profile.permissionLevel > 2100) {
                const newlinks = links
                newlinks.push({href: `/admin?auth=${auth.accessToken}`, title: 'Admin'})
                setLinks(newlinks)
            }
        } 
    }, [userProfile == null && profile != null])

    const logout = async () => {
        await dispatch(signOut())
        setProfile(null)
        setLinks([
            {href: '/dashboard', title: 'Dashboard'},
            {href: '/myprofile', title: 'My Profile' }, 
            {action: ()=> {
                logout()
                setActive(false)
            }, title: 'Logout'}
        ])
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
            <img src='/mainicon.png' className='nah'/>
            <Link href='/'><h1 className="title up">Synapse</h1></Link><Link href='/'><h1 className="title flash">Flash</h1></Link>
            <div className='right'>
                <ul className='navLinks'>
                    <Link href='/'><li>Home</li></Link>
                    {userProfile ? null: <Link href='/login'><li>Login</li></Link>}
                    {userProfile ? null: <Link href='/createprofile'><li>Create Profile</li></Link>}
                </ul>
                <div className='profile' onClick={toggleActive}>
                    <h1>Hi, {userProfile && userProfile.firstName}</h1>
                    <HamburgerEx active={active} top='20px' right='15px' themeColor={themeColor}/>
                </div>
            </div>
            <DropDown
                width='200px'
                height='auto'
                top='70px'
                right='5px'
                isActive={active}
                background={themeColor}
                links={links}
            >
                <div className='toggletheme'>
                    <h2>{themeColor === '#ffffff' ? 'Light': 'Dark'}</h2>
                    <ToggleSwitch top='18px' right='30px' margin={'10px'} active={themeColor == '#ffffff' ? true: false} onClick={toggleTheme}/>
                </div>
            </DropDown>
            <style jsx>{`
                #nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 70px;
                    transition: all .3s ease;
                    display: ${show == false ? 'none': 'block'};
                    background: ${themeColor == '#ffffff' ? 'rgba(255,255,255,.9)': 'rgba(20,20,20,.9)'};
                    backdrop-filter: blur(12px);
                    z-index: 99;
                    box-shadow: ${Theme.sh.mat};
                }
                .right {
                    float: right;
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
                    float: left;
                    width: auto;
                    padding: 0 10px;
                    height: 70px;
                    cursor: pointer;
                    display: ${userProfile == null ? 'none': 'block'};
                }
                .profile img {
                    float: left;
                    padding: 15px;
                    width: 30px;
                    height: 30px;
                    transform: translate(0,-50%);
                }
                .profile h1 {
                    float: left;
                    font: 16px 'Roboto';
                    font-weight: bold;
                    white-space: nowrap;
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    margin: 0;
                    margin-top: 35px;
                    margin-right: 100px;
                    transform: translate(-60%,-50%);
                    margin-left: 50%;
                }
                .navLinks {
                    float: left;
                    margin: 5px 10px;
                    padding: 10px 0;
                }
                .navLinks li {
                    float: left;
                    padding: 5px 10px;
                    list-style: none;
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    font: 16px 'Roboto';
                    cursor: pointer;
                    line-height: 32px;
                }
                .navLinks li:after {
                  display:block;
                  content: '';
                  border-bottom: solid 2px ${Theme.colors.purple};  
                  transform: scaleX(0);  
                  transition: transform 250ms ease-in-out;
                }
                .navLinks li:after{ transform-origin: 100% 50%; }
                .navLinks li:hover:after{ transform: scaleX(1); transform-origin: 0% 50%; }
                .nah {
                    float: left;
                    width: 40px;
                    height: 40px;
                    padding: 10px;
                }
                .title {
                    float: left;
                    font: 24px ${Theme.font.title};
                    color: ${themeColor === '#ffffff' ? Theme.colors.dark: 'white'};
                    margin: 5px 2.5px;
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
                @media only screen and (max-width: 600px) {
                    .title {
                        font-size: 28px;
                    }
                    .profile h1 {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}

function Footer({themeColor, show, profile}) {
    return (
        <div id="footer">

            <img src='/mainicon.png' className='logo'/>
            <Link href='/'><h1 className="title up">Synapse</h1></Link><Link href='/'><h1 className="title flash">Flash</h1></Link>
            <Row height='auto'>
                <Col minheight='400px'>
                    <ul className='navLinks'>
                        <h2>Navigation</h2>
                        <Link href='/'><li>Home</li></Link>
                        {profile ? null: <Link href='/login'><li>Login</li></Link>}
                        {profile ? null: <Link href='/createprofile'><li>Create Profile</li></Link>}
                    </ul>
                </Col>
                <Col minheight='400px'>
                    <ul className='navLinks'>
                        <h2>Social Media</h2>
                        <Link href='/'><li>Facebook</li></Link>
                        <Link href='/login'><li>Instagram</li></Link>
                        <Link href='/createprofile'><li>Snap Chat</li></Link>
                    </ul>
                </Col>
            </Row>
            <div className='bottomBar'>
                <h2>Copyright SynapseFlash © 2020</h2>
            </div>
            <style jsx>{`
                .navLinks {
                    padding: 0;
                    width: 200px;
                }
                .navLinks h2 {
                    float: left;
                    width: 100%;
                    text-align: center;
                    font: 18px ${Theme.font.title};
                }
                .navLinks li {
                    float: left;
                    list-style: none;
                    width: 100%;
                    text-align: center;
                    padding: 5px 0;
                    cursor: pointer;
                    opacity: .8;
                    transition: all .3s ease;
                    font: 16px ${Theme.font.style};
                }
                .navLinks li:hover {
                    opacity: 1;
                }
                .bottomBar {
                    float: left;
                    background: ${themeColor === '#ffffff' ? 'grey': 'black'};
                    min-height: 100px;
                    width: 90%;
                    padding: 0px 5%;
                }
                .bottomBar h2 {
                    color: white;
                    float: left;
                    font: 18px 'Montserrat';
                    margin: 35px 30px;
                }
                .logo {
                    float: left;
                    width: 50px;
                    height: 50px;
                    padding: 15px;
                }
                .title {
                    float: left;
                    font: 28px ${Theme.font.title};
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
                    height: auto;
                    display: ${show == false ? 'none': 'block'};
                }
            `}</style>
        </div>
    )
}

function Layout({children, themeColor, setTheme, router, profile, auth}) {

    const [showLayout, setShowLayout] = useState(true)
    useEffect(() => {
        if(router.pathname === '/dashboard') setShowLayout(false)
        else setShowLayout(true)
    }, [router.pathname])

    return (
        <div id='layout'>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="icon" 
                        type="image/png" 
                        href="/mainicon.png"/>
                <title>Synapse Flash</title>
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Andika+New+Basic&family=Montserrat:wght@700&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            <Navigation show={showLayout} themeColor={themeColor} setTheme={setTheme}></Navigation>
            {children}
            <Footer profile={profile} show={showLayout} themeColor={themeColor}></Footer>
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
                    padding: 10px 15px;
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
                    padding: 10px;
                    margin: 5px;
                    background: -webkit-linear-gradient(left, ${Theme.colors.pink}, ${Theme.colors.purple}, ${Theme.colors.pinklight});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </div>
    )
}

export default Layout