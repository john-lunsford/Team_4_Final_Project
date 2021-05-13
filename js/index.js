//Create a JavaScript file named index.js and include it into your index.html page.
//Implement a JavaScript function named validFormFieldInput(data)
//Add an ID attribute to each form field and implement the code needed to retrieve the each form field value using the following method:
 
const newTaskNameInput = document.querySelector('#taskName');
const newTaskDescriptionInput = document.querySelector('#taskDescription');
const newAssignedToInput = document.querySelector('#assignedTo');
const newDueDateInput = document.querySelector('#dueDate');

const nullCheck = (name, description, assigned, due) => {
  if ((name === '') && (description === '') && (assigned === '') && (due === '')){
      return false;
  }
  else{
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

function validFormFieldInput(){


const name = newTaskNameInput.value;
console.log('name: ' + name);
return name;

const description = newTaskDescriptionInput.value;
console.log('description: ' + description);


const assigned = newAssignedToInput.value;
console.log('assigned to: ' + assigned);


const due = newDueDateInput.value;
console.log('due: ' + due);

const formValid = nullCheck(name, description, assigned, due);
formCheck(formValid);
}


const button = document.getElementById ("clickButton");
button.addEventListener('click', validFormFieldInput);


// validFormFieldInput();


let newTask = new TaskManager();
newTask.addTask(validFormFieldInput);
console.log(newTask.tasks);

// button .addeventListener ('Click', newTask);
// mysteryButton .addeventListener('wheel', newTask);

//Log your field inputs to verify that you are getting the data you need to validate.