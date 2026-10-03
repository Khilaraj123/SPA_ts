import { Task } from "../state/tasks";

function createTaskTitle(title: string): HTMLSpanElement {
    const span = document.createElement("span");
    span.textContent = title;
    return span;
}

function createDeleteBtn(): HTMLButtonElement {
    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";
    return dltBtn;
}

export function createTaskItem(
    task: Task,
    onDelete: (id: number) => void)
    : HTMLDivElement {

    const taskItem = document.createElement("div");
    taskItem.classList.add("task");

    const taskTitle = createTaskTitle(task.title);
    const dltBtn = createDeleteBtn();

    dltBtn.addEventListener("click", ()=>{
        onDelete(task.id);
    })
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(dltBtn);
    return taskItem;
}
