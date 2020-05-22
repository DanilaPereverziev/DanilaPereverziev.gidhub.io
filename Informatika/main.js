let corzinka = document.querySelector(".corzinka"),
    body = document.querySelector(".body"),
    appples,
    apple = document.createElement("img");
    apple.classList.add("apple");
    apple.src = "./Screenshot_1.png";
    body.appendChild(apple);
    let y = 8,
    yp = 8,
    xApple = "",
    x = 0;
;


let rand = Math.floor(Math.random()*5),
    randMasiv = ["110px", "450px", "751px", "1049px", "607px","937px"]; 
console.log(rand);

if(rand === 0){
    apple.style.marginLeft = randMasiv[0];
}
if(rand === 1){
    apple.style.marginLeft = randMasiv[1];
}
if(rand === 2){
    apple.style.marginLeft = randMasiv[2];
}
if(rand === 3){
    apple.style.marginLeft = randMasiv[3];
}
if(rand === 4){
    apple.style.marginLeft = randMasiv[4];
}
if(rand === 5){
    apple.style.marginLeft = randMasiv[5];
}
if(rand === 6){
    apple.style.marginLeft = randMasiv[6];
}
    console.log(apple);
    
    document.onkeydown = function(event){
        if(event.key == "ArrowRight"){
            corzinka.style.marginLeft = x+"px";
            x=x+40;
        }
        if(event.key == "ArrowLeft"){
            corzinka.style.marginLeft = x+"px";
            x=x-40;
        }
    }
    setInterval(function(){
    y = y + 20;
    apple.style.marginTop = y+"px";
    },100);

    
    document.onkeyup = e => {
      apple.style.transform = `translate(${0}px, ${0}px)`;
      const appleBox = apple.getBoundingClientRect();
      const basketBox = corzinka.getBoundingClientRect();
      
      if(rectCollision(appleBox, basketBox)){
        y = 8;
        let i = 0;
        i++;
        rand = Math.floor(Math.random()*5);
        if(rand === 0){
            apple.style.marginLeft = randMasiv[0];
        }
        if(rand === 1){
            apple.style.marginLeft = randMasiv[1];
        }
        if(rand === 2){
            apple.style.marginLeft = randMasiv[2];
        }
        if(rand === 3){
            apple.style.marginLeft = randMasiv[3];
        }
        if(rand === 4){
            apple.style.marginLeft = randMasiv[4];
        }
        if(rand === 5){
            apple.style.marginLeft = randMasiv[5];
        }
        if(rand === 6){
            apple.style.marginLeft = randMasiv[6];
        }
      }

    function rectCollision(o1, o2) {
        return o1.left < o2.right && o1.bottom > o2.top &&
             o1.right > o2.left && o1.top < o2.bottom
    }
}


    // document.onkeydown = function(event){
    //     if(event.key == "ArrowLeft"){
    //         apple.style.marginTop = y+"px";
    //         y=y+40;
    //     }
    // }
    // if(apple.getBoundingClientRect <= -180){
    //     apple.remove();
    // }
    // document.addEventListener('mouseover', function(){
    //     console.log(apple.getBoundingClientRect());
    // });