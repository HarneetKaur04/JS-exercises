// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.

/*Pseudo Code:
declare a function isDivisibleByThree which takes num as argument
using if/else statement if num is divisible by 3 return true
otherwise return false

Test Cases:
isDivisibleByThree(24) //result true;
isDivisibleByThree(-9)// result true;
isDivisibleByThree(11)// result false;
isDivisibleByThree(0)// result false;
*/

function isDivisibleByThree(num) {
    if (num % 3 === 0 && num != 0) {
        return true
    } else {
        return false
    };
};

console.log(isDivisibleByThree(24)) //result true;
console.log(isDivisibleByThree(-9))// result true;
console.log(isDivisibleByThree(11))// result false;
console.log(isDivisibleByThree(0))// result false;


// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.


/*Pseudo Code:
declare a function lengthOfString which takes a string as argument
create an empty variable called finalLengthOfString
using .length find the length of string and store the value in finalLengthofString
return finalLengthOfString

Test Cases:
lengthOfString("red") //result 3;
lengthOfString(""// result undefined;
lengthOfString("bAnAnA"// result 6;
lengthOfString ("1") // result 1; 
lengthOfString (1) // result undefined; 
*/
function lengthOfString(str) {
    let finalLengthOfString = str.length
    return finalLengthOfString
}

console.log(lengthOfString("red")) //result 3;
console.log(lengthOfString(""))// result 0;
console.log(lengthOfString("bAnAnA"))// result 6;
console.log(lengthOfString("1")) // result 1; 
console.log(lengthOfString(1)) // result undefined because its not a string; 




// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")


let arrOfNumbers = [1, 2, 3]  // create an array of numbers
console.log(arrOfNumbers)
let firstItem = arrOfNumbers[0] // return 1 // access with index 0 which is first element in array
console.log(firstItem)
let lastItem = arrOfNumbers[arrOfNumbers.length - 1] // return 3 // accessing by using the .length-1 to find index of last element
console.log(lastItem)
let newItem = arrOfNumbers.push(4) // Used the push method to add element at end and returned original array which is now modified
console.log(arrOfNumbers)
let arrAddedInBeginning = arrOfNumbers.unshift(["a", "b", "c"])
console.log(arrOfNumbers)

let firstItemOfFirstArray = arrOfNumbers[0][0]
console.log(firstItemOfFirstArray)

// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

/*Pseudo Code:
Get current time using new Date() and store it in variable currentTime
Convert hour to minutes and store it in hours
Add converted hours in minutes to minutes to get total minutes passed for today and store it in minuteLapsed and console.log to check result 
  */

let currentTime = new Date()
console.log(currentTime)
let hours = currentTime.getHours() * 60
let minutes = currentTime.getMinutes()
let minuteLapsed = hours + minutes
console.log(minuteLapsed + " minutes")   //


