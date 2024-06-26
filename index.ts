#!/usr/bin/env node                // shebang is used to tell which interpreter to use for the script in the terminal.

import inquirer from "inquirer"; // inquirer is used to take input from the user and store it in a variable.
import chalk from "chalk";      // chalk is used to color the text in the terminal.

while(true){
    
const currency : any = {
    "USD": 1,             //united state dollar is a base currency. 
    "EUR": 0.92,          
    "INR": 83.34,
    "GBP": 0.8,
    "JPY": 157,
    "AUD": 1.51,
    "CAD": 1.37,
    "CNY": 7.23,
    "RUB": 90.43,
    "CHF": 0.9,
    "KRW": 1386.58,
    "MXN": 17,
    "BRL": 5.20,
    "TRY": 32.31,
    "HKD": 7.82,
    "IDR": 16258,
    "PHP": 58.64,
    "PKR": 278.02,
    "KWD": 0.31,
    "OMR": 0.38,
    "QAR": 3.64,
    "SAR": 3.75,
};

let user_answer = await inquirer.prompt(
    [
    {
    name: "from",
    type: "list",
    message: "Enter from currency",
    choices: ["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD", "CNY", "RUB", "CHF", "KRW", "MXN", "BRL", "TRY", "HKD", "IDR", "PHP", "PKR", "KWD", "OMR", "QAR", "SAR"],
},
{
    name: "to",
    type: "list",
    message: "Enter to currency",
    choices: ["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD", "CNY", "RUB", "CHF", "KRW", "MXN", "BRL", "TRY", "HKD", "IDR", "PHP", "PKR", "KWD", "OMR", "QAR", "SAR"],
},
{
    name: "amount",
    type: "number",
    message: "Enter amount",
}
]
);

console.log(user_answer);

let fromAmount =currency[user_answer.from]; //exchange rate
let toAmount =currency[user_answer.to];     //exchange rate
let amount = user_answer.amount;           // amount

let baseAmount =amount / fromAmount;      //USD base currency.
let convertedAmount = baseAmount * toAmount;  //converted amount
console.log(`convertedAmount =  ${chalk.green(convertedAmount.toFixed(2))}`);

console.log(amount);
console.log(fromAmount);
console.log(toAmount);
}







