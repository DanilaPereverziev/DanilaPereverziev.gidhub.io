// #1
// let num = 0;

// while(num<10);{
//     num++;
//     console.log(num);
// }


// // #2
// let num = 0;
// while(num<10);{
//     num++
// if (num%2==0);{
//     console.log("Парне");
// }else{
//     console.log("Не Парне");}
// }


//  #3
// let num = 20;

// while(num<28){
//     num++
//     console.log(num)
// }


// #4
// let name='';
// name = prompt('имя героя ');
// while(name.length>=6){
//     name = prompt('имя героя ');
//     if(name.length<6){
//         console.log(name);
//     }
// }


// #5

// masiv = [5,3,6,2,4];
// let result=0;
// for(let i=0; i<masiv.length ; i++){
//     console.log(masiv[i]);
//     result+=masiv[i];
// }
// console.log(result);


// #6
// masiv = [-1,2,3,-5,6,-7,-10];
// let result=0;
// for(let i=0; i<masiv.length ; i++){
//     console.log(masiv[i]);
//     if(masiv[i]>0){
//     result = result+masiv[i]
//     }
// }
// console.log(result)


// #8
// for(let n=1000; n>50;){
//     n = n/2;
//     console.log(n);
// }


// #7
masiv = [1,2,3,4,5,6];
let result = ""
for(let i=-1; i<masiv.length; i+6){
   let con = console.log(masiv[i+1]+'-',masiv[i+2]+'-',masiv[i+3]+'-',masiv[i+4]+'-',masiv[i+5]+'-',masiv[i+6]+'-');
}
