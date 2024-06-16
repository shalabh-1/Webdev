

// createorder

let cart=["Shoes","Socks"]

createOrder(cart,function(OrderId){

        proceedToPayment(orderId,function(paymentInfo){

                    orderSummary(paymentInfo,function(){
                        updatewallet(paymentInfo);
                    })
               
        })


})

// proceedToPayement

// ShowOrdersummary

// update wallet



let promise=createOrder(cart);


let promise2=promise.then((OrderId)=>{

    
    return proceedToPayment(OrderId);

}
)

let promise3=promise2.then((paymentInfo)=>{
    return orderSummary(paymentInfo);
})


promise3.then(()=>{
updatebalance()
})






createOrder(cart).then((OrderId)=>{

 return proceedToPayment(OrderId)

}
).then((paymentInfo)=>{

   return orderSummary(paymentInfo)
}).then(()=>{


    updatebalance();
})




createOrder(cart).then(OrderId=>proceedToPayment(OrderId))
.then(paymentInfo=> orderSummary(paymentInfo))
.then( paymentInfo=> updatebalance(paymentInfo)
   )