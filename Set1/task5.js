const fs = require('fs');

const task = process.argv.slice(2).join(' ') || "Default Task";
console.log(`Task: ${task}`);

process.stdout.write("Save task? (y/n): ");
process.stdin.setEncoding('utf8');

process.stdin.once('data', (data) => {
    const input = data.trim().toLowerCase();
    if (input === 'y' || input === 'yes') {
        fs.appendFileSync('tasks.txt', `${task}\n`);
        console.log("Task saved successfully.");
    } else {
        console.log("Task not saved.");
    }
    process.exit();
});

/*
Expected Output:
Task: Finish Assignment
Save task? (y/n): y
Task saved successfully.
*/
