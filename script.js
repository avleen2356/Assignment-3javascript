//Javascript code for to do list 

//initializing  the task list array
let taskList = [];

// Getting  the input fields and buttons from the DOM 
let taskInputBox = document.getElementById('taskInputBox');
let dueTimeInput = document.getElementById('dueTimeInput');
let addTaskButton = document.getElementById('addTaskButton');
let clearTaskListButton = document.getElementById('clearTaskListButton');
let taskListContainer = document.getElementById('taskListContainer');

// Adding the  event listener to the "Add" button 
addTaskButton.addEventListener('click', addTask);

// Adding the event listener to the "Clear" button   
clearTaskListButton.addEventListener('click', clearTaskList);

// Function to add a new task to the task list array 
function addTask() {

// Getting  the task description and due time from the input fields
let taskDescription = taskInputBox.value.trim();
let taskDueTime = dueTimeInput.value.trim();

// Checking if the input fields are not empty 
if (taskDescription !== '' && taskDueTime !== '') {

    // creating a new task object with the input values 
    let task = {
    description: taskDescription,
    dueTime: taskDueTime,
    isCompleted: false
    };

    // Adding the new task object to the task list array
    taskList.push(task);

    // Clearing the input fields   
    taskInputBox.value = '';
    dueTimeInput.value = '';

    // Re-rendering the task list 
    renderTaskList();

    } else {
        // Alert the user if the input fields are empty

    alert('Please fill in both task description and due time.');
    }
}

    // Function to render the task list
    function renderTaskList() {
    let taskListHTML = '';

    // Loop through the task list array and generate the HTML for each task
    // The HTML includes a checkbox, the task description, and a delete button
    // The checkbox is checked if the task is completed
    taskList.forEach((task, index) => {
        // Add the HTML for the task to the task list HTML string
    taskListHTML += `

    <li>
        <input type="checkbox" style="width: 25px; height: 25px;" ${task.isCompleted ? 'checked' : ''} onclick="toggleTaskCompletion(${index})">
        <span style="font-size: 18px; ${task.isCompleted ? 'text-decoration: line-through;' : ''}">${task.description} - ${task.dueTime}</span>
        <button class="delete-btn" style="font-size: 18px;" onclick="deleteTask(${index})">Delete</button>
    </li>
    `;

    });

    // Update the inner HTML of the task list container
    taskListContainer.innerHTML = taskListHTML;
}

// Function to toggle the completion status of a task
// The function takes the index of the task in the task list array as a parameter


        // Get the task object from the task list array
        // Toggle the isCompleted property

    function toggleTaskCompletion(taskIndex) {

        // Get the task object from the task list array
        // Toggle the isCompleted property
    taskList[taskIndex].isCompleted = !taskList[taskIndex].isCompleted;

  // Re-render the task list
    renderTaskList();
}

// Function to delete a task

function deleteTask(taskIndex) {

    // Confirming that if the user wants to delete the task
    // Remove the task from the array
    taskList.splice(taskIndex, 1);

  // Re-render the task list
    renderTaskList();
}

// Function to clear the task list
// This function empties the task list array and re-renders the task list
    function clearTaskList() {
    taskList = [];
    renderTaskList();
}