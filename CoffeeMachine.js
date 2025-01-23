// Problem : The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
async function brewCoffee(coffeeName) { 
  let random = Math.floor(Math.random() * 10);
  console.log("Placing your order....");
  console.log(await gettingReady(coffeeName));
    let a = await placing(coffeeName);
  console.log(a);
}

async function placing(coffeeName) {
  let random = Math.floor(Math.random() * 10+3);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Your ${coffeeName} is ready now`);
    }, random * 1000);
  });
}
async function gettingReady(coffeeName) {
  let random = Math.floor(Math.random() * 10);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Your ${coffeeName} is getting ready`);
    }, random * 1000);
  });
}
brewCoffee("NesCafe");
