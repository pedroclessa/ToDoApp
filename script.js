class TodoApp {
    constructor(taskInputId, taskListId, addTaskButtonId) {
        this.taskInput = document.getElementById(taskInputId);
        this.taskList = document.getElementById(taskListId);
        this.addTaskButton = document.getElementById(addTaskButtonId);

        this.tasks = this.loadTasksFromLocalStorage();
        this.renderTasks();

        this.addTaskButton.addEventListener("click", () => this.addTask());
        this.taskInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") this.addTask();
        });
    }

    loadTasksFromLocalStorage() {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    }

    saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    createTaskElement(task, index) {
        const li = document.createElement("li");
        li.className = `flex justify-between items-center p-3 bg-gray-50 shadow-sm rounded-md hover:shadow-md transition ${
            task.completed ? "line-through text-gray-400" : "text-gray-700"
        }`;

        const span = document.createElement("span");
        span.textContent = task.text;
        span.className = "task-text flex-grow cursor-pointer";
        span.addEventListener("click", () => {
            task.completed = !task.completed;
            this.saveTasksToLocalStorage();
            this.renderTasks();
        });

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.className = "text-purple-500 hover:text-purple-700 px-2 transition";
        editButton.addEventListener("click", () => {
            const newText = prompt("Editar tarefa:", task.text);
            if (newText) {
                task.text = newText;
                this.saveTasksToLocalStorage();
                this.renderTasks();
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.className = "text-red-500 hover:text-red-700 px-2 transition";
        deleteButton.addEventListener("click", () => {
            this.tasks.splice(index, 1);
            this.saveTasksToLocalStorage();
            this.renderTasks();
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    }

    renderTasks() {
        this.taskList.innerHTML = "";
        this.tasks.forEach((task, index) => {
            const taskElement = this.createTaskElement(task, index);
            this.taskList.appendChild(taskElement);
        });
    }

    addTask() {
        const text = this.taskInput.value.trim();
        if (!text) return alert("Por favor, insira uma tarefa!");

        this.tasks.push({ text, completed: false });
        this.saveTasksToLocalStorage();
        this.renderTasks();

        this.taskInput.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new TodoApp("taskInput", "taskList", "addTaskButton");
});
 