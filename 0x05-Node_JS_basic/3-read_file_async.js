const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      const lines = data.split('\n').slice(1, -1);
      const header = data.split('\n').slice(0, 1)[0].split(',');
      const indexFn = header.findIndex((ele) => ele === 'firstname');
      const indexFd = header.findIndex((ele) => ele === 'field');
      const fields = {};
      const students = {};

      lines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[indexFd]]) fields[list[indexFd]] = 0;
        fields[list[indexFd]] += 1;
        if (!students[list[indexFd]]) students[list[indexFd]] = '';
        students[list[indexFd]] += students[list[indexFd]] ? `, ${list[indexFn]}` : list[indexFn];
      });

      console.log(`Number of students: ${lines.length}`);
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
        }
      }
      return resolve();
    });
  });
};
