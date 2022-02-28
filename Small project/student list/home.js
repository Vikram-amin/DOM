

function slideShow() {
  const arr = [
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFsaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFsaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ];
  let div = document.getElementById('slideShow');
  let img = document.createElement('img');
  img.src = arr[0];
  div.append(img);


  let i = 0;
  setInterval(function () {
    if (i == arr.length) {
       i = 0;
    }
    img.src = arr[i];
    i++
  },3000)
}

slideShow();


const students = [
  {
    name: "vikram",
    attendence: "99",
    img: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    name: "amin",
    attendence: "88",
    img: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    name: "jai",
    attendence: "60",
    img: "https://www.w3schools.com/w3images/avatar2.png",
  },

  {
    name: "kapila",
    attendence: "40.8",
    img: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    name: "seema",
    attendence: "100",
    img: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    name: "antony",
    attendence: "55",
    img: "https://www.w3schools.com/w3images/avatar2.png",
  },

];

if (localStorage.getItem("students") == null) {
  //if student stored dont store again 

  localStorage.setItem("students", JSON.stringify(students));
}

function showStudents(d) {
  
  let students = d;
  
  let students_div = document.getElementById("students")
  students_div.innerHTML = null; //to stop show twice photo




  students.forEach(function (el) {
    let div = document.createElement('div')

    let p_name = document.createElement('p')
    p_name.innerText = el.name;

     let p_attendence= document.createElement("p");
    p_attendence.innerHTML = el.attendence;
    
    let img = document.createElement('img')
    img.src = el.img;

    div.append(img,p_name,p_attendence)
    
   students_div.append(div);
  })
}


showStudents(JSON.parse(localStorage.getItem("students"))); //default student show


function sortLH() {
  let students = JSON.parse(localStorage.getItem("students"));

  students = students.sort(function (a, b) {
    return a.attendence - b.attendence;
  });
  // console.log(students)
  showStudents(students); //sorted studrnt show
}

function sortHL() {
  let students = JSON.parse(localStorage.getItem("students"));

  students = students.sort(function (a, b) {
    return b.attendence - a.attendence;
  });
  // console.log(students);
  showStudents(students); //sorted studrnt show
}

