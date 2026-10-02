import { renderDashboard } from "../pages/dashboard";
import { renderSettings } from "../pages/settings";
import { renderTasksPage } from "../pages/tasks";

export type RouteHandler = (main: HTMLElement) => void;

export const routes: Record<string, RouteHandler> = {
    "#/dashboard": renderDashboard,
    "#/tasks": renderTasksPage,
    "#/settings": renderSettings
}