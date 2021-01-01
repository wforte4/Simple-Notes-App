import Router from 'next/router';
import { Cookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { baseConfig } from './restservice';

const cookies = new Cookies();

export async function createProfile(firstname, lastname, email, password) {
    // Request data to post to createprofile route on rest api
    fetch(baseConfig.baseURL + '/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "firstName": firstname,
            "lastName": lastname,
            "email": email,
            "password": password
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });
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

export async function createTask(objective, status, priority, assignee) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newTask = await fetch(baseConfig.baseURL + '/tasks', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookies.accessToken}`
        },
        body: JSON.stringify({
            "objective": objective,
            "status": status,
            "priority": priority,
            "assignee": assignee,
        })
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(newTask) {
        return newTask
    }
}

export async function getTasks(limit, token) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newTask = await fetch(baseConfig.baseURL + '/tasks?limit=' + limit, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookies.accessToken ? getCookies.accessToken: token}`
        }
    })
    .then(function(response) {
        if(response.status == 403) {
            return 'Not Authorized'
        }
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(newTask) {
        return newTask
    }
}

export async function removeTask(taskId) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newTask = await fetch(baseConfig.baseURL + `/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${getCookies.accessToken ? getCookies.accessToken: token}`
        }
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(newTask) {
        return newTask
    }
}

export async function updateTaskStatus(taskId, newstatus) {
    
    const getCookies = cookies.getAll()
    // New Login Data request
    const newTask = await fetch(baseConfig.baseURL + `/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookies.accessToken ? getCookies.accessToken: token}`
        },
        body: JSON.stringify({
            "status": newstatus
        })
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(newTask) {
        return newTask
    }
}

export async function searchProjects(newQuery) {
    // New Login Data request
    const newSearch = await fetch(baseConfig.baseURL + `/searchprojects/` + newQuery, {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        },
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        return error
    });
    if(newSearch) {
        return newSearch
    }
}
