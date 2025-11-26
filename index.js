const MAIN = document.querySelector(".main");
const TASKS = document.querySelector(".tasks");
const INPUT = document.querySelector(".input");
const NUMBER = document.querySelector(".number");
const BTN_MINUS = document.querySelector(".btn-minus");
const BTN_PLUS = document.querySelector(".btn-plus");


// Array for storing tasks
let tasksArray = [];

// Task list and counter update function
function updateTasks() {
  
while (TASKS.firstChild) {     // clear the list
  TASKS.removeChild(TASKS.firstChild);
}

  tasksArray.forEach((task, index) => {

    //create tasks
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    //Checkbox for selecting a task
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        // If the checkbox is checked, the task text is in the input field
        INPUT.value = task;
      } else {
        INPUT.value = "";
      }
    });

    // Text of the problem
    const taskText = document.createElement("span");
    taskText.textContent = task;

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    TASKS.appendChild(taskItem);
  });

  // Updating the counter
  NUMBER.textContent = tasksArray.length;
}

// Plus button
BTN_PLUS.addEventListener("click", () => {
  const task = INPUT.value.trim();
  if (task !== "") {
    tasksArray.push(task); // add to the list
    INPUT.value = ""; // clear the input
    updateTasks();
  }
  INPUT.focus();   // return focus
});

// Minus button
BTN_MINUS.addEventListener("click", () => {
  const taskText = INPUT.value.trim();

  if (taskText === "") {
    // We just clear the field
    INPUT.value = "";
    return;
  } 
    const index = tasksArray.indexOf(taskText);
    if (index > -1) {
      tasksArray.splice(index, 1);
      INPUT.value = "";
      updateTasks();
    }else {
    // The entered text is not yet in the list - just clear the field
    INPUT.value = "";
    // Optionally, you can show a hint to the user
// For example: showToast('Task not found, field cleared');
  }
  INPUT.focus(); // return focus
});

// Initialization at boot
updateTasks();

// instructions for use

const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// to close the frame by clicking outside it
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});
