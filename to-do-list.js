const input = require(`readline-sync`);


const myToDos = [
    {
        task: "React Crud App",
        status: "Not Done",
    },
    {
        task: "Minecraft",
        status: "Done",
    },
    {
        task: "Memory Game",
        status: "Done",
    },
    {
        task: "Amazon website",
        status: "Done",
    },
    {
        task: "Personal website",
        status: "Not Done",
    }

]

function addTask(inputs) {
    const newTask = {
        task: inputs[0],
        status: inputs[1],
    }

    myToDos.push(newTask);
    return newTask;
}

function addTaskInput() {
    const task = input.question("Enter your new task: ");
    const status = input.question("Enter status: (done/not done)" ,{limit: ['Done', 'Not Done']}).toLowerCase();
    const inputs = [task, status];

    return inputs;

}

// addTask(addTaskInput());
// console.log(myToDos);

function deleteTask(input) {
    let deleted;
    for (let i=0; i< myToDos.length; i++) {
        if (myToDos[i].task.toLowerCase()===input.toLowerCase()) {
            deleted = myToDos[i].task.toLowerCase();
            myToDos.splice(i, 1);
            break;
        }
        
    }
    return deleted;

}

function deleteTaskInput() {
    const taskToDelete = input.question("Enter task name to delete: ");
    return taskToDelete;
}
// deleteTask(deleteTaskInput());
// console.log(myToDos);

function markAsDone(input) {
    let markedAsDone;
    for (let i=0; i< myToDos.length; i++) {
        if (myToDos[i].task.toLowerCase()===input.toLowerCase()) {
            markedAsDone = myToDos[i].task.toLowerCase();
            myToDos[i].status = "Done";
            break;
        }
    }
    return markedAsDone;
}

// markAsDone(doneOrUndoneInput());
// console.log(myToDos);

function unMarkAsDone(input) {
    let markedAsUndone;
    for (let i=0; i< myToDos.length; i++) {
        if (myToDos[i].task.toLowerCase()===input.toLowerCase()) {
            markedAsUndone = myToDos[i].task.toLowerCase();
            myToDos[i].status = "Not Done";
            break;
        }
    }
    return markedAsUndone;
}

function doneOrUndoneInput() {
    const taskToMark = input.question("Enter task name to mark: ");
    return taskToMark;
}

// unMarkAsDone(doneOrUndoneInput());
// console.log(myToDos);

function listByStatus() {
    myToDos.sort((a, b) => (a.status < b.status) ? 1 : -1)
}

// listByStatus();
// console.log(myToDos);
module.exports = {
    myToDos,
    addTask,
    addTaskInput,
    deleteTask,
    deleteTaskInput,
    markAsDone,
    unMarkAsDone,
    doneOrUndoneInput,
    listByStatus,
};