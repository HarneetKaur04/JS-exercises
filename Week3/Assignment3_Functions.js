// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

function logGreeting(){
    console.log ("Hello!");
};

logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

function getName(){
    return "Harneet Kaur"
};

console.log(getName())

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call getName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

function logGreeting2(){
    console.log("Hello! My name is " + getName())
};

logGreeting2()

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function sumOfNum(num1, num2, num3){
    return num1 + num2 + num3
};

console.log(sumOfNum(3, 5, 2)); // test case
console.log(sumOfNum(0, 100, -20)); // test case

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

function getDiscount(age){
    if (age <= 14 || age >= 65){
        return "true"
    } else {
        return "false"
    }
};

console.log(getDiscount(5)) // test case
console.log(getDiscount(70)) // test case
console.log(getDiscount(25)) // test case

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function exercise6( num, string){
    return string.repeat(num)
};

console.log(exercise6(3, "Hello ")) // test case
console.log(exercise6(5, "GoodDay! ")) // test case

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does // mysteryFunction1 takes an argument p1 and return its values by multiplying with 2
// 2. What prints out for the value of y // 4, since value of y is assigned as 4, answer should return 4
// 3. What prints out for the value of z // 8, since const z runs the mysteryFunction1 with parameter as y which is 4, it will run the function and multiply 4 by 2 returning 8
// Now run the code and see if you're correct. // Yayyy!!! I was able to decode this
// Were you correct? If not, what did you learn?

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does // it takes two parameters p1 and p2 and declares a const x which is subtraction of p2 from p1 and it return the value of x
// 2. What prints out for the value of a// 6,  const a will run the mysteryFunction with 10 and 4 as parameters and will result in subtraction and give out 6
// 3. What prints out for the value of b// 5,  const a will run the mysteryFunction with a as 6 which resulted above and 1 as parameters and will result in subtraction and give out 5
// Now run the code and see if you're correct. // Yayyy!!! I was able to decode this
// Were you correct? If not, what did you learn?

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";
let arr = groceryList.split(",")
console.log(arr)

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.

const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
let arr1 = mySchedule.split("--->", 2) /// will use separator and limit to represent first two things
console.log(arr1)

// This exercise was fun. I had problem in ques 3 and exercise 9. for exercise 9, the link mentioned in question solved my query.