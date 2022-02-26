import navbar from './components/navbar.js';
import {getData,displayData} from './Script/showData.js'

let header = document.getElementById('header');
header.innerHTML = navbar()

let url =`https://fakestoreapi.com/products/category/jewelery`;

// const getData = async(url) =>{
//     try {
//         let res = await fetch(url);
//         let data = await res.json()
//         return data;
//     } catch (error) {
//         console.log(error)      
//     }

// }

let output = await getData(url)

// const displayData = (data) => {
//     console.log(data)
//     data.forEach((product) => {
//         let card = document.createElement('div');

//         let img = document.createElement('img');
//         img.src = product.image;

//         let title = document.createElement('p');
//         title.textContent = product.title
  
//         card.append(img,title);
//         container.append(card)
//     });
// }

displayData(output)