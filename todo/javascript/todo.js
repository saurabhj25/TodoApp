const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");
const todoFunctionality = document.querySelector(".functionality");

todoButton.addEventListener("click", addNewTask);
todoList.addEventListener("click", deleteButton);
todoFunctionality.addEventListener("click", todoFunction);

let type = "all-button";

function addNewTask(event) {
  //if input is empty don't push into list
  if (todoInput.value == "") {
    return;
  }
  /*
    <li class="todoItem"><span class="myListSpan"></span><button class="deleteButtonStyle"></button></li>
    */
  todoItem = document.createElement("li");
  todoItem.setAttribute("class", "todo");

  myListSpan = document.createElement("span");
  myListSpan.setAttribute("class", "todospan");

  myListSpan.textContent = todoInput.value;
  todoInput.value = "";

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteButtonStyle");
  deleteButton.textContent = "Delete";

  todoItem.appendChild(myListSpan);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);
  render();
}

function deleteButton(event) {
  const item = event.target;
  //deletebutton
  if (item.classList[0] === "deleteButtonStyle") {
    console.log(item);
    console.log(item.parentElement);
    console.log(item.type);
    if (item.classList[0] == "deleteButtonStyle") console.log("deleted");
    item.parentElement.remove();
  } //todo list
  else if (item.classList[0] === "todo") {
    console.log("item" + item);
    console.log("parentElem" + item.parentElement);
    console.log("type" + item.type);
    console.log("children[0]" + item.children[0]);
    if (item.children[0].style.textDecoration === "line-through") {
      item.children[0].style.textDecoration = "none";
      item.style = "background-color:rgb(201, 245, 187);";
      //item.children[0].style = "textDecoration:none;width: 400px;padding: 10px;background-color: rgb(201, 245, 187);font-size: 20px;margin:2px;display: flex;justify-content: space-between;";
    } else {
      item.children[0].style.textDecoration = "line-through";
      item.style = "background-color:rgb(157, 213, 245);";
      //item.children[0].style = "textDecoration:line-through;width: 400px;padding: 10px;background-color: rgb(157, 213, 245);font-size: 20px;margin:2px;display: flex;justify-content: space-between;";
    }
  } //todospan
  else if (item.classList[0] === "todospan") {
    console.log(item);
    console.log(item.parentElement);
    console.log(item.type);
    if (item.style.textDecoration === "line-through") {
      item.parentElement.style = "background-color:rgb(201, 245, 187);";
      item.style.textDecoration = "none";
    } else {
      item.parentElement.style = "background-color:rgb(157, 213, 245);";
      item.style.textDecoration = "line-through";
    }
  }
  render();
}

function todoFunction(event) {
  const item = event.target;
  type = item.classList[0];
  render();
  // let len = todoList.childElementCount;
  // console.log(len);
  // for(let i=0;i<len;i++)
  // {
  //     console.log(todoList.children[i]);
  //     if(item.classList[0]==='all-button')
  //     {
  //         todoList.children[i].style.display="flex";
  //     }
  //     else if(item.classList[0]==='active-button')
  //     {
  //         if(todoList.children[i].firstElementChild.style.textDecoration==='line-through')
  //         {
  //             //console.log(todoList.children[i].firstElementChild);
  //             todoList.children[i].style.display="none";
  //         }
  //         else{
  //             todoList.children[i].style.display="flex";
  //         }
  //     }
  //     else if(item.classList[0]==='completed-button')
  //     {
  //         if(todoList.children[i].firstElementChild.style.textDecoration==='line-through')
  //         {
  //             //console.log(todoList.children[i].firstElementChild);
  //             todoList.children[i].style.display="flex";
  //         }
  //         else{
  //             todoList.children[i].style.display="none";
  //         }

  //     }
  // }
}

function render() {
  let len = todoList.childElementCount;
  for (let i = 0; i < len; i++) {
    console.log(todoList.children[i]);
    if (type === "all-button") {
      todoList.children[i].style.display = "flex";
    } else if (type === "active-button") {
      if (
        todoList.children[i].firstElementChild.style.textDecoration ===
        "line-through"
      ) {
        //console.log(todoList.children[i].firstElementChild);
        todoList.children[i].style.display = "none";
      } else {
        todoList.children[i].style.display = "flex";
      }
    } else if (type === "completed-button") {
      if (
        todoList.children[i].firstElementChild.style.textDecoration ===
        "line-through"
      ) {
        //console.log(todoList.children[i].firstElementChild);
        todoList.children[i].style.display = "flex";
      } else {
        todoList.children[i].style.display = "none";
      }
    }
  }
}
