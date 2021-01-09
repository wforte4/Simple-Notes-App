import Router from 'next/router';
import { Cookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { baseConfig } from './restservice';

const cookies = new Cookies();

export async function createProfile(data) {
    // Request data to post to createprofile route on rest api
    const newUser = await fetch(baseConfig.baseURL + '/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        return data
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });
    if(newUser) return newUser
}

export async function loginRequest(email, password) {
    // New Login Data request
    const newLogin = await fetch(baseConfig.baseURL + '/auth', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    .then(function(response) {
        if(response.status == 400) return response.status
        return response.json();
    })
    .then(function(data) {
        return data
    })
    .catch(function(error) {
        return error
    });
    return newLogin
}

export async function forgotPassword(email) {
    // New Login Data request
    const newLogin = await fetch(baseConfig.baseURL + '/users/forgotpass/' + email, {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        return data
    })
    .catch(function(error) {
        return error
    });
    if(newLogin) {
        return newLogin
    }
}

export async function changePassword(token, newPassword) {
    // New Login Data request
    const newLogin = await fetch(baseConfig.baseURL + '/users/changepassword/' + newPassword, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        return data
    })
    .catch(function(error) {
        return error
    });
    if(newLogin) {
        return newLogin
    }
}

export async function submitContact(name, message, email, cellphone) {
    // Request data to post to createprofile route on rest api
    const newfetch = await fetch(baseConfig.baseURL + '/contact', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "message": message,
            "cellphone": cellphone,
            "email": email
        })
    })
    .then(function(res) {
        return res.status
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });

    if(newfetch) {
        return newfetch
    } else {
        return 404
    }
}

export async function patchUser(userId, token, userData) {
    // Request data to post to createprofile route on rest api
    const newfetch = await fetch(baseConfig.baseURL + '/users/' + userId, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ userData })
    })
    .then(res => (res.ok ? res: Promise.reject(res)))
    .then(res => res.json())
    .catch(function(error) {
        console.log('Request failed', error);
    });

    if(newfetch) {
        return newfetch
    } else {
        return 404
    }
}

export async function getAllUsers(token, limit) {
    // New Login Data request
    const allUsers = await fetch(baseConfig.baseURL + '/users', {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        query: JSON.stringify({
            "limit": limit
        })
    })
    .then(res => {
        console.log(res)
        if(!res.ok) return res.status
        else {
            return res.json()
        }
    })
    .then(function(data) {
        return data
    })
    if(allUsers) {
        return allUsers
    }
}


