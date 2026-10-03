export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const tasks: Task[] = [
    {
        id: 1,
        title: "Learn JavaScript",
        completed: false
    },
    {
        id: 2,
        title: "Learn .NET",
        completed: true
    },
    {
        id: 3,
        title: "Learn TypeScript",
        completed: false
    },
    {
        id: 4,
        title: "Learn Flutter",
        completed: true
    }
];

function findLargestId(tasks: Task[]): number {
    return tasks
        .reduce((largest, task) =>
            Math.max(largest, task.id), 0);
}

function generateTaskId(): number {
    return findLargestId(tasks) + 1;
}

export function getTasks(): Task[] {
    return [...tasks];
}

export function addTask(title: string): void {
    const newTask: Task = {
        id: generateTaskId(),
        title: title,
        completed: false
    }
    tasks.push(newTask);
}

export function deleteTask(id: number) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        return;
    }
    tasks.splice(index, 1);
}