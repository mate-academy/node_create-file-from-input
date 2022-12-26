'use strict';
import readline from "readline";
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fileName = ''
let fileContent = ''

const askQuestion = (question, func) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (userInput) => {
      if (userInput) {
        console.log(userInput)
        func(userInput)
      }
      resolve()
    })
  })
}

const createFileFromInput = async () => {
  await askQuestion('File name:', (userInput) => fileName = userInput)
  await askQuestion('File content:', (userInput) => fileContent = userInput)
  rl.close()

  fs.writeFile(`./${fileName}`, fileContent, (error) => {
    console.log(error ? 'Error' : 'Success')
  });
}

createFileFromInput()
