import rl from 'readline';
import fs from 'fs';

const terminal = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = () => {
  const createFile = (fileName) => {
    const path = `./${fileName}`;

    const checkFile = () => {
      // eslint-disable-next-line no-console
      console.log(fs.existsSync(path)
        ? 'Success'
        : 'Error'
      );
      terminal.close();
    };

    const createContent = (content) => {
      fs.writeFile(path, content, checkFile);
    };

    if (!fileName) {
      prompt();
    }

    terminal.question('Enter file content: ', createContent);
  };

  terminal.question('Enter file name: ', createFile);
};

prompt();
