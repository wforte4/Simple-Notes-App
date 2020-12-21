import { ParallaxBanner } from '../components/elements'

function Index() {

    return (
        <div>
            <ParallaxBanner
                image='/mainbg.png'
                height='600px'
                shadow
            />
            <div className='content'>

            </div>
            <ParallaxBanner
                image='/mainbg.png'
                height='600px'
                shadow
            />
            <style jsx>{`
                .content {
                    float: left;
                    width: 100%;
                    height: 600px;
                }
                .credit {
                    position: absolute;
                    left: 10px;
                    bottom: 10px;
                    z-index: 10;
                    color: white;
                }
            `}</style>
        </div>
    )
}

export default Index