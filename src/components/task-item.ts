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

function createTaskCheckBox(): HTMLInputElement{
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    return checkBox;
}

export function createTaskItem(
    task: Task,
    onDelete: (id: number) => void,
    onToogle: (id: number) => void)
    : HTMLDivElement {

    const taskItem = document.createElement("div");
    taskItem.classList.add("task");

    const checkBox = createTaskCheckBox();
    checkBox.checked = task.completed;
    const taskTitle = createTaskTitle(task.title);
    const dltBtn = createDeleteBtn();

    dltBtn.addEventListener("click", ()=>{
        onDelete(task.id);
    })

    checkBox.addEventListener("change", ()=>{
        onToogle(task.id);
    })
    taskItem.appendChild(checkBox);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(dltBtn);
    return taskItem;
}
