export function renderDashboard(main: HTMLElement) {
    const heading = document.createElement("h1");
    heading.textContent = "Dashboard";

    main.appendChild(heading);
}