//prompt the use for a string and a letter
var string =prompt("Enter a string");
var letter = prompt("Enter a letter");

//Using a loop find how many times the letter appears in the string
var sum = 0;

for ( var i = 0; i<string.length; i++) {
if ( string.charAt(i) == letter ) {
    sum+=1;        
        }
}
console.log("The letter " + letter + " appears " + sum + " times in " + string + "!")

var average = 0;

do {
 var positiveNum =+prompt("Enter positive number");
   
    var total =+ positiveNum
    average++; 
        if (average == 1 && positiveNum < 0){
            alert ("error");
        }
    
    
} while (positiveNum > 0)
    
    var totalAvg = total/average;
console.log(totalAvg);



//create nested loop to use the integer as the number of rows and the number of columns with a count down in strings

let row, dot,num = 0;
let toPrint = "";

//store user's integer
var MAX_ROWS=+prompt("Enter an integer");

for(row = MAX_ROWS; row > 0; row--) {
//Row
    num++;
    for (dot = 2 ; dot<=row ; dot++){
            toPrint += ".";
            
    }
    
    toPrint+= num;
    
    for(dot = MAX_ROWS-1 ; dot>=row;dot--) {
        toPrint+= ".";
    }
    
    toPrint+="\n";
}

console.log(toPrint);