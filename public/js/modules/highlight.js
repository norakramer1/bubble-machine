// Get API data
import { fetchDataFromAPI } from './apiData.js'
const sessionID = 4
const data = await fetchDataFromAPI('GET', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}`);

// Wait 1 second to wait for svg circles loaded
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Add hover highlight of curent item you hovert and connected items
export const highlight = async () => {
  await delay(1000);

  
  var element = document.querySelector('svg');
        var children = element.children;
        for(let i=0; i<children.length; i++){
            children[i].addEventListener('mouseenter', () => {
              const item = children[i];
                var element2 = document.querySelector('svg');
                var children2 = element2.children;
                for(let i=0; i<children2.length; i++){
                  children2[i].style.opacity = "0.1";
                }
                item.style.opacity = "1";
                const currentitem = item.id.replace('node','');

                // Check if item has links and if it got link give thos links opacity 1
                for (const item of data.links) {
                  if(item.source == currentitem){
                    document.querySelector(`#node${item.target}`).style.opacity = "1";
                  }
                  if(item.target == currentitem){
                    document.querySelector(`#node${item.source}`).style.opacity = "1";
                  }
                }

                // Here you maby can add lines between items

              })

              // When leaving mouse from item remove opacity
              children[i].addEventListener('mouseleave', () => {
                var element2 = document.querySelector('svg');
                var children2 = element2.children;
                for(let i=0; i<children2.length; i++){
                  children2[i].style.opacity = "1";
                }
              })
        }

}
