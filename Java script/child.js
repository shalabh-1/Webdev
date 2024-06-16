console.log("Hello")
document.querySelector(".child").style.background="pink"

console.log(document.querySelector(".child"))
let x=document.querySelectorAll(".child");

console.log(x.length)


document.querySelectorAll(".child").forEach(el=>{
    console.log(el);
    el.style.background="yellow"
})



