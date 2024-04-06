
/* Adjective

Crazy 
Amazing 
Fire
*/


/*
Engine 
Foods
Garments 

*/

/*
Bros 
limited 
Hub
*/

let ad1="Crazy"
let ad2="Amazing"
let ad3="Fire"

let ans="";

let val=Math.random();

console.log(val)
if(val<0.33){
   
    ans+=ad1;
}else if(val>=0.33 && val<0.66){
   
    ans+=ad2;
}else{
    // console.log("Hel1")
    ans+=ad3;
}
val=Math.random();

console.log(val)

if(val<0.33){
    ans+=" Engine";
}else if(val>=0.33 && val<0.66){
    ans+=" Foods";
}else{
    ans+=" Garments";
}
val=Math.random();
console.log(val)
if(val<0.33){
    ans+=" Bros";
}else if(val>=0.33 && val<0.66){
    ans+=" Limited";
}else{
    ans+=" Hub";
}

console.log(ans);

















