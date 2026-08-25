const fs = require('fs').promises;

function saveTaskPromise(task, filePath = 'tasks.txt') {
    return fs.appendFile(filePath, `${task}\n`, 'utf8');
}

async function saveTaskAsync(task, filePath = 'tasks.txt') {
    try {
        await saveTaskPromise(task, filePath);
        console.log(`Task "${task}" saved successfully.`);
    } catch (err) {
        console.error(`Catch block error: ${err.message}`);
    }
}

async function run() {
    await saveTaskAsync("Learn Async/Await", "tasks.txt");
    await saveTaskAsync("Invalid Path Test", "./non_existent_folder/tasks.txt");
}

run();

/*
Expected Output:
Task "Learn Async/Await" saved successfully.
Catch block error: ENOENT: no such file or directory, open './non_existent_folder/tasks.txt'
*/
