import {navbar} from "../components/navbar.js";
import { getData } from "../Script/getData.js"

let navbarHeading = document.getElementById('navbarHeading');

navbarHeading.innerHTML = navbar()

let url =`https://swapi.dev/api/people/`;

let personData = await getData(url)


if(localStorage.getItem('personData') === null){
  localStorage.setItem('personData',JSON.stringify(personData))
}

  personData = JSON.parse(localStorage.getItem('personData'))

//console.log("hi")

 let container = document.getElementById('container')



const displayData = (el) => {
   
    container.innerHTML=""

   
    el.results.forEach((data) => {
        let div = document.createElement('div')
     div.innerHTML = `<div id='card'>
     <div class='name'>Name : ${data.name}</div>
     <div class='gender'> Gender : ${data.gender}</div>
     <div class='birth_year'>Birth Year : ${data.birth_year}</div>
     <div class='height'> Height : ${data.height}</div>
     <div class='skin_color'>Skin : Color ${data.skin_color}</div>
     </div>`

        container.append(div)
     });
  
}


displayData(JSON.parse(localStorage.getItem('personData')))