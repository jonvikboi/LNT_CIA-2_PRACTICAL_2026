const taskModule = require('./taskModule');

taskModule.saveTaskCallback("Callback Task", (err, result) => {
    if (err) console.error(err);
    else console.log(result);
});

taskModule.saveTaskPromise("Promise Task")
    .then(result => console.log(result))
    .catch(err => console.error(err));

async function run() {
    const result = await taskModule.saveTaskAsync("Async Task");
    console.log(result);
}

run();

/*
Expected Output:
Callback: "Callback Task" saved successfully.
Promise: "Promise Task" saved successfully.
New task added: <Async Task>
Async/Await: "Async Task" saved successfully.
*/
