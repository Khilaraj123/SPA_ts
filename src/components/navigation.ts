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

export function renderNavbar(app: HTMLElement) {
    const nav = createNavigation();
    app.appendChild(nav);
}