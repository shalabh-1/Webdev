// It run always on top
(()=> { 
    console.log("Welcome to GeeksforGeeks!"); 
})() 

function shalabh(a){

    console.log(`hey ${a} You are Sexy`);
    console.log('hey '+ a +' You T-shirt is too good');
    console.log("I am Happy Now ",a,"All Good")
    
}


let x=function sum(a,b){
    return a+b;
}

let y=function check(){
 console.log("check");  
 return 0;
}

shalabh("Shalabh");


console.log(x(2,3));
console.log(y());

function Mul(a,b,c=30) {

    return a*b*c;
}
let val=Mul(10,20);
let val2=Mul(10,20,2);


console.log(val);

console.log(val2);


let anon1=function(){
    console.log("This is anonymous 1 function")
}
anon1();

let anon2=function(a){
    console.log("This is anonymous 2 function with parameters")
}
anon2(1);



setTimeout(function(){
console.log("2 second delay anonymous")
},2000);

let arr=(t)=>{
console.log("arrow function and anonymous 3");
}


console.log(arr(99))


    


