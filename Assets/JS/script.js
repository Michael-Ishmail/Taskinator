var buttonEL = document.querySelector("#save-task");
var tasksToDoEL = document.querySelector("#tasks-to-do");

// EL is a naming convention used to distinguish dom elements from other variables. EL stands for Element.

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEL.appendChild(listItemEl);
  }
// The above code is an example of how to manipulate a DOM element. The four steps are key to make DOM manipulation work. The above code
// is also seperated from the callback function to preserve clarity and organization. For best practice, functions and callbacks should
// should be seperated. Functions must be defined before the callback so that the callback has a function to execute. If a function is
// defind after a callback, then the callback will return "undefined" since the function was not declared before the callback.

buttonEL.addEventListener("click", createTaskHandler);

console.log(buttonEL);