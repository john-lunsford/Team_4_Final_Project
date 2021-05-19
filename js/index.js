//Create a JavaScript file named index.js and include it into your index.html page.
//Implement a JavaScript function named validFormFieldInput(data)
//Add an ID attribute to each form field and implement the code needed to retrieve the each form field value using the following method:

// In js/index.js, near the top of the file, after instantiating taskManager, load the tasks with 
// taskManager.load() and render them with taskManager.render().

let newTask = new TaskManager();

const newTaskNameInput = document.querySelector('#taskName');
const newTaskDescriptionInput = document.querySelector('#taskDescription');
const newAssignedToInput = document.querySelector('#assignedTo');
const newDueDateInput = document.querySelector('#dueDate');

const nullCheck = (name, description, assigned, due) => {
  if ((name === '') || (description === '') || (assigned === '') || (due === '')) {
    return false;
  }
  else {
    return true;
  }
}



function formCheck(isValid) {
  var x = document.getElementById("formAlert");
  if (isValid === true) {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function validFormFieldInput() {


  const name = newTaskNameInput.value;
  //console.log('name: ' + name);

  const description = newTaskDescriptionInput.value;
  //console.log('description: ' + description);

  const assigned = newAssignedToInput.value;
  //console.log('assigned to: ' + assigned);

  const due = newDueDateInput.value;
  //console.log('due: ' + due);

  const formValid = nullCheck(name, description, assigned, due);
  formCheck(formValid);
  if (formValid) {
    newTask.addTask(name, description, assigned, due);
    newTaskNameInput.value = '';
    newTaskDescriptionInput.value = '';
    newAssignedToInput.value = '';
    newDueDateInput.value = '';
    newTask.save();

  }
  console.log(newTask.tasks);
  const taskCardsHtml = newTask.render();
  listGroup.innerHTML = taskCardsHtml;
}


const button = document.getElementById("clickButton");
button.addEventListener('click', validFormFieldInput);




// Now we have our deleteTask method ready, we need to connect it to the delete buttons we created 
// in Step 1.

// We'll be using the delete-button class we added to the buttons to find them. It's all very similar
//  to the code we did for the "Mark As Done" button. After the deleting the task, remember to 
// taskManager.save() and taskManager.render() the tasks!

//     1. In js/index.js, find the EventListener for the click event on the Tasks List we created in Task 8.
//     2. At the bottom of the function, after our code that handles the "Mark As Done" button, 
// create a new if statement to check if the event.target.classList contains the class 'delete-button'.
//     3. If it does, get the parentTask and store it as a variable.
//     4. Get the taskId of the parent task from its data-task-id property - remember, since it's stored 
// as a string in a data attribute, we need to convert it to a number, just like we did for task 8!
//     5. Delete the task, passing the taskId to taskManager.deleteTask()
//     6. Save the tasks to localStorage using taskManager.save()
//     7. Render the tasks using taskManager.render().



const listGroup = document.getElementById('listGroup');

listGroup.addEventListener('click', (event) => {
  if (event.target.classList.contains("doneButton")) {
    const parentTask = event.target.parentElement.parentElement.parentElement;
    // return parentTask;
    const taskId = Number(parentTask.dataset.taskId);
    // console.log(taskId);
    const task = newTask.getTaskById(taskId);
    task.status = 'DONE'
    const taskCardsHtml = newTask.render();
    listGroup.innerHTML = taskCardsHtml;
    newTask.save();
  }
 if (event.target.classList.contains("deleteButton")) {
   console.log("deleting");
    const parentTask = event.target.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    const task = newTask.getTaskById(taskId);
    newTask.deleteTasks(task.id); ///this is the line that I do not know if it is corret
    newTask.save();
    const taskCardsHtml = newTask.render();
    listGroup.innerHTML = taskCardsHtml;
    
 

    // console.log (task.status);
  }




  // console.log(parentTask);
});
// const taskHtml = createTaskHtml('AA', 'dooo', 'Mary', 23/05/2022);
// console.log(taskHtml);


newTask.load();
const taskCardsHtml = newTask.render();
listGroup.innerHTML = taskCardsHtml;

// validFormFieldInput();

// button .addeventListener ('Click', newTask);
// mysteryButton .addeventListener('wheel', newTask);

//Log your field inputs to verify that you are getting the data you need to validate.
