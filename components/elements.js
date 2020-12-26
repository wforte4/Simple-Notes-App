import { Children } from "react";
import { useScroll } from '../components/hooks'
import Theme from "../styles/theme";
import React from 'react'
import Link from 'next/link'

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

export class Row extends React.Component {
    render () {
        const colcount = React.Children.count(this.props.children)
        const newchildren = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {width: (100 / colcount), height: this.props.height})
        })
        return (
            <div className='row'>
                {newchildren}
                <style jsx>{`
                    .row {
                        float: left;
                        width: ${this.props.padding ? 100 - (this.props.padding * 2): 100}%;
                        padding: 0 ${this.props.padding}%;
                        margin: ${this.props.margin} 0;
                        background: ${this.props.background};
                        min-height: 200px;
                        overflow: ${this.props.overflow};
                        height: ${this.props.height};
                    }
                    @media only screen and (max-width: 650px) {
                        .row {
                            height: auto;
                        }
                    }
                `}</style>
            </div>
        )        
    }
}

export const Col = ({padding, children, background, margin, width, height, mobileDisplay}) => {
    return (
        <div className='col'>
            {children}
            <style jsx>{`
                .col {
                    float: left;
                    position: relative;
                    width: ${width}%;
                    padding: ${padding};
                    margin: ${margin};
                    background: ${background};
                    min-height: 200px;
                    height: ${height};
                }
                @media only screen and (max-width: 650px) {
                    .col {
                        width: 100%;
                        display: ${mobileDisplay == false ? 'none': 'block'};
                    }
                }
            `}</style>
        </div>
    )
}

export function getDate(datetime) {
    const first = datetime.split('T')
    const date = first[0]
    const second = first[1].split('Z')
    const time = second[0]
    return { date, time };
}

export const Date = ({datetime}) => {
    const date = datetime.split('T')
    return date[0]
}

export const DropDown = ({width, height, top, right, isActive, links}) => {
    return (
        <div className='dropdown'>
            {links && links.map((link, i) => {
                return (
                    <Link key={i} href={link.href}><h2>{link.title}</h2></Link>
                )
            })}
            <style jsx>{`
                .dropdown {
                    position: absolute;
                    transition: all .3s ease;
                    background: white;
                    box-shadow: ${Theme.sh.mat};
                    border-radius: 4px;
                    opacity: ${isActive ? 1: 0};
                    width: ${width};
                    height: ${height};
                    top: ${isActive ? top: 0};
                    right: ${right};
                    transform: translateY(${isActive ? 0: '-150%'});
                }
                .dropdown h2 {
                    float: left;
                    width: 100%;
                    text-align: center;
                    font: 16px 'Roboto';
                    cursor: pointer;
                    margin: 0;
                    padding: 10px 0;
                }
                .dropdown h2:hover {
                    background: rgba(200,200,200,.4);
                }
            `}</style>
        </div>
    )
}