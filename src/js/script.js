const todo = document.querySelector(".todo");
const todoList = document.querySelector(".todo-list");

// Definir o preventDafaul

const formTodo = document.querySelector("#todo-form");
formTodo.addEventListener("submit", (ev) => {
	ev.preventDefault();
});

// Adicionar uma nova tarefa
const btnAdd = document.querySelector(".addList");
btnAdd.addEventListener("click", addNewTask);

function addNewTask() {
	const inputAddValue = document.querySelector(".todo-input").value;
	const newH3 = document.createElement("h3");
	newH3.textContent = inputAddValue;

	const newTodoDiv = document.createElement("div");
	newTodoDiv.classList.add("todo");

	newTodoDiv.appendChild(newH3); // Adiciono meu h3 na div
	todoList.appendChild(newTodoDiv); // Adiciono minha nva div na div todo-list

	// Crio meu botão de finish e elemento i e coloco suas respectivas classes
	const newBtnFinish = document.createElement("button");
	newBtnFinish.classList.add("finish-todo");
	const newIFinish = document.createElement("i");
	newIFinish.classList.add("fa-check");
	newIFinish.classList.add("fa-solid");

	// Adiciono um ouvinte de evento ao botão de finalização da task
	newBtnFinish.addEventListener("click", () => {
		finishTask(newTodoDiv);
	});

	// Crio meu botão de edit e elemento i e coloco suas respectivas classes
	const newBtnEdit = document.createElement("button");
	newBtnEdit.classList.add("edit-todo");
	const newIEdit = document.createElement("i");
	newIEdit.classList.add("fa-pen");
	newIEdit.classList.add("fa-solid");

	// Adiciono um ouvinte de evento ao botão de edição da task
	newBtnEdit.addEventListener("click", () => {
		editTask(newTodoDiv);
	});

	// Crio meu botão de remove e elemento i e coloco suas respectivas classes
	const newBtnRemove = document.createElement("button");
	newBtnRemove.classList.add("remove-todo");
	const newIRemove = document.createElement("i");
	newIRemove.classList.add("fa-xmark");
	newIRemove.classList.add("fa-solid");

	// Adiciono um ouvinte de evento ao botão de remoção da task
	newBtnRemove.addEventListener("click", () => {
		removeTask(newTodoDiv);
	});

	// Adiciono o elemento i em cada botão
	newBtnFinish.appendChild(newIFinish);
	newBtnEdit.appendChild(newIEdit);
	newBtnRemove.appendChild(newIRemove);

	// Adiciono meus botões na div
	newTodoDiv.append(newBtnFinish, newBtnEdit, newBtnRemove);

	document.querySelector(".todo-input").value = "";
}

// Adicione um evento de input ao campo de pesquisa
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", searchTask);

// Função para pesquisar tarefas
function searchTask() {
	const searchText = searchInput.value.toLowerCase();
	const taskItems = document.querySelectorAll(".todo");

	taskItems.forEach((taskItem) => {
		const taskText = taskItem.querySelector("h3").textContent.toLowerCase();
		if (taskText.includes(searchText)) {
			taskItem.style.display = "flex";
		} else {
			taskItem.style.display = "none";
		}
	});
}

const eraseBtn = document.querySelector("#erase-btn");
eraseBtn.addEventListener("click", function (ev) {
	ev.preventDefault();
	eraseLastLetter();
});

// Função para excluir a última letra do campo de pesquisa
function eraseLastLetter() {
	const currentText = searchInput.value;
	const newText = currentText.slice(0, -1);
	searchInput.value = newText;
	searchTask();
}

// Filtrar as tarefas
function filterTasks() {
	const selectedOption = document.getElementById("filter-select").value;
	const taskItems = document.querySelectorAll(".todo");

	taskItems.forEach((taskItem) => {
		if (
			selectedOption === "all" ||
			(selectedOption === "done" && taskItem.classList.contains("done")) ||
			(selectedOption === "todo" && !taskItem.classList.contains("done"))
		) {
			taskItem.style.display = "flex";
		} else {
			taskItem.style.display = "none";
		}
	});
}

// Adicionar um ouvinte de evento ao select para filtrar as tarefas quando uma nova opção é selecionada
document
	.getElementById("filter-select")
	.addEventListener("change", filterTasks);

// Marcar como feita a tarefa
function finishTask(todo) {
	todo.classList.toggle("done");
}

// Remover a tarefa da lista
function removeTask(todo) {
	todo.remove();
}

// Editar a tarefa
function editTask(todo) {
	const todoText = todo.querySelector("h3").textContent;
	const editInput = document.querySelector("#edit-input");

	// Preenche o campo de edição com o texto da tarefa
	editInput.value = todoText;

	document.getElementById("todo-form").classList.add("none");
	document.getElementById("edit-form").classList.remove("none");

	document.getElementById("edit-form").addEventListener("submit", (event) => {
		event.preventDefault();
		const newText = editInput.value.trim(); // Obtém o novo texto da tarefa

		if (newText !== "") {
			todo.querySelector("h3").textContent = newText;
			document.getElementById("edit-form").classList.add("none");
			document.getElementById("todo-form").classList.remove("none");
		}
	});
}

// Adiciona um ouvinte de evento ao botão de cancelar edição
document
	.getElementById("cancel-edit-btn")
	.addEventListener("click", (event) => {
		event.preventDefault();
		document.getElementById("edit-form").classList.add("none");
		document.getElementById("todo-form").classList.remove("none");
	});
