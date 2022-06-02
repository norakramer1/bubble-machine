export const fetchDataFromAPI = async (method, url) => {
  let response 
  if (method === 'PUT' || method === 'POST') {
    response = await fetch(url, {
      method: `${method}`
    })
  } else {
    response = await fetch(url, {
      method: `${method}`,
      mode: 'cors'
    })
  }
  const data = await response.json()
  return await data
}
