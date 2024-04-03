let password = "owolabi";
let attempts = 3;
let input;

// while (attempts > 0) {
//     input = prompt("enter the password!");

//     if (input === password) {
//         console.log("access granted");
//         break
//     } else {
//         attempts--;
//         console.log("incorrect password." + attempts + "attempts left.")
//     }
// }
// if (attempts === 0) {
//     console.log("you have exceeded the maximum limit of number of attemptss.")
// }


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
        alert(`balogun ${usernameE}`)
     }


}