
export function createTaskForm(
    onSubmit: (task: string) => void
): HTMLFormElement{
    const taskForm = document.createElement("form");

    const formInput = createFormInput("text");
    const formBtn = createFormButton("Add Tasks");

    taskForm.appendChild(formInput);
    taskForm.appendChild(formBtn);

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        onSubmit(formInput.value);
    })
    return taskForm;
}

function createFormInput(type: string): HTMLInputElement{
    const formInput = document.createElement("input")
    formInput.type = type;
    return formInput;
}

function createFormButton(title: string): HTMLButtonElement{
    const formBtn = document.createElement("button");
    formBtn.textContent = title;
    return formBtn;
}