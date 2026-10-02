const app = document.querySelector("#app");

if (!app) {
    throw new Error("App Element Not Found");
}

function createInput(type: string, placeholder: string): HTMLInputElement{
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

function createAddButton(title: string): HTMLButtonElement{
    const addBtn = document.createElement("button");
    addBtn.textContent = title;

    return addBtn;
}

function createForm() : HTMLFormElement{
    const form = document.createElement("form");
    const input = createInput("text", "Input Some Thing");
    const addBtn = createAddButton("Add Tasks");
    form.appendChild(input);
    form.appendChild(addBtn);
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        console.log(input.value);
    })
    return form;
}

function renderForm() {
    app.innerHTML = "";
    const form = createForm();
    app.appendChild(form);
}

renderForm();