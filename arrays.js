/*Array Practice
1. Using push and unshift, make this array contain the numbers 
from zero through seven 
*/
const arr = [2, 3, 4];
for(let i = 1 ; i >= 0 ; i--){
    arr.unshift(i);   
}
for(let j = 5 ; j <=7 ; j++){
    arr.push(j);   
}

/*
2.What is returned by push? Before throwing this into the console, 
form a hypothesis about what you think the return value will be
*/
const arr = [5, 7, 9];
arr.push(6); // returns the array length 

/*
3. Change all odd numbers to be those numbers multiplied by two
*/
const numbers = [4, 9, 7, 2, 1, 8];
function doubleArr(){
    for(let i = 0 ; i <numbers.length ; i++ ){
     let newNm =numbers[i] +  numbers[i] ; 
      console.log ( numbers[i] +  numbers[i] )
   }  
   return newNm ;
}

/*
4. Change all odd numbers to be those numbers multiplied by two
*/
const numbers = [4, 9, 7, 2, 1, 8];
for (let i = 0 ; i < number.length ; i++ ) {
    
    if(number[i] % 2=== 0 ){
   console.log(number[i]);
    }else{
   console.log(number[i] *2);
    }   
}


/*
5. Create an array to hold your favorite colors. For each choice, log to the screen 
a string like: My #1 choice is blue.
*/
let color = ["red", "yellow" , "blue" , "green " ]
for(let i = 1 ; i <color.length ; i++){
    console.log ("My #"+i + " choice is " +color[i])
}

/*
6. Create an array of ages. 
Loop through and log only the ages that are over 21.
*/
let ages = [ 5, 10, 15 , 18 , 20 , 21 , 24 , 30 ] 
for(let i = 0 ; i < ages.length ; i ++ ) { 
    if(ages[i] >21 ) {
   console.log("Age over 21 : " +ages[i])
    }else{
   console.log ("Not over 21 " );
    }
}