const MAIN = document.querySelector(".main");
const TASKS = document.querySelector(".tasks");
const INPUT = document.querySelector(".input");
const NUMBER = document.querySelector(".number");
const BTN_MINUS = document.querySelector(".btn-minus");
const BTN_PLUS = document.querySelector(".btn-plus");


// Массив для хранения задач
let tasksArray = [];

// Функция обновления списка задач и счётчика
function updateTasks() {
  
while (TASKS.firstChild) {     // очищаем список
  TASKS.removeChild(TASKS.firstChild);
}

  tasksArray.forEach((task, index) => {

    //создаём задачи
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    // Чекбокс для выбора задачи
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        // Если галочка поставлена — текст задачи в поле input
        INPUT.value = task;
      } else {
        INPUT.value = "";
      }
    });

    // Текст задачи
    const taskText = document.createElement("span");
    taskText.textContent = task;

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    TASKS.appendChild(taskItem);
  });

  // Обновляем счётчик
  NUMBER.textContent = tasksArray.length;
}

// Кнопка плюс
BTN_PLUS.addEventListener("click", () => {
  const task = INPUT.value.trim();
  if (task !== "") {
    tasksArray.push(task); // добавляем в список
    INPUT.value = ""; // очищаем input
    updateTasks();
  }
});

// Кнопка минус
BTN_MINUS.addEventListener("click", () => {
  const taskText = INPUT.value.trim();

  if (taskText === "") {
    // Просто очищаем поле
    INPUT.value = "";
    return;
  } 
    const index = tasksArray.indexOf(taskText);
    if (index > -1) {
      tasksArray.splice(index, 1);
      INPUT.value = "";
      updateTasks();
    }else {
    // введённый текст ещё не в списке — просто очищаем поле
    INPUT.value = "";
    // опционально можно показать подсказку пользователю
    // например: showToast('Задача не найдена, поле очищено');
  }
  
});

// Инициализация при загрузке
updateTasks();

// инструкция по использованию

const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// чтобы закрывать рамку по клику вне её
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});
