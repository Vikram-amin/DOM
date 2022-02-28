import navbar from "../comonents/navbar.js";
import {getData} from '../Script/showdata.js'

let header = document.getElementById('header');
header.innerHTML = navbar()


let searchInputElement = document.getElementById('search_input')

searchInputElement.addEventListener('keypress', async(event) => {
      try {
          if(event.key === "Enter"){
              let name = searchInputElement.value
              let respose_data = await getData(`https://api.github.com/users/${name}`);
              console.log(respose_data)
          }
      } catch (error) {
          console.log(error)
      }
})


