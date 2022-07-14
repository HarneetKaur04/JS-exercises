// Week 4 : Arrays and Objects

// Exercise 1. Make an empty array named animals

let animals = [];
console.log(animals)

// Exercise 2. Add the string "frog" to the array

animals[0] = "frog"
console.log(animals)

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
animals.push("lion", "elephant", "turtle", "dog")
console.log(animals)

// Exercise 4. Update the first item in the array to be "gorilla"

animals[0] = "gorilla"
console.log(animals)

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)
console.log(animals.length)

// Exercise 6. Print the first item in the array
console.log(animals[0])

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
console.log(animals[animals.length-1])

// Exercise 8. Remove the last item from the array
animals.pop()
console.log(animals)

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

let assortedThings = ["Hello" , 45, "True" , 100 , -28 , "Goodbye"]

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...
// I will use for loop to iterate and increment it by one
for (let i = 0; i< assortedThings.length; i++){
    console.log("Item #" + i + " is " + assortedThings[i])
}
// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small

function whatSize(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 100){
            console.log(arr[i] + " BIG")
        } else if (arr[i] < 0){
            console.log(arr[i] + " negative")
        } else {
            console.log(arr[i] + "  small")
        }
    }
}

whatSize([-2, 200, 50]) // calling function to test
whatSize([0, 100, -25]) // calling function to test

// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

const me = {
    name: "Harneet Kaur",
    favoriteAnimal: "Dog",
    favoriteNumber: 7
}

console.log(me)

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)

me.favoriteColor = "Blue"
me.favoriteFood = "Mediterranean"

console.log(me)

// Exercise 14. Update the favoriteAnimal value to something different

me.favoriteAnimal = "Cat"
console.log(me)

// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.

console.log(me.favoriteAnimal)
console.log(me["favoriteAnimal"])


// was not sure what is the 2nd method???? Tried looking up online and found another way through bracket notation. Is this right??


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I am getting used to Arrays but Objects are difficult . Used the following reference to solve last question: https://www.freecodecamp.org/news/javascript-object-keys-tutorial-how-to-use-a-js-key-value-pair/