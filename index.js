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

// buttonRemoveLastTask.addEventListener("click", removeLast);

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
  return tasksArray;
};

// EXERCISE 9:
// Create a function "changeTaskBackgroundColor" and attach it to the
// "Change task background" button via JavaScript(not via html attribute)
// Take the color from the color picker ad apply it as background to every
// list item
const btnChangeTaskBackground = document.querySelector(
  "input[value='Change task background']"
);
const colorInput = document.getElementById("colorPicker");
const lis = document.querySelectorAll("#myTaskList li");

const changeTaskBackgroundColor = function (event) {
  for (let li of lis) {
    li.style.backgroundColor = colorInput.value;
  }
};
btnChangeTaskBackground.addEventListener("click", changeTaskBackgroundColor);

// window.onload = function () {
//   const button = document.querySelector("button");
//   const subtitle = document.querySelector("header h2");
//   const input = document.getElementById("inputColor");
//   const changeSubtitle2 = (event) => {
//     subtitle.style.color = input.value;
//   };
//   button.addEventListener("click", changeSubtitle2);
// };

// EXERCISE 10:
// Attach an eventListener to each new task you create. When the task
// receives the click it should be removed(only the clicked task
// should disappear)
const allListItems = [];

const putItemsInArray = function () {
  for (let li of lis) {
    allListItems.push(li.innerText);
  }
  console.log({ allListItems });
  return allListItems;
};

const inputTask = document.getElementById("newTask");

const hideTask = function (event) {
  event.currentTarget.hidden = true;
};

const addNewTask = function () {
  const li = document.createElement("li");
  li.innerText = inputTask.value;
  ul.appendChild(li);
  allListItems.push(li);
  li.addEventListener("click", hideTask);
};

// EXERCISE 11:
// Create a function "bubbleSort()" which sorts the task list
// alphabetically using the bubble sort algorithm
const bubbleSort = () => {
  for (let i = 0; i < putItemsInArray().length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < putItemsInArray().length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (putItemsInArray()[j] > putItemsInArray()[j + 1]) {
        // If the condition is true then swap them
        let temp = putItemsInArray()[j];
        putItemsInArray()[j] = putItemsInArray()[j + 1];
        putItemsInArray()[j + 1] = temp;
      }
    }
  }
  // Print the sorted array
  console.log(allListItems);
};
// bubbleSort();
