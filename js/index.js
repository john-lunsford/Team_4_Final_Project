//Create a JavaScript file named index.js and include it into your index.html page.
//Implement a JavaScript function named validFormFieldInput(data)
//Add an ID attribute to each form field and implement the code needed to retrieve the each form field value using the following method:
 


const button = document.getElementById ("clickButton");
button.addEventListener('click', formCheck);

function validFormFieldInput(){

const newTaskNameInput = document.querySelector('#taskName');
const name = newTaskNameInput.value;
console.log('name: ' + name);

const newTaskDescriptionInput = document.querySelector('#taskDescription');
const description = newTaskDescriptionInput.value;
console.log('description: ' + description);

const newAssignedToInput = document.querySelector('#assignedTo');
const assigned = newAssignedToInput.value;
console.log('assigned to: ' + assigned);

const newDueDateInput = document.querySelector('#dueDate');
const due = newDueDateInput.value;
console.log('due: ' + due);

nullCheck = () => {
    if ((name === '') && (description === '') && (assigned === '') && (due === '')){
        return false;
    }
    else{
        return true;
    }
}

}

function formCheck() {
    var x = document.getElementById("formAlert");
    if (nullCheck === false) {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



validFormFieldInput();


let newTask = new TaskManager();
newTask.addTask();
console.log(newTask.tasks);

//Log your field inputs to verify that you are getting the data you need to validate.
