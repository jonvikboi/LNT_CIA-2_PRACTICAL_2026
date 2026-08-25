# L&T EduTech — Node.js & Asynchronous JavaScript (CIA-2 Practical Solutions 2026)

This repository contains complete Node.js practical solutions for **CIA-2 Practical Question Paper — Set 1 (Command-Line Task Logger)**.

---

## 📋 Exam Information

- **Course:** Node.js & Asynchronous JavaScript
- **Semester:** 5th Semester
- **Exam:** CIA - 2 (Practical)
- **Question Set:** Set 1 (Command-Line Task Logger)
- **Total Attempted Tasks:** 10 Tasks (Tasks 1, 2, 3, 5, 6, 8, 10, 11, 14, 15)
- **Marks:** 20 Marks (10 × 2 Marks)

---

## 📂 Project Structure

```text
LNT_CIA_2_PRACTICAL_2026/
├── package.json               # Node.js project configuration and scripts
├── package-lock.json          # Dependency lockfile
├── logger.js                  # Main integrated command-line task logger entry file
├── tasks.txt                  # Output text file where tasks are persisted
├── README.md                  # Detailed documentation and execution guide
└── Set1/
    ├── task1.js               # Task 1: Node.js Development Setup & Running Node.js Files
    ├── task2.js               # Task 2: V8 Engine & libuv Architecture (Non-Blocking I/O)
    ├── task3.js               # Task 3: Official Node.js Docs Reference & fs.readFile
    ├── task5.js               # Task 5: Process Object (process.argv) & Terminal I/O (process.stdin)
    ├── task6.js               # Task 6: nodemon Setup & Live Monitoring
    ├── task8.js               # Task 8: Asynchronous Error-First Callbacks (fs.appendFile)
    ├── task10.js              # Task 10: JavaScript Promises (.then / .catch)
    ├── task11.js              # Task 11: Async/Await with Try/Catch Error Handling
    ├── task14.js              # Task 14: EventEmitter ('taskAdded' event and listener)
    ├── task15.js              # Task 15: Local Modules & CommonJS Import/Export
    └── taskModule.js          # Task 15: Local module exporting task functions and emitter
```

---

## 📝 Attempted Tasks & Descriptions

| Task # | Topic / Question Title | Description | Script File |
| :--- | :--- | :--- | :--- |
| **Task 1** | **Development Setup & Running Files** | Initialized project via `npm init -y`, created entry file `logger.js`, and verified output `"Task Logger Started"`. | [`Set1/task1.js`](./Set1/task1.js) |
| **Task 2** | **Node.js Architecture (V8 & libuv)** | Detailed architecture comment explaining V8 & libuv interaction. Demonstrated non-blocking behavior using `fs.readFile`. | [`Set1/task2.js`](./Set1/task2.js) |
| **Task 3** | **Node.js Docs & Examples** | Referenced official `fs` API docs, documented method names used, and adapted example to read `tasks.txt`. | [`Set1/task3.js`](./Set1/task3.js) |
| **Task 5** | **Process Object & Terminal I/O** | Parsed task description from `process.argv` and prompted user confirmation ("y/n") via `process.stdin`. | [`Set1/task5.js`](./Set1/task5.js) |
| **Task 6** | **nodemon & Application Monitoring** | Configured `nodemon` as a `devDependency` and added `"npm run dev"` script for live auto-reloading. | [`Set1/task6.js`](./Set1/task6.js) |
| **Task 8** | **Asynchronous Callbacks** | Created `saveTaskCallback(task, callback)` utilizing error-first callback pattern with `fs.appendFile`. | [`Set1/task8.js`](./Set1/task8.js) |
| **Task 10** | **JavaScript Promises** | Rewrote task saving as `saveTaskPromise(task)` using `fs.promises.appendFile` with chained `.then()` and `.catch()`. | [`Set1/task10.js`](./Set1/task10.js) |
| **Task 11** | **Async/Await & Try/Catch** | Built `saveTaskAsync(task)` awaiting `saveTaskPromise` inside `try/catch`. Verified `catch` block with an invalid folder path. | [`Set1/task11.js`](./Set1/task11.js) |
| **Task 14** | **EventEmitter & Event Flow** | Created `taskEmitter` instance emitting `'taskAdded'` on new task creation and registered an event listener. | [`Set1/task14.js`](./Set1/task14.js) |
| **Task 15** | **Node Modules (Import/Export)** | Modularized functions into `taskModule.js` with `module.exports` and consumed them via `require()` in `task15.js` and `logger.js`. | [`Set1/task15.js`](./Set1/task15.js) |

---

## 🚀 How to Run the Solutions

### 1. Prerequisites
Make sure [Node.js](https://nodejs.org/) (v16 or newer recommended) is installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Individual Tasks
You can execute each task directly via Node.js or npm scripts:

```bash
# Task 1: Basic setup and run
node Set1/task1.js
# Or: npm run task1

# Task 2: Architecture explanation & Non-blocking I/O demo
node Set1/task2.js
# Or: npm run task2

# Task 3: Official docs example (fs.readFile)
node Set1/task3.js
# Or: npm run task3

# Task 5: Process CLI arguments and interactive stdin prompt
node Set1/task5.js "Review CIA-2 Notes"
# Or: npm run task5

# Task 6: Nodemon monitoring service
npm run dev

# Task 8: Error-first callback implementation
node Set1/task8.js
# Or: npm run task8

# Task 10: Promise-based implementation (.then / .catch)
node Set1/task10.js
# Or: npm run task10

# Task 11: Async/Await with try/catch error handling
node Set1/task11.js
# Or: npm run task11

# Task 14: EventEmitter and listener demonstration
node Set1/task14.js
# Or: npm run task14

# Task 15: Local module import/export verification
node Set1/task15.js
# Or: npm run task15
```

### 4. Run the Main Application
```bash
npm start
# Or:
node logger.js "My Custom Task"
```
