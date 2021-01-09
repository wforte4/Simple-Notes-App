import { useState } from 'react'

function showErr(number) {
    switch(number) {
        case '401':
            return "401 Not Authorized"
        case '403':
            return "403 Forbidden"
        default:
            return "Something went wrong sorry :("
    }
}

function NotAuthorized({status}) {

    const message = useState(showErr(status))

    return (
        <div className='noauth'>
            <p>{message}</p>
            <style jsx>{`
                .noauth {
                    float: left;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                p {
                    float: left;
                    margin: 0;
                    font: 18px 'Roboto';
                    color: red;
                }
            `}</style>
        </div>
    )
}

NotAuthorized.getInitialProps = async(ctx) => {
    const message = await ctx.query.errorMessage
    return {status: message}
}

export default NotAuthorized