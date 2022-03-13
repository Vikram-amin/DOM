import {navbar} from "../components/navbar.js";
import { getData } from "../Script/getData.js"

let navbarHeading = document.getElementById('navbarHeading');

navbarHeading.innerHTML = navbar()

let url =`https://swapi.dev/api/films/`;

let filmData = await getData(url)

let container = document.getElementById('container')

if(localStorage.getItem('filmData') === null){
    localStorage.setItem('filmData',JSON.stringify(filmData))
}


const displayData = (el) => {
    container.innerHTML=""
    el.results.forEach((data) => {
        let div = document.createElement('div')
     div.innerHTML = `<div id='card'>
     <div class='name'>Title : ${data.title}</div>
     <div class='gender'> Episode_id : ${data.episode_id}</div>
     <div class='birth_year'>Director : ${data.director}</div>
     <div class='height'> Producer : ${data.producer}</div>
     <div class='skin_color'>Release_date : Color ${data.release_date}</div>
     </div>`

     container.append(div)
     });
}

displayData(JSON.parse(localStorage.getItem('filmData')))

let sorting = document.getElementById('sort');
sorting.addEventListener('onchange',()=>{
  sort()
})

let filtering = document.getElementById('sort');
filtering .addEventListener('onchange',()=>{
  filter()
})

let sortdata = document.getElementById("sort");
let filterdata = document.getElementById("filter");


function filter(){
    let filterCriteria = filterdata.value;
    let sortCriteria = sortdata.value;
    let filmList = JSON.parse(localStorage.getItem('filmData'));
  
    let updatedList = filmList.filter((film) => {
      if(filterCriteria === 'George_Lucas'){
        return film.director = 'George_Lucas';
      }else if(filterCriteria === 'Irvin_Kershner'){
        return film.director = 'Irvin_Kershner';
      }else if(filterCriteria === 'Richard Marquand'){
        return film.director ='Richard Marquand'
      }else{
        return true;
      }
    }).sort((a,b) => {
      if(sortCriteria === 'asc'){
        return a.episode_id - b.episode_id;
      }else if(sortCriteria === 'desc'){
        return b.episode_id - a.episode_id;
      }
    })
    displayData(updatedList)
  }
  
  
  function sort(){
    let filterCriteria = filterdata.value;
    let sortCriteria = sortdata.value;
    let filmList = JSON.parse(localStorage.getItem('filmData'));
  
    let updatedList = filmList.filter((film) => {
      if(filterCriteria === 'George_Lucas'){
        return film.director = 'George_Lucas';
      }else if(filterCriteria === 'Irvin_Kershner'){
        return film.director = 'Irvin_Kershner';
      }else if(filterCriteria === 'Richard Marquand'){
        return film.director ='Richard Marquand'
      }else{
        return true;
      }
    }).sort((a,b) => {
      if(sortCriteria === 'asc'){
        return a.episode_id - b.episode_id;
      }else if(sortCriteria === 'desc'){
        return b.episode_id - a.episode_id;
      }
    })
    displayData(updatedList)
  }
  