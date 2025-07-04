const form = document.getElementById("form");
const inputBox = document.getElementById("input-box");
const submitBtn = document.getElementById("submit-btn");

const todosContainer = document.getElementById("todos");
const ol  = document.createElement("ol");
ol.classList.add("todos-list");
todosContainer.appendChild(ol);

const  todos = [];

const addTodo = (todo) => {
    todos.push(todo);
    displayTodos(todos);
}

const deleteTodo = (index) => {
    todos.splice(index, todos.length);
    displayTodos(todos);
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    addTodo(inputBox.value);
    inputBox.value = "";
    console.log("todos:", todos);
});

const displayTodos  = (todos) => {
    todos.forEach((todo, index)=> {
        const onlyTodo = document.createElement("li");
        onlyTodo.className = "todo" + index;
        ol.appendChild(onlyTodo);
        onlyTodo.textContent = todo;

        //delete button
        const delButton = document.createElement("button");
        delButton.textContent = "x";
        onlyTodo.appendChild(delButton);

        delButton.addEventListener("click", (event) => {
            event.preventDefault();
            deleteTodo(index);
            console.log("delted: ", index)
        })
    });
}

displayTodos(todos);