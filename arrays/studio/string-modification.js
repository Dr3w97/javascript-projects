const input = require('readline-sync');
let str = input.question("What word would you like to shift around");
let info = input.question(`How many letters do you want to move to the end of ${str}`)
if (info > str.length) {
    info = 3
    console.log ("You have entered an invalid number");
}
console.log(info)

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

newStr = str.slice(0,info);
newString = str.slice(info);
newString += newStr;
console.log(newString);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The original word was ${str} the new word is ${newString}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
