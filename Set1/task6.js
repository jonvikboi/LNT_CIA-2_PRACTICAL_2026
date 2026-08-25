console.log("Task Logger running with nodemon...");
console.log(`Started at: ${new Date().toLocaleTimeString()}`);

let count = 1;
const timer = setInterval(() => {
    console.log(`Heartbeat #${count++}`);
    if (count > 3) clearInterval(timer);
}, 1000);

/*
Expected Output:
Task Logger running with nodemon...
Started at: <current_time>
Heartbeat #1
Heartbeat #2
Heartbeat #3
*/
