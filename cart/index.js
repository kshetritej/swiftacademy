const container = document.getElementById("container");

const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");

const listOfTodos = document.createElement("ol");
listOfTodos.className = "todos-list";
container.appendChild(listOfTodos);

const todos = [];




const renderTodos = () => {
    listOfTodos.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.classList.add("todo" + index);
        li.textContent = todo;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";
        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1);
            renderTodos();
        })
        listOfTodos.appendChild(li);
        li.appendChild(deleteBtn);
    })
} 

const addTask = (e) => {
    e.preventDefault();
    const todo = inputBox.value;
    todos.push(todo);
    inputBox.value = "";
    renderTodos();
}

addBtn.addEventListener("click",  addTask)