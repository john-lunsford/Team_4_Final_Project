





class TaskManager {
    constructor(tasks, currentId) {
        this.tasks = [];
        this._currentId = 0;
    }
    get currentId (){return this._currentId};
    addTask(name, description, assigned, due, status) {
        this._currentId++;
        this.tasks.push ({name, description, assigned, due, status: 'TODO', id: this.currentId});
    }
  }
  