import { createTaskItem } from "../components/task-item";
import { createTaskForm } from "../components/task-form";
import { getTasks, addTask, deleteTask } from "../state/tasks";

export function renderTasksPage(main: HTMLElement) {
    main.innerHTML = "";
    const heading = document.createElement("h1");
    heading.textContent = "Tasks";

    const taskForm = createTaskForm((title)=>{
        const trimmed = title.trim();
        if(!trimmed) return;
        addTask(trimmed);
        renderTasksPage(main);
    });

    const taskList = document.createElement("div");
    taskList.classList.add("task-list");

    const tasks = getTasks();

    tasks.forEach((task)=>{
        taskList.appendChild(
            createTaskItem(task, (id)=>{
                deleteTask(id);
                renderTasksPage(main);
            })
        );
    });
    main.appendChild(heading);
    main.appendChild(taskForm);
    main.appendChild(taskList);
}