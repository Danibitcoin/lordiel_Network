alert("i am a javascript developer");
alert(1+2+3);
window.alert(" Man Of God");
[" first born", "last born"].forEach(alert);
alert('man')
alert("woman")
// variable


//examples of variable shown below


let msg;
var message;


msg = "study coding at home";
message="my first code";

[msg,message].forEach(alert);


let user='lordiel', age=35, house='Imo Owerri';

let profile = user + ' at ' + age + ' still lives in ' + house;


alert(profile);


//datatype

//examples


let manName =" lordiel"; // this is  a string datatype
let hisAge = 35 //this is a number datatype and can also be in decimal 0.35

console.log(1/0); // infinty
// operator for number 
//NaN it represent a computational error, it is a result of an incorrect or an undefined mathematical operations.


alert("not a num" / 2-3); //NaN

//string are surrounded by quotes
let him = "this man ehnn";
let her = 'abeg leave her alone';
let them = `they sabi talk to much`; // backticks 



let all = ` i have told you before ${him} ${her} ${them}`;
let allOfThem = him + ' ' + her + ' ' + them;

document.getElementById('phrase').innerHTML = all;

console.log(allOfThem);
console.log(all);

//class work 

let boy = "why are you always fighing ";




;
alert( `i have asked you before ${boy} `);


//prompt accept two arguement 
//examples

let myAge = prompt('how old are you', 40 );
alert(` iam ${myAge}year old !`);



//confirm

let logOut = confirm('are you sure u wanna logout?');
alert('logOut');

//create a web page that ask for a name and output it using prompt

 myName = prompt('what is your name  ',  );
alert(` my name is  ${myName} !`);
