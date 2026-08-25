const taskModule = require('./Set1/taskModule');

console.log("Task Logger Started");

const task = process.argv.slice(2).join(' ') || "Complete CIA-2 Practical";

async function main() {
    console.log(`Logging Task: "${task}"`);
    try {
        const status = await taskModule.saveTaskAsync(task);
        console.log(status);
    } catch (err) {
        console.error(err.message);
    }
}

main();
