
function createTaskTitle(title: string): HTMLSpanElement{
    const span = document.createElement("span");
    span.textContent = title;
    return span;
}

function createDeleteBtn(): HTMLButtonElement{
    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";
    return dltBtn;
}

export function createTaskItem(title: string): HTMLDivElement {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    
    const taskTitle = createTaskTitle(title);
    const dltBtn = createDeleteBtn();
    
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(dltBtn);
    return taskItem;
}
