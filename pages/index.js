import { ParallaxBanner, Row, Col } from '../components/elements'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProjects } from '../store/actions/postAction'
import Theme from '../styles/theme'

function Index({themeColor}) {

    const dispatch = useDispatch()

    const {projects} = useSelector(state => state.post)

    useEffect(() => {
        dispatch(fetchProjects())
    }, [])

    console.log(themeColor)


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
                        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                    </div>
                </Col>
                <Col>
                    <div className='center'>
                        <img src='/brainAnatomy.jpg' />    
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