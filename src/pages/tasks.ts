import { createTaskItem } from "../components/task-item";
import { createTaskForm } from "../components/task-form";
import { tasks } from "../state/tasks";

export function renderTasksPage(main: HTMLElement) {
    const heading = document.createElement("h1");
    heading.textContent = "Tasks";

    const taskForm = createTaskForm((task)=>{
        tasks.push(task);
        renderTasksPage(main);
    });

    const taskList = document.createElement("div");
    taskList.classList.add("task-list");

    for(const task of tasks){
        taskList.appendChild(
            createTaskItem(task)
        );
    }
    main.appendChild(heading);
    main.appendChild(taskForm);
    main.appendChild(taskList);
}