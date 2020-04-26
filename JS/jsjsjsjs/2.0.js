//Version 1.1
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
        input6.style.display = "none",
        input5.style.display = "block";
        if(input5.value === ""){
            alert("Введите радиус круга в строке только для чисел");
        }
            if(input5.value != ""){
            alert(Math.PI*(Number(input5.value)*Number(input5.value)))
            }
});
    btn3.addEventListener("click", function(){  
        input6.style.display = "block",
        input5.style.display = "block";
        if(input5.value === "" || input6.value === "" || input5.value === "" && input6.value === ""){
            alert("Введите в предпоследнею строку радиус цилиндра, а в последнюю высоту цилиндра")
        }
        if(input5.value != "" || input6.value != "" || input5.value != "" && input6.value != ""){
            alert(Math.PI*(Number(input5.value)*Number(input5.value))*Number(input6.value));
        }
});
    btn4.addEventListener("click", function(){
        input6.style.display = "none",
        input5.style.display = "block";
        if(input5.value === ""){
    alert("Введите число в нижнюю строку для ввода")
        }
    if(input5.value != ""){
    alert(Math.sqrt(input5.value));
    }
    });
    btn5.addEventListener("click", function(){
            input5.style.display = "block",
            input6.style.display = "block";
            if(input5.value === "" || input6.value === "" || input5.value === "" && input6.value === ""){
                alert("Введите первый и второй катет");
            }
            if(input5.value != "" || input6.value != "" || input5.value != "" && input6.value != ""){
            alert((Number(input5.value)*Number(input5.value))+(Number(input6.value)*Number(input6.value)));
            }
});
}
});

let i = 0,
    t = 0,
    btn6 = document.querySelector(".btn6"),
    input7 = document.querySelector(".input7")
    btn6.addEventListener("click", function(){
function ab() {
  console.clear();
  i++;
  if (i > 59) {
    i = 0;
    t++;
  }
  input7.value = t + ":" + i;
}
setInterval(ab, 1000);
    });
//Setings
let btnset = document.querySelector(".btn-set"),
set = document.querySelector(".set"),
flex = document.querySelector(".flex"),
  btnset2 = document.querySelector(".btn-set2"),
  html = document.querySelector("html"),
  settings = document.querySelector(".settings"),
  settings2 = document.querySelector(".settings2"),
  settext = document.querySelector(".settext"),
  btnset3 = document.querySelector(".btn-set3"),
  btnset4 = document.querySelector(".btn-set4"),
  settext2 = document.querySelector(".settext2"),
  timer = document.querySelector(".input7"),
  input5 = document.querySelector(".input5");
settings.addEventListener("click", function(){
    btnset.style.display = "block",
    btnset2.style.display = "block",
    settext.style.display = "block",
    btnset3.style.display = "block",
    btnset4.style.display = "block",
    settext2.style.display = "block";
})
settings2.addEventListener("click", function(){
    btnset.style.display = "none",
    btnset2.style.display = "none",
    settext.style.display = "none",
    btnset3.style.display = "none",
    btnset4.style.display = "none",
    settext2.style.display = "none";
})
btnset.addEventListener("click", function() {
  html.style.backgroundColor = "#494949"
  timer.style.backgroundColor = "#494949"
  timer.style.Color = "#494949"
  input5.style.backgroundColor = "#494949"
  input5.style.Color = "#fff"
})
btnset2.addEventListener("click", function() {
    html.style.backgroundColor = "#fff"
    timer.style.backgroundColor = "#fff"
    timer.style.Color = "#fff"
    input5.style.backgroundColor = "#fff"
    input5.style.Color = "#494949"
  })

  btnset3.addEventListener("click", function() {
    btn6.style.marginLeft = "400px",
    input7.style.marginLeft = "300px";
    
  })
  btnset4.addEventListener("click", function() {
    btn6.style.marginLeft = "1320px",
    input7.style.marginLeft = "1220px";
    })