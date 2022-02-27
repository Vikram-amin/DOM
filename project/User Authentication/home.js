let cart = localStorage.getItem('cart');
if(cart === null){
  localStorage.setItem('cart',JSON.stringify([]))
}

let products= localStorage.getItem('products');
if(products === null){
  localStorage.setItem('products',JSON.stringify([]))
}


let container = document.getElementById("container");
let cartCount = document.getElementById("count");

let sortButton = document.getElementById("sortButton");
let filterButton = document.getElementById("filterButton");

let url="https://fakestoreapi.com/products";




updateDom()

async function updateDom() {
try {
  let productList; //undefined

  if(JSON.parse(localStorage.getItem('products')).length > 0){
    productList = JSON.parse(localStorage.getItem('products'));
  }else{
    productList = await fetchProducts()
    localStorage.setItem('products',JSON.stringify(productList))
  }
  displayData(productList);

} catch (error) {
  console.log(error)
}
}



async function fetchProducts(){
try {
  let res = await fetch(url); 
  let data = await res.json();
  return data;

} catch (err) {
 console.log(err);
}
}


updateCartCount(JSON.parse(localStorage.getItem('cart')))

function updateCartCount(cart){
cartCount.textContent = "cart count : "+cart.length
}


function filterProducts(){
let filterCriteria = filterButton.value;
let sortCriteria = sortButton.value;
let productList = JSON.parse(localStorage.getItem('products'));

let updatedProductList = productList.filter((prod) => {
  if(filterCriteria === '0-50'){
    return prod.price <= 50;
  }else if(filterCriteria === '51-150'){
    return prod.price > 50 && prod.price <=150;
  }else if(filterCriteria === '>150'){
    return prod.price > 150;
  }else{
    return true;
  }
}).sort((prodA,prodB) => {
  if(sortCriteria === 'asc'){
    return prodA.price - prodB.price;
  }else if(sortCriteria === 'desc'){
    return prodB.price - prodA.price;
  }
})
displayData(updatedProductList)
}


function sortProducts(){
let filterCriteria = filterButton.value;
let sortCriteria = sortButton.value;
let productList = JSON.parse(localStorage.getItem('products'));

let updatedProductList = productList.filter((prod) => {
  if(filterCriteria === '0-50'){
    return prod.price <= 50;
  }else if(filterCriteria === '51-150'){
    return prod.price > 50 && prod.price <=150;
  }else if(filterCriteria === '>150'){
    return prod.price > 150;
  }else{
    return true;
  }
}).sort((prodA,prodB) => {
  if(sortCriteria === 'asc'){
    return prodA.price - prodB.price;
  }else if(sortCriteria === 'desc'){
    return prodB.price - prodA.price;
  }
})
displayData(updatedProductList)
}


function displayData(data) {

container.innerHTML=""
data.forEach(function (product) {
  let productCard = document.createElement("div");

  let img = document.createElement("img");
  img.src = product.image;
  let title = document.createElement("p");
  title.textContent = product.title;
  let price = document.createElement("p");
  price.textContent ='INR '+product.price;
  let btn = document.createElement("button")
  btn.textContent="Add to Cart"
  btn.addEventListener('click',()=>{
    addToCart(product)
  })

  productCard.append(img, title, price, btn);
  container.append(productCard);
});
}


function addToCart(data){
let cart = JSON.parse(localStorage.getItem('cart'))
let checkIfProductExit = cart.find((cartItem) => cartItem.id === data.id);

if(checkIfProductExit){
  alert('Item Already in cart')
}else{
    cart.push(data)
    localStorage.setItem('cart',JSON.stringify(cart))
    updateCartCount(JSON.parse(localStorage.getItem('cart')))
}
}



// Profile its get request

const getUser = async() =>{
    let user = JSON.parse(localStorage.getItem('user'))
    let userName = user.name;
    let token = user.token;
    console.log(userName,token)
    
    
    let res = await fetch(`http://masai-api-mocker.herokuapp.com/user/${userName}`,{
           headers:{
                  'content-Type':'application/json',
                  "Authorization" : `Bearer ${token}`
                },
    });
        let data = await res.json();
        console.log(data)
        // let profileDiv = document.getElementById('profile')
        // profileDiv.textContent ="User : "+data.name

        displayuserdata(data);
    
    }
    getUser()

    const displayuserdata = (data) =>{
      let select = document.getElementById("profile");
      select.innerHTML = "";
      let Profilename = document.createElement("option");
      Profilename.innerText = ` Welcome ${data.name}`;
      let ProfilenameLogout = document.createElement("option");
      ProfilenameLogout .value = "logout"
      ProfilenameLogout .innerText = `Logout`;
      
      select.append(Profilename,ProfilenameLogout);

      select.addEventListener("change" , ()=>{
        let select = document.getElementById("profile");
        if(select.value=="logout"){
          localStorage.removeItem("user")
          window.location.href = "SignUp.html";
        
        }
      })

    }