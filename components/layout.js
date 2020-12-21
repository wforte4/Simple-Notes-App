import Theme from '../styles/theme'
import Head from "next/head";
import Link from 'next/link'

function Navigation() {

    return (
        <div id="nav">
            <img src='/mainicon.png' className='logo'/>
            <Link href='/'><h1 id="title">Synapse Flash</h1></Link>
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
                .logo {
                    float: left;
                    width: 70px;
                    height: 70px;
                    padding: 15px;
                }
                #title {
                    float: left;
                    font: 38px ${Theme.font.title};
                    cursor: pointer;
                    margin: 15px 10px;
                    padding: 10px 5px;
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
                }
                body {
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    margin-top: 100px;
                }
            `}</style>
        </div>
    )
}

export default Layout