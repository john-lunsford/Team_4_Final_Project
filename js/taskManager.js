function createTaskHtml(name, description, assigned, due, status, id) {
    const html = `<div class="list-group-item" data-task-id = "${id}">
                      <div class="card border-dark mb-3" style="max-width: 28rem;">
                           <div class="card-header">Task ${id}</div>
                           <div class="card-body text-dark">
                                <h5 class="card-title">${name}</h5>
                                <h6 class="card-text">${description}.</h6>
                                <h6 class="card-text">${assigned}</h6>
                                <h6 class="card-text">${due}</h6>
                                <h6 class="card-text">${status}</h6>
                           </div>
                           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                  <button type="button" class="btn btn-danger btn-sm deleteButton">Delete</button>
                           </div>
                           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                  <button type="button" class="btn btn-success btn-sm doneButton">Done</button>
                           </div>
                     </div>
                 </div>`;
    return html;

}



class TaskManager {
    constructor(tasks, currentId) {
        this.tasks = [];
        this._currentId = 0;
    }
    get currentId() { return this._currentId };
    addTask(name, description, assigned, due, status) {
        this._currentId++;
        this.tasks.push({ name, description, assigned, due, status: 'TODO', id: this.currentId });
    }
    render() {
        let tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const currentTask = this.tasks[i];
            const taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assigned, currentTask.due, currentTask.status, currentTask.id);
            tasksHtmlList.push(taskHtml);
        }
        const tasksHtml = tasksHtmlList.join('\n');
        console.log(tasksHtml);
        return tasksHtml;

    }

    getTaskById(taskId){
        let foundTask
        for (let i = 0; i < this.tasks.length; i++){
        const task = this.tasks[i];
        if (task.id === taskId) {
        foundTask = task;
        }
        }
        return foundTask;
    }


    // In js/taskManager.js, in the TaskManager class, create a save method. This method doesn't require 
    // any parameters.
    // In the save method, create a JSON string of the tasks using JSON.stringify() and store it to a 
    // new variable, tasksJson.
    // Store the JSON string in localStorage under the key tasks using localStorage.setItem().
    // Convert the this.currentId to a string and store it in a new variable, currentId.
    // Store the currentId variable in localStorage under the key currentId using localStorage.setItem().
    // In js/index.js, after both adding a new task and updating a task's status to done, call 
    // taskManager.save() to save the tasks to localSorage.

    save(){
       const tasksJson = JSON.stringify(this.tasks);
       localStorage.setItem('tasks', tasksJson);
       const currentId = String (this.currentId);
       localStorage.setItem('currentId', currentId);

    }

    // In js/taskManager.js, add a new method called load. This method doesn't require any parameters.
    // In the load method, check if any tasks are saved in localStorage with localStorage.getItem().
    // If any tasks are stored, get the JSON string of tasks stored in localStorage with 
    // localStorage.getItem(), making sure to pass the key we used to save the tasks, tasks. 
    // Store this string into a new variable, tasksJson.
    // Convert the tasksJson string to an array using JSON.parse() and store it in this.tasks.
    // Next, check if the currentId is saved in localStorage with localStorage.getItem().
    // If the currentId is stored, get the currentId in localStorage using localStorage.getItem() 
    // and store it in a new variable, currentId.
    // Convert the currentId to a number before storing it to the TaskManager's this.currentId
    // In js/index.js, near the top of the file, after instantiating taskManager, load the tasks with 
    // taskManager.load() and render them with taskManager.render().
   
    load (){
        const tasksJson = localStorage.getItem('tasks');
        if (tasksJson){
        this.tasks = JSON.parse(tasksJson);
        console.log(this.tasks);
        }
        let currentId = localStorage.getItem('currentId');
        this._currentId = Number (currentId);
        console.log(currentId);
    // }
    }



    // In js/taskManager.js, create a deleteTask method on the TaskManager class. It should take one 
    // parameter, taskId, the id of the task we want deleted.
    // In the deleteTask method, create an empty array and store it in a new variable, newTasks.
    // Loop over the tasks, in the loop
    //     Get the current task in the loop, store it in a variable, task.
    //     Check if task.id is not equal to the taskId passed as a parameter.
    //     If the task.id is not equal to the taskId, push the task into the newTasks array.
    // Set this.tasks to newTasks.

    deleteTasks(taskId) {
        const newTasks = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i]
            if (task.id !== taskId) {
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;
    }




}
module.exports = TaskManager;