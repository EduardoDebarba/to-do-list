const todo = document.querySelector(".todo");
const todoList = document.querySelector('.todo-list')

// Adicionar uma nova tarefa
const btnAdd = document.querySelector(".addList");
btnAdd.addEventListener("click", () => {
	const inputAddValue = document.querySelector(".todo-input").value;
    todoList.appendChild(inputAddValue)
	
});

// Pesquisar pelo nome nas tarefas listadas

// Filtrar as tarefas

// Marcar como feita a tarefa
const btnCheck = document.querySelector(".finish-todo");
btnCheck.addEventListener("click", () => {
	todo.classList.add("done");
});

// Editar a tarefa

// Remover a tarefa da lista
const btnRemove = document.querySelector(".remove-todo");
btnRemove.addEventListener("click", () => {
	todo.remove();
});
