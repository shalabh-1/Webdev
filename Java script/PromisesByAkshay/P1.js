const GITHUB_API="https://api.github.com/users/akshaysaini"




//  user hi promise h
let User=fetch(GITHUB_API);

console.log(User)

// if promises is in  fulfiled state
User.then((data)=>{
console.log(data);

})
