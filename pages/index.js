import { ParallaxBanner, Row, Col } from '../components/elements'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProjects } from '../store/actions/postAction'
import Theme from '../styles/theme'

function Index({themeColor}) {


    return (
        <div>
            <ParallaxBanner
                image='/mainbg.png'
                height='800px'
                background={themeColor}
                shadow
            />
            <Row
                height='700px'
            >
                <Col>
                    <div className='center'>
                        <p>This website is going to be intended to help people organize and think more positively. Together we can help change the thoughts inside your brain to empower you to take great action.</p>
                    </div>
                </Col>
                <Col>
                    <div className='center'>
                        <img src='/think.png' />    
                    </div>
                </Col>
            </Row>
            <style jsx>{`
                .center {
                    float: left;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .center p {
                    float: left;
                    width: 70%;
                    text-align: center;
                    font: 16px 'Roboto';
                }
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