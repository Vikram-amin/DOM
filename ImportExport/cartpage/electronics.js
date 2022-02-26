
import navbar from './components/navbar.js'
import {getData,displayData} from './Script/showData.js'

let container = document.getElementById('container')
let header = document.getElementById('header');

header.innerHTML = navbar()

let url =`https://fakestoreapi.com/products/category/electronics`;

let output = await getData(url)


displayData(output)