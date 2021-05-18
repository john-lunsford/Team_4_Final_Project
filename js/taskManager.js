function createTaskHtml(name, description, assigned, due, status, id) {
    const html = `<div class="list-group-item">
                      <div class="card border-dark mb-3" style="max-width: 28rem;">
                           <div class="card-header">${id}</div>
                           <div class="card-body text-dark">
                                <h5 class="card-title">${name}</h5>
                                <h6 class="card-text">${description}.</h6>
                                <h6 class="card-text">${assigned}</h6>
                                <h6 class="card-text">${due}</h6>
                                <h6 class="card-text">${status}</h6>
                           </div>
                           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                  <button type="button" class="btn btn-primary btn-sm doneButton">Done</button>
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
    

// In the getTaskById() method, create a foundTask variable to store the found task.
// Note Since we'll be mutating (modifying) this variable, be sure to declare it with let!
// Loop over the this.tasks array, for each task in the loop:
//     Store the current task in a variable called task 
//     Compare task.id to the passed in taskId, if its a match, store the task to the variable foundTask
// After the loop, return the foundTask variable from the method.


    getTaskById(taskId){
        let foundTask = [];
        for (let i = 0; i < this.tasks.length; i++){
        const task = this.tasks[i];
        if (task.id === taskId) {
        return task;
        }
        }
        return foundTask;
    }
}


    
    
    

