// Week 2 - Loops

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let i = 1;  // initial point at 1
while (i <= 5){     //condition
  console.log(i);
  i++              //increments
};

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let j = 1;
do {
  console.log(j);
  j++
}
while (j <= 5);

  
// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (let i = 1; i<= 5; i++){
  console.log(i)
};

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// While Loop:

let m = 10;
while (m > 0){
  console.log (m);
  m--
};

// Do while Loop:

let n = 10;
do {
  console.log (n);
  n--
}
while (n > 0)

// For loop:

for (let m = 10; m > 0; m--){
  console.log (m);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// While Loop:

let a = 7;
while (a < 28){
  console.log (a);
  a++
};

// Do while Loop:

let b = 7;
do {
  console.log (b);
  b++
}
while (b < 28)

// For loop:

for (let a = 7; a < 28; a++){
  console.log (a);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// While Loop:

let c = 10;
while (c < 100){
  console.log (c);
  c += 10;
};

// Do while Loop:

let d = 10;
do {
  console.log (d);
  d += 10
}
while (d < 100);

// For loop:

for (let c = 10; c < 100; c += 10){
  console.log (c);
};

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

//COMMENT: initial point is 1 and condition is set print Help Me! while counterFour is less than 2 and do it by subtracting 1 each time. Since we have not set a proper limit to condition (there are infinite no. less than 2), system will run infinite loop. In order to correct this, we can change the condition to more than and equal to -100)

let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
};

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let myFavInt = 11;

// Using for loop:

for (let i = 0; i <= myFavInt; i++){
  console.log(i);
};

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let favInt = 43;

for (let i = 0; i <= 100; i++){
  if (i === favInt){
    console.log(i + " my favorite number!")
  } else {
    console.log(i + " not my favorite number")
  }
};

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// Answer: So far in the exercises all the loops did the job, after researching online I figured it depends on the condition which to use. 
// For example, if we have known iterations (dont need external condition), we use for loop for collection of arrays, lists etc. 
// On other hand, if no. of iterations are unknown its better to use While loop. It is efective when we want user to input the value
// and keep looping untill the value. 

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
    for (let insideCounter = outsideCounter; insideCounter >= 1 ; insideCounter--) {
        console.log("inside ", insideCounter);
  }
    console.log("***********************************");
 }


 // Exercise was fun. I practised this during pair programming and was able to do it.