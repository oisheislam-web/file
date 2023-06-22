$(function(){

    $('.xyz').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: false,
        centerMode: true,
      });

})



// let age = document.querySelector(".age");
// let submit = document.querySelector(".submit");
// let result = document.querySelector(".result");

// submit.addEventListener("click", function(){
//     if(age.value > 0){
//         if(age.value > 18){
//             result.innerHTML = "you can give vote"
//         }
//         else{
//             result.innerHTML = "you can not give vote"
//         }
//     }
//     else{
//         result.innerHTML = "you can not give vote"
//     }
// })



let name_field = document.querySelector(".name");
let email_field = document.querySelector(".email");
let password_field = document.querySelector(".password");



let name_error = document.querySelector(".name_error");
let email_error = document.querySelector(".email_error");
let password_error = document.querySelector(".password_error");

let submit = document.querySelector(".submit");

let valid_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener("click", function(){

    // name_validation start
    if(name_field.value == ""){
        name_error.innerHTML = "write your name"
        name_field.style.border = "1px solid red"
        name_field.style.background = "grey"
    }
    else{
        name_error.innerHTML = ""
        name_field.style.border = ""
        name_field.style.background = "unset"
    }
    // email_validation start
    if(email_field.value == ""){
        email_error.innerHTML = "enter your email"
        email_field.style.border = "1px solid red"
        email_field.style.background = "grey"
    }
    else{
        if(email_field.value.match(valid_email)){
            email_error.innerHTML = ""
            email_field.style.border = ""
            email_field.style.background = "unset"
        }
        else{
            email_error.innerHTML = "write valid email"
        }
    }
    // password_validation start
    if(!password_field.value){
        password_error.innerHTML = "enter your password"
        password_field.style.border = "1px solid red"
        password_field.style.background = "grey"
    }
    else{
        if(password_field.value.length < 8){
            password_error.innerHTML = "maximum type 8 character"
        }
        else{
            password_error.innerHTML = ""
            password_field.style.border = ""
            password_field.style.background = "unset"
        }
    }
})