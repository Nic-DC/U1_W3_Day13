//  EXERCISE 3
//         Create a button "Remove Last Task" to trigger the function "removeLast"
const parentDiv = document.body;
const inputBtn = document.querySelector("input[type='button']");
const ul = document.getElementById("myTaskList");
const buttonRemoveLastTask = document.createElement("button");
const buttonRemoveFirstTask = document.createElement("button");

buttonRemoveLastTask.innerText = "Remove Last Task";
buttonRemoveFirstTask.innerText = "Remove First Task";

parentDiv.insertBefore(buttonRemoveLastTask, inputBtn);
parentDiv.insertBefore(buttonRemoveFirstTask, ul);

//buttonRemoveLastTask.addEventListener("click", removeLast);

// EXERCISE 4
//         Create a button "Remove First Task" to trigger the function
// "removeFirst"
// buttonRemoveFirstTask.addEventListener("click", removeFirst);

// EXERCISE 5:
//                 Add a new task to the list.
//                 Suggestion:
// - Use document.getElementById to get the UL item and the input text
// - Use the document.createElement to create the new List Item
// - Append the LI child to the UL
const li1 = document.createElement("li");
li1.innerText = "First task item";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Second task item";
ul.appendChild(li2);

// EXERCISE 6:
// Create a function "removeLast" which removes the last item from the
// task list
const removeLast = function () {
  console.dir(ul);
  console.log(`logging ul.textContent: ${ul.textContent}`);
  console.log(typeof ul.textContent);
  console.log(`logging ul.childNodes: ${ul.childNodes}`);
  console.log(typeof ul.childNodes);
  console.log(ul.childNodes.length);
  let lis = ul.childNodes;

  if (ul.hasChildNodes()) {
    ul.removeChild(ul.children[lis.length - 1]);
  }
};

// EXERCISE 7:
// Create a function "removeFirst" which removes the
// first item from the task list
const removeFirst = function () {
  let lis = ul.childNodes;

  if (ul.hasChildNodes()) {
    ul.removeChild(ul.children[0]);
  }
};

// EXERCISE 8:
// Create a function "getTasksAsArray" which returns, and prints
// to the console an array containing the tasks as strings
const getTasksAsArray = function () {
  let tasksArray = [];
  let tasks = ul.childNodes;

  for (let task of tasks) {
    console.dir(task.innerText);
    tasksArray.push(task.innerText);
  }
  console.log({ tasksArray });
};

// EXERCISE 9:
// Create a function "changeTaskBackgroundColor" and attach it to the
// "Change task background" button via JavaScript(not via html attribute)
// Take the color from the color picker ad apply it as background to every
// list item
const changeTaskBackgroundColor = function () {};
