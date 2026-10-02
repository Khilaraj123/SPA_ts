import { router } from "./router/router";
import { renderNavbar } from "./components/navigation";

const app = document.querySelector("#app");


if (!app) {
    throw new Error("App Element Not Found");
}


function createMain(): HTMLElement {
    return document.createElement("main");
}

function renderMain() {
    const main = createMain();
    app.appendChild(main);
    router(main);
}

function renderApp() {
    app.innerHTML = "";

    renderNavbar(app);
    renderMain();
}

window.addEventListener("hashchange", renderApp);

renderApp();