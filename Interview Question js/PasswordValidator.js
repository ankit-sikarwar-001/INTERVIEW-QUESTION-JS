// Problem : The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.



let pass = "Anblm2";

function check(pass) {
  let pss = pass.split("");
  let count = 0,upp=0,low =0;
  pss.forEach((element) => {
      if (isFinite(element)) {
          count++;
        }
    });
    for(let i = 0;i<pss.length;i++){
        if(pass.charCodeAt(i)<91 && pass.charCodeAt(i)>64){
            upp++;
            console.log(pass.charCodeAt(i));
        }
        if (pass.charCodeAt(i) > 96 && pass.charCodeAt(i) < 123) low++;
    }
    try {
      if(pass.length<8){
        throw "Password must be of 8 character";
      }
    
      if (count == 0) {
        throw "Error enter a valid password having atleast one digit ";
      }
      if (upp == 0) {
        throw "Error enter a valid password having atleast one uppercase ";
      }
      if (low == 0) {
        throw "Error enter a valid password having atleast one lowercase ";
      }
  } catch (error) {
    console.log(error)
  }
  console.log(pass)
}

check(pass);
