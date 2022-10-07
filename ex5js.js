let letter = prompt("Enter a letter");

switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("your letter is a vowel");
    default:
        console.log("your letter is a consonant");                  
}

let num = Number(prompt("Enter a number"));

if(num%5==0 && num%11==0){
    console.log("your number is divisible by 5 and 11");
}else{
    console.log("Not divisible by 5 and 11");
}

let month = prompt("Enter month")
    
switch(month){
    case "January":
        console.log(31);
        break; 
    case "February":
        console.log(28);
        break;
    case "March":
        console.log(31);
        break; 
    case "April":
        console.log(30);
        break;
    case "May":
        console.log(31);
        break; 
    case "June":
        console.log(30);
        break;
    case "July":
        console.log(31);
        break; 
    case "August":
        console.log(31);
        break;   
    case "September":
        console.log(30);
        break; 
    case "October":
        console.log(31);
        break;
    case "November":
        console.log(30);
        break; 
    case "December":
        console.log(31);
        break;                        
}

let time = Number(prompt("Enter a time at o'clock"));

if(time<12){
    console.log("AM");
}else{
    console.log("PM");
}