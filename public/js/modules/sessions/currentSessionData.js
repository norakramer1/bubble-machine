import { fetchDataFromAPI } from '../data/apiData.js'

export const getOpenedSessionData = async (sessionID) => {
  const data = await fetchDataFromAPI('GET', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}`)
  console.log("test");
  const step = await fetchDataFromAPI('POST', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}/step`);
  document.querySelector("#steps").textContent = `Step ${step.step}`;
  return await data
}
