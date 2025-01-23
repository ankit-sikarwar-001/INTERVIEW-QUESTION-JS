// Problem : The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

const str =
  "Hey JS! You R AMAZING hello Ankit how Are you ia m fine my typing speed is 89 words per minute ";
const svowels = ["a", "e", "i", "o", "u"];
const bVowels = ["A", "E", "I", "O", "U"];
function countVowels(data) {
  let Scount = 0,
    Bcount = 0;
  for (let i = 0; i < data.length; i++) {
    let char = data[i];
    for (let j = 0; j < svowels.length; j++) {
      if (char === svowels[j]) {
        Scount++;
      }
      if (char === bVowels[j]) {
        Bcount++;
      }
    }
    // console.log(data.charAt(i).toLowerCase());
  }
  console.log(
    `No. of Uppercase Vowels = ${Bcount} \n No. of Lowercase Vowels = ${Scount}`
  );
}
countVowels(str);

// console.log(numOfVowels);
