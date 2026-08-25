const fs = require('fs').promises;

function saveTaskPromise(task) {
    return fs.appendFile('tasks.txt', `${task}\n`, 'utf8');
}

saveTaskPromise("Learn Promises")
    .then(() => {
        console.log('Task "Learn Promises" saved successfully.');
    })
    .catch((err) => {
        console.error("Error:", err.message);
    });

/*
Expected Output:
Task "Learn Promises" saved successfully.
*/
