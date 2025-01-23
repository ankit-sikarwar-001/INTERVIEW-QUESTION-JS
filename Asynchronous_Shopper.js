// Problem : The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
async function placeholder(){
    let a = await placing();
    console.log(a)
}

async function placing() {
    let random = Math.floor(Math.random()*10);
    return new Promise((res,rej)=>{
        console.log("Placing an order is in progress....");
        setTimeout(() => {
            res("Your order placed successfully");
        }, random * 1000);
    })
}
placeholder();