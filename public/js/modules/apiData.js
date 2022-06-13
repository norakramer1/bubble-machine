export const fetchDataFromAPI = async (method, url) => {
  if (method === 'PUT' || method === 'DELETE') {
    fetch(url, {
      method: `${method}`
    })
  } else {
    const response = await fetch(url, {
      method: `${method}`,
      mode: 'cors'
    })
    const data = await response.json()
    return data
  }
}
