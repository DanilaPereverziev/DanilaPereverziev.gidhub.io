//ПОДСЧЁТ
let inputosn = document.querySelector(".input-osnova"),
    inputdodat = document.querySelector(".input-dodatkova"),
    btnsumma = document.querySelector(".s2_total-btn"),
    income = document.querySelector(".symma1"),
    waste = document.querySelector(".symma2"),
    summas = "",
    ostach = document.querySelector(".symma"),
    wastes = document.querySelectorAll(".forCloseIcon"),
    vitrats = [];
    //НЕНУЖНЫЕ КЛАССЫ, НО БЕЗ НИХ НЕ РАБОТАЕТ    
    forCloseIcon1 = document.querySelector(".forCloseIcon"),
    forCloseIcon2 = document.querySelector(".forCloseIcon2"),
    forCloseIcon3 = document.querySelector(".forCloseIcon3"),
    forCloseIcon4 = document.querySelector(".forCloseIcon4"),
    input1 = document.querySelector(".forCloseIcon"),
    input2 = document.querySelector(".forCloseIcon2"),
    html = document.documentElement,
    img = document.querySelector(".img"),
    dok1 = document.querySelector(".dok1"),
    dok2 = document.querySelector(".dok2"),
    inputnew = document.querySelector(".enter_costsum"),
    //ФОРМА
    btnsAddWastes = document.querySelectorAll(".s2_costs-btn"),
    form = document.querySelector(".form_enter-costs"),
    inputsum = document.querySelector(".enter_costsum"),
    inputname = document.querySelector(".enter_costname"),
    inputnam = document.querySelector(".inputnam"),
    okbtn = document.querySelector(".send-costs"),
    waste1 = document.querySelector(".s2_costs-btn"),
    waste2 = document.querySelector(".s2_costs-btn2");
forCloseIcon1.style.display = "none";
inputnam.style.display = "none";
img.style.display = "none";
//РАСЧЁТ    
btnsumma.addEventListener("click", function () {
    wastes.forEach(function(el) {
        vitrats.push(+el.innerHTML);
        console.log(vitrats);
      });
    let sum=0;
        for(let i=0;i<vitrats.length;i++){
    sum = sum + parseInt(vitrats[i]);
        }
waste.textContent = sum+" uah";
    income.style.display = "block";
    income.textContent = Number(inputosn.value) + Number(inputdodat.value) + " uah";
    waste = 1 + 1;
    ostach.textContent = Number(income.textContent) - Number(waste.textContent);
    if (inputosn.value === "" && inputdodat.value === "" || inputosn.value === "" && inputdodat.value === "") {
        income.textContent = "";
    };
});
//ДОБАВЛЕНИЕ РАСХОДОВ

let target;
btnsAddWastes.forEach( function (item) {
    item.addEventListener('click', () => {
        form.style.display = "flex";
            target = event.target;      
            let  rightBtn = document.querySelector(".additCosts-list"),
            leftBtn = document.querySelector(".mainCosts-list");
        if (target.classList.contains("btn-right")) {
            okBtn(rightBtn);
            console.log(rightBtn);
        } else {
            okBtn(leftBtn);
        }
    });


});

function okBtn(ulPos) {
    okbtn.addEventListener("click", function (event) {
        wastes.forEach(function(el) {
            vitrats.push(+el.innerHTML);
            console.log(vitrats);
          });
        event.preventDefault();
        let target = event.target;
        console.log(target);
        form.style.display = "none";
        input1.textContent = Number(inputsum.value);
        if(isNaN(inputsum.value)){
            alert("Ошибка");
            inputsum.value = "";
            inputname.value = "";
            img2.remove();
        };

        test(ulPos);
    });
}

function test(ul) {
    let text1 = document.createElement("span"),
        text2 = document.createElement("span"),
        li = document.createElement("li"),
    img2 = document.createElement("img"),
    br = document.createElement("br");
    text1.classList.add("inputnam");
        text2.classList.add("forCloseIcon");
        text2.classList.add("cost-value");
        img2.classList.add("img2");
        li.classList.add("li");
    img2.src = "./img2.png";

    text1.innerHTML = inputname.value;
    text2.innerHTML = inputsum.value;

    li.appendChild(text1);
    li.appendChild(text2);
    li.appendChild(img2);
    li.appendChild(br);
    ul.append(li);
    img2.style.marginBottom = "-10px";
    img2.style.marginLeft = "-10px";

    let i = 0;
    i++
    img2.addEventListener("click", function () {
        text1.remove();
        text2.remove();
        br.remove();
        img2.remove();
    });
};