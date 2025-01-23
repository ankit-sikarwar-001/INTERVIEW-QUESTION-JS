// Problem: The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.



let array = [21,85,76,9,98,76,9,46];
for(let i = 0;i<array.length;i++){
    let check = true;
    for(let j= i-1;j>=0;j--){
        console.log(array[j]/2)
        if(array[j]/2==array[i]){
            check=false;
            break
        }
    }
    console.log("new j");

    if(check){
        array[i] *=2;
    }
}
console.log(array)