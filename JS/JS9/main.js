// #1
// let sbm = document.querySelector(".sbm");

// sbm.addEventListener("click", function(event){
//     event.preventDefault();
//     alert("Вы нажали на кнопку");
// });


// #2
// let toogle = document.querySelector(".toogle"),
//     shavuha = document.querySelector(".shavuha");
// toogle.addEventListener('click', function(){
//     if(shavuha.classList.contains("hide")) {
//         shavuha.classList.remove("hide");
//     }else {
//         shavuha.classList.add("hide");
//     }
// });

// #3 
// let input = document.querySelector(".phone");
// input.addEventListener("focus", function(){
// console.log(input.value);
// });


// #4
// let input = document.querySelector(".phone"),
// html = document.querySelector("html")
// html.addEventListener("click", function(){
// console.log(input.value);
// });


// #5
// window.addEventListener("DOMContentLoaded", function(){
//     alert("Загрузку сайта завершено.");
// });


// #6
// function loadFunc(){
//     window.addEventListener("DOMContentLoaded", function(){
//         let btn = document.querySelector(".sbm"),
//     inputs = document.querySelector(".inputs"),
//     obj = {};
//     btn.addEventListener("click", function(){
//         obj = {
//             vik: inputs.value,
//             prizvishe: inputs.value,
//             imia: inputs.value,
//             pobatkovi: inputs.value,
//         };
//     console.log(obj);
//     });
// });
// };
// loadFunc();


// #7 
// let img = document.querySelector(".shavuha");
// img.addEventListener("mouseover", function(){
//     console.log(img.src);
// });


// #8
// let btn = document.querySelector(".sbm"),
//     value = document.querySelector(".inputs");
//     btn.addEventListener("click", function(){
//         if(value.value === "Сергій"){
//             alert("Ви перемогли");
//         }else{
//             value.value = "";
//         }
//     });