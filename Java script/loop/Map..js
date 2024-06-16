
let arr=[1,3,5,7,9,12];


let x=arr.map((val)=>{
    
    
    return val>2   
})
console.log(x);

let z=arr.map((val)=>{

        return val+1
    })
    
    

let a=arr.map(val=>{

    return val**3
})
console.log(a);



let y=arr.filter((value,index,arr)=>{

    return value>=3;
})

console.log(y);


let even=val=>{

    // return val%2==0

    // upper cooment me jo likha hai use bhi likh sakte h

    if(val%2==0){
        return true;
    }

    return false;
}

let y2=arr.filter(even)

console.log(y2);



let red=(val1 ,val2)=>{
return val1*val2;
}

let newval=arr.reduce(red);
console.log(newval);


