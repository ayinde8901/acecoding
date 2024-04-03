let password = "owolabi";
let username = "balogun"
let attempts = 5;
let input;

let submit = document.getElementById('submit')

function login(){
    let username = document.getElementById('username')
    let pass =document.getElementById('pass').value
    let validPass = password ===pass

    let usernameE=username.value
    console.log(usernameE)

     if(usernameE=="" || !pass){
        alert("fill all filed")
     } else if(password!==pass) {
        alert('password not macth')

     } else{
        alert("password correct")
        location.href='index.html'
        alert(`welcome to melodia academy ${usernameE}`)
     }
}