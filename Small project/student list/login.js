
const admins = [ //admins users  22
  {
    username: "raj",
    password: "raj123",
  },
  {
    username: "nrupul",
    password: "nrupul123",
  },
  {
    username: "jonny",
    password: "jonny123",
  },
];

if (localStorage.getItem('admins') == null) { //if admins stored dont store again 33
  
  localStorage.setItem('admins', JSON.stringify(admins));

}

function startLogin(e) { //11
    e.preventDefault(); // prvent default behavior of input submit

    const form = document.getElementById('login')
    
    //1- get the data  44
  const username = form.username.value;
  // console.log(username)
  const password = form.password.value;
  // console.log(password)


    // 2- check the data
  const admins = JSON.parse(localStorage.getItem('admins'));
 // console.log(admins)

    for (let i = 0; i < admins.length; i++) { //check admin username and password is correct
        let u = admins[i].username;
        let p = admins[i].password;

        if (u === username && p === password) { //check input value
            //alert("succes")
          window.location.href='home.html'
            break;
        }
    }
}