const fs = require('fs');

function saveTaskCallback(task, callback) {
    fs.appendFile('tasks.txt', `${task}\n`, 'utf8', (err) => {
        if (err) return callback(err);
        callback(null, `Task "${task}" saved successfully.`);
    });
}

saveTaskCallback("Learn Callbacks", (err, message) => {
    if (err) {
        console.error("Error:", err.message);
    } else {
        console.log(message);
    }
});

/*
Expected Output:
Task "Learn Callbacks" saved successfully.
*/
