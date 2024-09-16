const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = {};
        const lines = data.toString().split('\n');
        const noHeader = lines.slice(1);

        noHeader.forEach((line) => {
          if (line) {
            const field = line.split(',');
            students[field[3]] = students[field[3]] ? [...students[field[3]], field[0]] : [field[0]];
          }
        });

        resolve(students);
      }
    });
  });
};
