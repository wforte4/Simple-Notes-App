import Theme from '../styles/theme'
import Head from "next/head";
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { DropDown } from '../components/elements'
import { useState } from 'react'

function Navigation() {

    const {profile} = useSelector(state => state.post)
    const [active, setActive] = useState(false)

    return (
        <div id="nav">
            <img src='/mainicon.png' className='logo'/>
            <Link href='/'><h1 className="title up">Synapse</h1></Link><Link href='/'><h1 className="title flash">Flash</h1></Link>
            <ul className='navLinks'>
                <Link href='/'><li>Home</li></Link>
                {profile ? null: <Link href='/login'><li>Login</li></Link>}
            </ul>
            <div className='profile' onClick={()=> setActive(true)}>
                <h1>Hi, {profile && profile.name}</h1>
                <img src="/userIcon.png"/>
            </div>
            <DropDown
                width='200px'
                height='auto'
                top='100px'
                right='10px'
                isActive={active}
                links={[{href: '/admin', title: 'Admin'}, {href: '/myprofile', title: 'My Profile' }]}
            />
            <style jsx>{`
                #nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100px;
                    background: rgba(255,255,255,.75);
                    backdrop-filter: blur(12px);
                    z-index: 99;
                    box-shadow: ${Theme.sh.mat};
                }
                .profile {
                    position: absolute;
                    top: 0;
                    right: 10px;
                    width: 200px;
                    height: 100px;
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
                    font: 14px 'Roboto';
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

function Layout({children}) {
    return (
        <div id='layout'>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Andika+New+Basic&family=Montserrat:wght@700&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            <Navigation></Navigation>
            {children}
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
                }
                body {
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}

export default Layout