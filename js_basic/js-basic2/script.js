
document.getElementById("Paragraph").innerHTML = 'Introduction To Javascript';
document.getElementById('Paragraph').style.fontSize = '35px';

function changeText(){
    
    document.getElementById('Para').innerHTML = "Obi is no longer a Boy";
}

let john, mic, great;

john = 20;
mic = 10;
great = (john + mic) * 2 ;

console.log(great);

let fullName = 'john' + '' + 'Doe';
let man = "Obinna";
let woman = "grace";

let herFullName = man + '' + woman ;
console.log(herFullName);

document.getElementById('fname').innerHTML = fullName;

const food = 200;
const water = 50;

let totalBill = food + water ;
console.log(totalBill);

x = 5;
// x = x + 10
x -= 10

console.log(x);


let school = 'FUTO';
document.getElementById('carr').innerHTML= school ;



function newText(){
    let newT = "ill be very great in javascript";
    console.log(newT);
    document.getElementById('newText').innerHTML = newT;
}



{
    var goat = "gril"
}
console.log(goat);

const house = ['duplex', 'hot', 'bungalow'] ;
house[0] = 'story building';
house.push('sky scrapper');


console.log(house);

const build = {cement:5, sand:'5trip', iron:10, paint:'yellow'};

build.cement = '20bag';

console.log(build.sand)


if (new Date().getHours() < 12 ) {
    console.log('Good Morning');
}
else if (new Date().getHours() > 12 && new Date().getHours() <16){
    console.log('Good Afternoon');
}
else if (new Date().getHours() > 16 && new Date().getHours() <2) {
    console.log('Good Evening');}
    else{
        console.log('Go To Bed')
    }



    myFunction();
function myFunction() {

let newCarName = 'BMW';

document.getElementById('scope1').innerHTML= typeof newCarName + 'toyota' + newCarName;

console.log(newCarName);

}

function anotherfunction(){

    let newCarName = 'toyota';

    console.log (newCarName);
}




let xyz = "my name is John"
newName();
function newName() {

document.getElementById ('scope2').innerHTML =xyz

}

console.log(xyz);



let close ;   // we will assign something to it later 
{

let xy   ='Man of God';
//the variable 'xy' can be used any where in the braces 
//we created this function to remember or capture 
//the scope in which it was created.

function iAMAclosure() {
    return xy;

}


// now we can copy the function closure 'iAMAclosure' to a variable outside the braces.

close =  iAMAclosure;

}
console.log(close());
























