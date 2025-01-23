// Problem : The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let Gryffinder=[];
let Hufflepuff = [];
let RevenClaw = [];
let Slytherin = [];
let namee = ["Rahul","Ankit Singh","Kiran","Simran","Divya","Poo"];

function magicalHat(){
    for(const element of namee) {
        if (element.length < 6) {
          Gryffinder.push(element);
        } else if (element.length < 8 && element.length >= 6) {
          Hufflepuff.push(element);
        } else if (element.length < 12 && element.length >= 8) {
          RevenClaw.push(element);
        } else if (element.length >= 12) {
          Slytherin.push(element);
        }
        
    }
}
magicalHat()
console.log(Gryffinder, Hufflepuff, RevenClaw, Slytherin);