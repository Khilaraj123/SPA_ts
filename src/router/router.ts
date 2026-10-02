import { routes } from "./routes";
import { renderNotFound } from "../pages/not-found";

export function router(main: HTMLElement) {
    let route = window.location.hash;

    if (!route) {
        window.location.hash = "#/dashboard";
        return;
    }

    const page = routes[route];

    if (page) {
        page(main);
    }
    else {
        renderNotFound(main);
    }
}