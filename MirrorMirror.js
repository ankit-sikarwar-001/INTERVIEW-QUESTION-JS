// Problem : The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.



let str = "Hello Ankit";
let p = str.split("")
let rts1 = p.reverse().join().toString();
let pp = "";
for(let i = 0;i<rts1.length;i++){
    if(rts1[i]!==","){
        pp += rts1[i];
    }
}

console.log(pp)
console.log(str)