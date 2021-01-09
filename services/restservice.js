

// Base Url for the rest api -- Every other directory can be accessed baseURL + "/%s";
const base = 'http://localhost:3600'
export const baseConfig = {
  baseURL: base,
  backendImages: base + '/ftp/',
  thoughtURL: base + '/thoughts/'
};

export async function newRequest (method, route, headers, body) {
  return await fetch(base + route, {
    method: method,
    headers: headers,
    body: JSON.stringify({body})
  })
  .then(res => (res.ok ? res: Promise.reject(res)))
  .then(res => res.json())
}

