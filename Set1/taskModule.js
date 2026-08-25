const fs = require('fs');
const EventEmitter = require('events');

const taskEmitter = new EventEmitter();

taskEmitter.on('taskAdded', (task) => {
    console.log(`New task added: <${task}>`);
});

function saveTaskCallback(task, callback) {
    fs.appendFile('tasks.txt', `${task}\n`, 'utf8', (err) => {
        if (err) return callback(err);
        callback(null, `Callback: "${task}" saved successfully.`);
    });
}

function saveTaskPromise(task) {
    return fs.promises.appendFile('tasks.txt', `${task}\n`, 'utf8')
        .then(() => `Promise: "${task}" saved successfully.`);
}

async function saveTaskAsync(task) {
    await fs.promises.appendFile('tasks.txt', `${task}\n`, 'utf8');
    taskEmitter.emit('taskAdded', task);
    return `Async/Await: "${task}" saved successfully.`;
}

module.exports = {
    saveTaskCallback,
    saveTaskPromise,
    saveTaskAsync,
    taskEmitter
};
