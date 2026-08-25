/*
Reference: Node.js Documentation (https://nodejs.org/api/fs.html)
Methods used: fs.readFile, fs.writeFileSync
*/

const fs = require('fs');

fs.writeFileSync('tasks.txt', '1. Study Node.js\n2. Complete CIA-2 Practical\n');

fs.readFile('tasks.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Tasks from file:");
    console.log(data.trim());
});

/*
Expected Output:
Tasks from file:
1. Study Node.js
2. Complete CIA-2 Practical
*/
