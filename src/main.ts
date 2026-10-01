const app = document.querySelector("#app");

if(!app){
    throw new Error("App Element Not Found");
}

const heading = document.createElement("h1");
heading.textContent = "My Tasks";
app.appendChild(heading);

function createTask(title: string): HTMLDivElement{
    const task = document.createElement("div");
    task.classList.add("task");
    const spn = createSpan(title);
    const dltBtn = createDeleteBtn();
    task.appendChild(spn);
    task.appendChild(dltBtn);
    return task;
}

function createSpan(text: string): HTMLSpanElement{
    const span = document.createElement("span");
    span.textContent= text;
    return span;
}

function createDeleteBtn(): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.classList.add("deleteBtn");
    btn.textContent = "Delete";
    return btn;
}

const task1 =createTask("Learn Html");
const task2 =createTask("Learn Css");
const task3 =createTask("Learn Type Script");

app.appendChild(task1);
app.appendChild(task2);
app.appendChild(task3);

