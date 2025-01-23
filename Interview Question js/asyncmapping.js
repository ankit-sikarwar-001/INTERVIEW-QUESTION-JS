// Problem :Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

let num = [14,51,24,95,78,36];
let newarr=[];
async function marr(num){
    console.log(num)
    for(let i = 0; i<num.length;i++){
        let a = await mul(num[i]);
        console.log(a);
        newarr.push(a)   
    }
        console.log(newarr);

}

async function mul(a){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        res( a*2);
    },2000)
});
}
marr(num);