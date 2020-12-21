import { Children } from "react";
import { useScroll } from '../components/hooks'
import Theme from "../styles/theme";

export function ParallaxBanner({children, image, height, shadow = false}) {
    const currentScroll = useScroll();
    return (
        <div className='banner'>
            <img className='main_bg' src={image}/>
            <style jsx>{`
                .banner {
                    float: left;
                    width: 100%;
                    height: ${height};
                    overflow: hidden;
                    position: relative;
                    box-shadow: ${shadow ? Theme.sh.mat: null};
                }
                .main_bg {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    transform: translate(-50%,-50%) translate3d(0,0,0);
                    margin-top: ${-currentScroll.scrollY / 4}px;
                    transition: all .1s ease;
                }
            `}</style>
        </div>
    )
}