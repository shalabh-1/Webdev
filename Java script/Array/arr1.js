let arr=[1,2,3,4,5];


console.log(arr.toString());
console.log(typeof arr)

// it returns updated length and push element at last
let len=arr.push(29);
console.log(len);
// return delet  elememnt at last and return eleted element 
let delval =arr.pop()

console.log(delval);


console.log(arr);
// delete element at front and return deleted element
console.log(arr.shift());
// add Element at front and return mdified length
let len2=arr.unshift("Puppy");
console.log(arr);


// it return boolean value;
// console.log(delete arr[4]);


let arr2=[45,56,4,77,5];
let arr3=["nisha","muskan"]


// existing array ko change nhi krta and return new array
console.log(arr.concat(arr2));
console.log(arr.concat(arr2,arr3));
arr2.sort()

// sort array
console.log(arr2.sort());

