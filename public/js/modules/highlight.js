// Get API data
import { getOpenedSessionData } from './sessions/currentSessionData.js'

const data = await getOpenedSessionData(window.location.hash.slice(1))


// Wait 1 second to wait for svg circles loaded
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Add hover highlight of curent item you hovert and connected items
export const highlight = async () => {

  // Wait 1 second till the svg is loaded  
  await delay(1000);

  
  // Select svg items
  const svg = document.querySelector('#graph svg');
  for(let items=0; items<svg.children.length; items++){

    // Add addEventListener to all items in svg
    svg.children[items].addEventListener('click', () => {

      // Remove item info
      const itemChildren2 = svg.children;
      for(let items=0; items<itemChildren2.length; items++){
        itemChildren2[items].classList.remove("opacity");
      }


    const item = svg.children[items];
    const itemChildren = svg.children;
    item.classList.add("opacity");

    // Make alle items opacity 0.1
    for(let items=0; items<itemChildren.length; items++){
      itemChildren[items].classList.add("opacityDim");
    }

    // Check alle items that are connected with hovert item
    const currentitem = item.id.replace('node','');
    let friends = 0;
    let itemlinks = 0;
    let infolinks = 0;

    function countItems(item){
      if(item.label == "friend"){
        friends++;
      }
      if(item.label == "itemlink"){
        itemlinks++;
      }
      if(item.label == "infolink"){
        infolinks++;
      }
    }

    // Count all difrent items friend, itemlink, infolink that are from target
    for (const item of data.links) {
      if(item.source == currentitem){
        document.querySelector(`#node${item.target}`).classList.add("opacity");
        countItems(item);
      }
      // Count all difrent items friend, itemlink, infolink that are from source
      if(item.target == currentitem){
        document.querySelector(`#node${item.source}`).classList.add("opacity");
        countItems(item);
      }
    }

    // // Place item info inside a label
    document.querySelector(`.connectionPersons span`).innerHTML = friends;
    document.querySelector(`.itemPersons span`).innerHTML = itemlinks;
    document.querySelector(`.itemSharers span`).innerHTML = infolinks;
  })

  }

}