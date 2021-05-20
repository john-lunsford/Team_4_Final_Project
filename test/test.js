const { assert, expect } = require('chai');
const { describe, it, afterEach } = require('mocha');
const TaskManager = require('../js/taskManager.js');

describe('class constructor \n', () => {
  // addTask
  afterEach(() => {
    console.log('\n...Completed Task form test!\n');
  });
  it('should create an instance of the class', () => {
    const newInstance = new TaskManager();
    console.log(`   Creating a ${newInstance.name} class for testing!`);
    expect(newInstance).to.be.a('object');
  });
});

describe('functions \n', () => {
  // add a test hook demo
  var taskTest = 1;
  afterEach(() => {
    console.log(`\n...Completed functional test ${taskTest++}!\n`);
  });
  describe('addTask', () => {
    it('should return new Array', () => {
      const task = new TaskManager();
      const name = 'FinalProject Task 1';
      const description = 'complet all the steps of task1';
      const assigned = 'Kevien Scott';
      const due = '05/25/2021';
      const status = 'TODO'
      const id = '1';
       task.addTask(name, description, assigned, due, status, id) 
      const array = [{name: 'FinalProject Task 1', description: 'complet all the steps of task1', assigned: 'Kevien Scott', due: '05/25/2021', status: 'TODO', id: 1}]
      assert.deepEqual(task.tasks, array);
    }); 
  });

//   deleteTasks(taskId) {
//     const newTasks = [];
//     for (let i = 0; i < this.tasks.length; i++) {
//         const task = this.tasks[i]
//         if (task.id !== taskId) {
//             newTasks.push(task);
//         }
//     }
//     this.tasks = newTasks


  describe('deleteTasks', () => {
    it('should delete task', () => {
      const task = new TaskManager();
      const taskId = 1;
        task.deleteTasks(taskId); 
      const array = [{name: 'FinalProject Task 1', description: 'complet all the steps of task1', assigned: 'Kevien Scott', due: '05/25/2021', status: 'TODO', id: 1}]
      assert.notEqual(taskId, array.id);
    }); 
  });

//   getTaskById(taskId){
//     let foundTask
//     for (let i = 0; i < this.tasks.length; i++){
//     const task = this.tasks[i];
//     if (task.id === taskId) {
//     foundTask = task;
//     }
//     }
//     return foundTask;
// }

describe('getTaskById', () => {
    it('should get task by Id', () => {
      const task = new TaskManager();
      const taskId = 1;
      task.addTask('FinalProject Task 1','complet all the steps of task1','Kevien Scott', '05/25/2021','TODO', 1)
      const actualTask = task.getTaskById(taskId);
      assert.equal(actualTask.id, taskId);
    }); 
  });
 });
