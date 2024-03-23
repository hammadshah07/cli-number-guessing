import inquirer from "inquirer";

// computer will generate a random number.
// user input for guessing number.
// compair user input with computer generated number and show the result.

const randomNumber = Math.floor(Math.random()* 6 + 1);

const answers = await inquirer.prompt([{
name: "userguessingnumber",
type: "number",
message: "please guess the number",
},
]);


if (answers.userguessingnumber === randomNumber) {
console.log("congratulation you guess the right answer");
}
else { 
    console.log("Oops! you guessed a wrong number");
}