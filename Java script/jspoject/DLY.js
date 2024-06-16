function createCard(title,ChannelName,views ,thumbnail){

    let Celement=document.createElement("div");
    Celement.setAttribute("class","card")
 document.querySelector(".container").append(Celement);
    

    let left=document.createElement("div");
    left.setAttribute("class","left");

//    let lst= document.querySelectorAll(".card");

//    lst[lst.length-1].append(left)

Celement.append(left);

        

    let image=document.createElement("img");

    image.setAttribute("src",thumbnail);
   let lst2=document.querySelectorAll(".left")

    lst2[lst2.length-1].append(image);


    let right=document.createElement("div");
    right.setAttribute("class","right");

    let cardlst=document.querySelectorAll(".card");

    cardlst[cardlst.length-1].append(right);



    let titleD=document.createElement("div");
    titleD.setAttribute('class','title');

     let Rlst=document.querySelectorAll(".right");

     Rlst[Rlst.length-1].append(titleD);




        let span=document.createElement("span");

        let txtNode=document.createTextNode(title)
        span.append(txtNode);
     

     let Tlst=document.querySelectorAll(".title");

     Tlst[Tlst.length-1].append(span);


     let bottom=document.createElement("div");

     bottom.setAttribute("class","bottom");


     Rlst[Rlst.length-1].append(bottom);



     let Cname=document.createElement("span");

        let TxtNodeofCname=document.createTextNode(ChannelName +" . ")
        Cname.append(TxtNodeofCname);

        Cname.setAttribute("class","CName");

     bottom.append(Cname);



     let viewEl=document.createElement("span");

        viewEl.setAttribute("class","views");

            bottom.append(viewEl);



    //  Views

    let val=views;
    let count=0;
    while(val!=0){

            
            val=Math.floor(val/10);
            count++;

    }
    

        let ans=""
    if(count==4){
        ans=Math.floor(views/Number.parseInt(Math.pow(10,count-1)));
        ans+="K Views . "
    }else if(count==3){
        ans=views;
    }else if(count==5 || count==6){
        ans=Math.floor(views/1000)
        ans+="K Views . ";
    }if(count==7){
        ans=Math.floor(views/Number.parseInt(Math.pow(10,count-1)));
        ans+="M Views . ";
    }else if(count==8){
        ans=Math.floor(views/Number.parseInt(Math.pow(10,count-2)));
        ans+="M Views . ";
    }
    




    let countTextNode=document.createTextNode(ans);

    viewEl.append(countTextNode);

     

}


createCard(" Your First Html Website | Sigma Web Development Course - Tutorial #2 "   ,"CodeWithHarry",  19999999,"https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ");

createCard(" Your First Html Website | Sigma Web Development Course - Tutorial #2 "   ,"CodeWithHarry",  19999999,"https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ");
createCard(" Your First Html Website | Sigma Web Development Course - Tutorial #2 "   ,"CodeWithHarry",  19999999,"https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ");


// jo event hamesha ke liye lagna h usme document ued krte h
document.addEventListener("scroll",()=>{
    
    createCard(" Your First Html Website | Sigma Web Development Course - Tutorial #2 "   ,"CodeWithHarry",  19999999,"https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ");

})

alert('sgjfdgfjj');

