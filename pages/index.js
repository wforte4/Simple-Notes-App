import { ParallaxBanner } from '../components/elements'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProjects } from '../store/actions/postAction'

function Index() {

    const dispatch = useDispatch()

    const {projects} = useSelector(state => state.post)

    useEffect(() => {
        dispatch(fetchProjects())
    }, [])

    return (
        <div>
            <ParallaxBanner
                image='/mainbg.png'
                height='800px'
                shadow
            />
            <div className='content'>
                {projects && projects.map((project, i) => {
                    return <h2 key={i}>{project.title}</h2>
                })}
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