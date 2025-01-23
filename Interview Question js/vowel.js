// Problem : The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider lowercase vowels.

const str = "Hey JS! You R AMAZING";
const vowels = ['a','e','i','o','u'];
function countVowels(data){
    let count = 0;
for(let i = 0;i<str.length;i++){
    let char = str[i].toLowerCase();
    for(let j = 0;j<vowels.length;j++){
        if(char===vowels[j]){
            count++;
        }
    }
    console.log(str.charAt(i).toLowerCase());   
}
return count
}
const numOfVowels = countVowels(str);

console.log(numOfVowels);