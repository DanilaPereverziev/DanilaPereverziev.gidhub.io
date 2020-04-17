let btn = document.querySelector(".btn"),
    value = document.querySelector(".input");
    btn.addEventListener("click", function(){
        if(value.value === "/help"){
        alert("/money - подкинуть монетку,  /help - посмотреть все команды, /kalkulator - калькулятор /random - казино(Вводить только в второй строке ввода для команд)  after /book(/circlearea --- площадь круга /cylindervolume --- объем цилиндра /numberroot --- корень числа /kattet --- катет) /timer --- таймер")
        }
    });
        btn.addEventListener("click", function(){
    if(value.value === "/money"){
        let a,
        b;
    
    a=Math.floor(Math.random() * (1 - 0 + 1)) + 1;
    b=Math.floor(Math.random() * (1 - 0 + 1)) + 1;
    console.log(a);
    console.log(b);
    
        if( a==1 && b==1 || a==2 && b==2){
            alert('ФАРТ')
            console.clear();
        }else{
            alert('НЕ ФАРТ')
            console.clear();
        }        
    }
        });
        btn.addEventListener("click", function(){
            if(value.value === "/kalkulator"){
let x = document.querySelector(".input2"),
    y = document.querySelector(".input3"),
    c = document.querySelector(".input4"),
    xcy = document.querySelector(".xcy")
if(x.classList.contains('inputw')){
    x.style.display='block',
    y.style.display='block',
    c.style.display='block';
}
btn.textContent = 'Ответ'
btn.addEventListener("click", function(){
    if(y.value === "+"){
        xcy.value = Number(x.value) + Number(c.value)
    }
    if(y.value === "-"){
        xcy.value = Number(x.value) - Number(c.value)
    }
    if(y.value === "/"){
        xcy.value = Number(x.value)/Number(c.value)
    }
    if(y.value === "*"){
        xcy.value = Number(x.value)*Number(c.value)
    }
    if(y.value === "%"){
        xcy.value = Number(x.value)%Number(c.value)
    }
        xcy.style.display = 'block'
        btn.textContent = 'Закончить'
    btn.addEventListener("click", function(){
        x.style.display = "none",
        y.style.display = "none",
        c.style.display = "none",
        xcy.style.display = "none",
        value.value = "",
        btn.textContent = "Enter";
    });

});

            }
        });
        
    btn.addEventListener("click", function(){
if(value.value === "/book"){
    let btn2 = document.querySelector(".btn2"),
        btn3 = document.querySelector(".btn3"),
        btn4 = document.querySelector(".btn4"),
        btn5 = document.querySelector(".btn5"),
        help = document.querySelector(".help"),
        input6 = document.querySelector(".input6"),
        input5 = document.querySelector(".input5");

        btn2.style.display = "block",
        btn3.style.display = "block",
        btn4.style.display = "block",
        btn5.style.display = "block",
        help.style.display = "block",
        input5.style.display = "block";
        help.addEventListener("click", function(){
        alert("Выберите команду --- /circlearea - площадь круга, /cylindervolume --- объем цилиндра, /numberroot --- корень числа, /kattet --- катет")
});
    btn2.addEventListener("click", function(){
        if(input5.value === ""){
            alert("Введите радиус круга в строке только для чисел");
        }
            if(input5.value != ""){
            alert(Math.PI*(Number(input5.value)*Number(input5.value)))
            }
});
    btn3.addEventListener("click", function(){  
        input6.style.display = "block";    
        if(input5.value === "" || input6.value === "" || input5.value === "" && input6.value === ""){
            alert("Введите в предпоследнею строку радиус цилиндра, а в последнюю высоту цилиндра")
        }
        if(input5.value != "" || input6.value != "" || input5.value != "" && input6.value != ""){
            alert(Math.PI*(Number(input5.value)*Number(input5.value))*Number(input6.value));
        }
});
    btn4.addEventListener("click", function(){
        if(input5.value === ""){
    alert("Введите число в нижнюю строку для ввода")
        }
    if(input5.value != ""){
    alert(Math.sqrt(input5.value));
    }
    });
    if(f === "/kattet"){
        j = prompt("Округлять(да,нет)")
        k1 = parseInt(prompt("Введите первый катет"))
        k2 = parseInt(prompt("Введите второй катет"))
        if(j !== "да" && j !== "нет"){
            alert("Ошибка")
        }
        if(j === "да"){
            if(Math.floor((k1*k1)+(k2*k2)) >=  .5){
            alert(Math.round((k1*k1)+(k2*k2)))
            }
            if(Math.floor((k1*k1)+(k2*k2)) < .5){
                alert(Math.floor((k1*k1)+(k2*k2)))
            }
        }
        if(j === "нет"){
            alert((k1*k1)+(k2*k2))
        }
    }
}
    });
// if(asis === "/timer"){
//     let i = 0;
//     let t = 0;
    
//     function ab() {
//       console.clear();
//       i++;
//       if (i > 59) {
//         i = 0;
//         t++;
//       }
//       console.log(t + ":" + i);
//     }
//     setInterval(ab, 1000);
//     }