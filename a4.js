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

//store user's integer ie. 5
var MAX_ROWS=+prompt("Enter an integer");

//Step 1 Row # ie. first loop = row 5
for(row = MAX_ROWS; row > 0; row--) {
//num additon every read, first loop first read = 1
    num++;
    
//step 2 loop dots, first loop : row=5 so 2<=5, 3<=5, 4<=5,5<=5 and stop. so 4 times it is looped = 4 dots
    for (dot = 2 ; dot<=row ; dot++){
            toPrint += ".";
            
    }
//step 3 Add the number to the loop  and now toPrint =....1    
    toPrint+= num;

//step 4 max_rows = 5 at this point and dot will now be assigned a new value of 4. 4>=5 nope so first loop does not loop this
    for(dot = MAX_ROWS-1 ; dot>=row;dot--) {
        toPrint+= ".";
    }
    
    // = ....1\n and repeats steps 1-4...
    toPrint+="\n";
}

console.log(toPrint);
