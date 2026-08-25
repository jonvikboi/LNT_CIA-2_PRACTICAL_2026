/*
V8 & libuv Architecture:
V8 executes JavaScript code synchronously on a single call stack.
libuv provides the event loop and a thread pool to handle asynchronous,
non-blocking I/O operations (like fs.readFile) in the background. Once the
I/O is complete, libuv places the callback in the queue, which the event loop
pushes back to V8 when the call stack is clear.
*/

const fs = require('fs');

fs.writeFileSync('tasks.txt', 'Task 1: Complete Node.js Practical\nTask 2: Learn Node.js Architecture\n');

console.log("Triggering fs.readFile...");

fs.readFile('tasks.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File content:\n" + data.trim());
});

console.log("Message printed immediately after fs.readFile (demonstrates non-blocking behavior)");

/*
Expected Output:
Triggering fs.readFile...
Message printed immediately after fs.readFile (demonstrates non-blocking behavior)
File content:
Task 1: Complete Node.js Practical
Task 2: Learn Node.js Architecture
*/
