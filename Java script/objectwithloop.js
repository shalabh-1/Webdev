

let x={

    name:"Shalabh",
    "Job Code":124

}
x.salary="500 cr"

// console.log(x);
console.log(x["name"]);


// console.log(x.name);
// console.log(x["Job Code"]);
// console.log(x[salary]); error
// console.log(x.salary);

// let n;
// n=15;
// console.log(n);

for(let i=0;i<Object.keys(x).length;i++){

console.log("Your key is  ", Object.keys(x)[i] ,"    and your values is ",  x[Object.keys(x)[i]]  )    

}

for(let key in x){

    console.log(key ," ", x[key]);

}

let arr=[1,2,3,4];

for(let val of arr){
    console.log(val)
}



