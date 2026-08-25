const EventEmitter = require('events');
const fs = require('fs').promises;

const taskEmitter = new EventEmitter();

taskEmitter.on('taskAdded', (task) => {
    console.log(`New task added: <${task}>`);
});

async function saveTaskAsync(task) {
    try {
        await fs.appendFile('tasks.txt', `${task}\n`, 'utf8');
        taskEmitter.emit('taskAdded', task);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

saveTaskAsync("Learn EventEmitter");

/*
Expected Output:
New task added: <Learn EventEmitter>
*/
