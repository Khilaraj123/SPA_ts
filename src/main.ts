const app = document.querySelector("#app");


if (!app) {
    throw new Error("App Element Not Found");
}


function renderDashboard(main: HTMLElement) {
    const heading = document.createElement("h1");
    heading.textContent = "Dashboard";

    main.appendChild(heading);
}

function renderTasksPage(main: HTMLElement) {
    const heading = document.createElement("h1");
    heading.textContent = "Tasks";

    main.appendChild(heading);
}

function renderSettings(main: HTMLElement) {
    const heading = document.createElement("h1");
    heading.textContent = "Settings";

    main.appendChild(heading);
}

function renderNotFound(main: HTMLElement) {
    const heading = document.createElement("h1");
    heading.textContent = "404 - Page Not Found";

    main.appendChild(heading);
}

const navLinks = [
    { text: "Dashboard", url: "#/dashboard" },
    { text: "Tasks", url: "#/tasks" },
    { text: "Settings", url: "#/settings" }
];

function createNavigation(): HTMLElement {
    const nav = document.createElement("nav");
    for (const link of navLinks) {
        nav.appendChild(
            createHyperLink(link.text, link.url)
        );
    }
    return nav;
}

function createHyperLink(text: string, url: string): HTMLAnchorElement {
    const a = document.createElement("a");
    a.textContent = text;
    a.href = url;
    a.classList.add("link")
    return a;
}

function renderNavbar() {
    const nav = createNavigation();
    app.appendChild(nav);
}


function router(main: HTMLElement) {
    const route = window.location.hash;

    if (route === "#/dashboard") {
        renderDashboard(main);
    }
    else if (route === "#/tasks") {
        renderTasksPage(main);
    }
    else if (route === "#/settings") {
        renderSettings(main);
    }
    else {
        renderNotFound(main);
    }
}

function createMain(): HTMLElement {
    return document.createElement("main");
}

function renderMain() {
    const main = createMain();
    app.appendChild(main);
    router(main);
}

function renderPage() {
    app.innerHTML = "";

    renderNavbar();
    renderMain();
}

window.addEventListener("hashchange", () => {
    renderPage();
});

renderPage();