//Register

const register= async() => {
    try {
        let registerData = {
         name : document.getElementById('name').value,
         email : document.getElementById('email').value,
         password : document.getElementById('password').value,
         username : document.getElementById('username').value,
         mobile : document.getElementById('mobile').value,
         description : document.getElementById('description').value,
        }

        registerData_json = JSON.stringify(registerData);

         document.getElementById('name').value = "";
         document.getElementById('email').value = "";
         document.getElementById('password').value = "";
         document.getElementById('username').value = "";
         document.getElementById('mobile').value = "";
         document.getElementById('description').value = "";

        let res = await fetch(`http://masai-api-mocker.herokuapp.com/auth/register`, {
            method : 'POST',
            headers:{
                'content-Type':'application/json',
            },
            body : registerData_json
        })
             let data = await res.json();
            // console.log(data)

             if(data.message == 'Registration Success'){
                alert(data.message)
               window.location.href = "login.html";
             }else{
                 alert(data.message)
             }
            
        
    } catch (error) {
       console.log(error)
    }
}


//login

const login = async() => {
try {
    let loginData={
         username : document.getElementById('login_username').value,
         password : document.getElementById('login_password').value,
    }

    let loginData_JSON = JSON.stringify(loginData);

    let res = await fetch(`http://masai-api-mocker.herokuapp.com/auth/login`,{
      method : 'POST',
            headers:{
                'content-Type':'application/json',
            },
            body : loginData_JSON
        })
            let data = await res.json();
            console.log(data) //token
            let users ={name:loginData.username,token:data.token}
            localStorage.setItem('user',JSON.stringify(users))  
            window.location.href='home.html'

} catch (error) {
    alert('Username or Password is wrong')
}
}

