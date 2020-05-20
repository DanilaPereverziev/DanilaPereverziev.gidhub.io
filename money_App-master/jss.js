let player = document.querySelector(".player"),
x = 1460,
y = 0;

document.addEventListener('keydown', function(event){
    if(event.keyCode == 32){
        let jump = function jump(){  
            player.style.transition = "0.8s";
            player.style.marginTop = "-100px";
          }
          setTimeout(jump,400);
        player.style.transition = "0.8s"
        player.style.marginTop = "250px";
    }
});
let kaktus = document.createElement("div"),
kaktusbig = document.querySelector(".kaktusbig")
text = document.createElement("p");
kaktus.appendChild(text);
text.textContent = "d";
kaktusbig.appendChild(kaktus);
text.classList.add("text");
kaktus.classList.add("kaktus");

let spawn = function spawn(){
kaktus = document.createElement("div"),
kaktusbig = document.querySelector(".kaktusbig")
text = document.createElement("p");
kaktus.appendChild(text);
text.textContent = "d";
kaktusbig.appendChild(kaktus);
text.classList.add("text");
kaktus.classList.add("kaktus");
        kaktus.style.marginTop = "0px";
        console.log(1+1);
}
setInterval(spawn,5000);
let xmasiv = ["1460px","1460px","1410px","1360px","1310px"];
for(let i = 0; i<xmasiv.length; i++){
    setInterval(function(){
        if(kaktus.classList.contains === "kaktus"){
        this.style.marginLeft = xmasiv[i];
        }
    },100);
    };