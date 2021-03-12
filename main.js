
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { calc } = require("./calculator");


while (true) {
// Demander l'operation
const op = readlineSync.question('Operation: ')

// demander nb1
let nb1 = readlineSync.question('nb1: ')
nb1 = Number(nb1)

// demander nb2
let nb2 = readlineSync.question('nb2: ')
nb2 = Number(nb2)

console.log(chalk.green.bold(calc(op,nb1,nb2)))
}