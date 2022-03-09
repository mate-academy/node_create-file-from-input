"use strict";
import readline from "readline";
import fs from "fs/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter file name:", (answer) => {
  try {
    rl.question("Provide content:", (content) => {
      fs.writeFile(answer, content);
      console.log("Succes");
      rl.close();
    });
  } catch (error) {
    console.log("Error");
  }
});
