import { useSelector } from "react-redux";


export async function uploadThought({thought, user, mindset}) {

    const {auth} = useSelector(state => state.post)
    // New Login Data request
    const newThought = await fetch(baseConfig.thoughtURL, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth && auth.accessToken}`
        },
        body: JSON.stringify({
            "thought": thought,
            "user": user,
            "mindset": mindset,
        })
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(newThought) {
        return newThought
    }

}