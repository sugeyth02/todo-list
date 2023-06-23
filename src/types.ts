export interface ToDo {
    id: string,
    task: string,
    complete: boolean
}

export interface ToDoComponentProps {
    toggleComplete: (id: string) => void,
    update: (id: string, updtedTask: string) => void,
    remove: (id: string) => void,
    toDo: ToDo,
}

export interface Form {
    create: (newTodo: ToDo) => void
}