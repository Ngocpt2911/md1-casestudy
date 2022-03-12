const inputTodo = document.getElementById("inputTodo");
const todoLists = document.getElementById("todoLists");
const addBtn = document.getElementById("addBtn");
// const searchBtn = document.getElementById("searchBtn");

let currentNum = 1;
let todos = [];

addBtn.addEventListener("click", () => {
    if (inputTodo.value === "") {
        alert("Please input your task");
        return;
    }

    // Lưu vào hộp để lưu nhiệm vụ đã chuẩn bị trước đó
    todos.push({
        id: currentNum,
        title: inputTodo.value
    });

    createListView();

    inputTodo.value = "";
    currentNum++;
});

const createListView = () => {
    while (todoLists.firstChild) {
        todoLists.removeChild(todoLists.firstChild);
    }

    todos.forEach((todo) => {
        let todoItem = document.createElement("tr");

        const todoId = document.createElement("th");
        const todoTitle = document.createElement("th");
        const todoEdit = document.createElement("th");
        const editBtn = document.createElement("button");
        const todoDelete = document.createElement("th");
        const deleteBtn = document.createElement("button");

        todoId.textContent = todo.id;
        todoTitle.textContent = todo.title;
        editBtn.textContent = "Edit";
        editBtn.classList.add("btn", "btn-secondary");
        todoEdit.appendChild(editBtn);
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("btn", "btn-secondary");
        todoDelete.appendChild(deleteBtn);

        todoItem.appendChild(todoId);
        todoItem.appendChild(todoTitle);
        todoItem.appendChild(todoEdit);
        todoItem.appendChild(todoDelete);
        todoLists.appendChild(todoItem);
    });

};

