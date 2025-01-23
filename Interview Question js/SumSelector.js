// Problem : The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.



let num = [10,24,56,47,8,84,-1,95];

function sum(){
    let result= 0;
    for(let i = 0 ; i<num.length;i++){
        if(num[i]<0){
            console.log("bvbvj")
            return result;
        }else{
            result += num[i];
        }
    }
    return result;
}
let Sum = sum();
console.log(Sum);