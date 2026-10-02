export function renderNotFound(main: HTMLElement) {
    const heading = document.createElement("h1");
    heading.textContent = "404 - Page Not Found";

    main.appendChild(heading);
}