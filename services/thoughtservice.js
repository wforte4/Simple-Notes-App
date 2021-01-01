import { useSelector } from "react-redux";
import { baseConfig } from '../services/restservice'

export async function uploadThought(thought, user, mindset, auth) {
    console.log(auth)
    // New Login Data request
    const newThought = await fetch(baseConfig.thoughtURL, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth.accessToken}`
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

export async function getThoughts(email, auth) {
    // New Login Data request
    const getThought = await fetch(baseConfig.thoughtURL + 'getbyemail/' + email, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${auth.accessToken}`
        }
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(getThought) {
        return getThought
    }

}