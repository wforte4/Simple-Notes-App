import { getAllUsersAdmin } from '../store/actions/postAction'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'next/router'
import Theme from '../styles/theme'

function Admin({user, auth, themeColor}) {

    const dispatch = useDispatch()
    const {allusers}  = useSelector(state => state.post)
    console.log(user)
    console.log(auth)
    useEffect(() => {
        if(auth) {
            dispatch(getAllUsersAdmin(auth.accessToken, 50))
        }
    }, [])

    return  (
        <div className='admin'>
            <h1>All Users</h1>
            <div className='labels'>
                <h3>First Name</h3>
                <h3>Last Name</h3>
                <h3>Email</h3>
                <h3>Permission Level</h3>
            </div>
            <div className='allUsers'>
                {allusers && allusers.map((user, i) => {
                    return (
                        <div key={i} className='singleUser'>
                            <h2 className='rightborder'>{user.firstName}</h2>
                            <h2 className='rightborder'>{user.lastName}</h2>
                            <h2 className='rightborder'>{user.email}</h2>
                            <h2>{user.permissionLevel}</h2>
                        </div>
                    )
                })}
            </div>
            <style jsx>{`
                .rightborder {
                    border-right: 1px solid ${themeColor === '#ffffff' ? 'black': 'white'};
                }
                .labels {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    display: flex;
                    flex-flow: column no-wrap;
                }
                .labels h3 {
                    margin: 10px 0;
                    font: 18px 'Montserrat';
                    width: 25%;
                    text-align: center;
                }
                .allUsers {
                    float: left;
                    width: 90%;
                    margin: 10px 5%;
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: space-between;
                }
                .singleUser {
                    float: left;
                    width: 100%;
                    display: flex;
                    margin: 8px 0;
                    padding: 4px 0;
                    border-radius: 2px;
                    box-shadow: ${Theme.sh.grey};
                    flex-flow: column no-wrap;
                    justify-content: flex-start;
                }
                .singleUser h2 {
                    padding: 10px;
                    margin: 0;
                    font: 15px 'Roboto';
                    width: 25%;
                    text-align: center;
                    overflow: hidden;
                }
                h1 {
                    float: left;
                    padding: 10px;
                    margin: 20px;
                    font: 32px 'Montserrat';
                }
                .admin {
                    float: left;
                    margin: 60px 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}

Admin.getInitialProps = async(ctx) => {
    if(ctx.auth) {
        console.log(ctx.auth);
    } else {
        if(ctx.res) {
            ctx.res.writeHead(302, {
              Location: `/error?errorMessage=${401}`
            })
            ctx.res.end()
        }
    }
    return {status: 'auth'}
}

export default Admin