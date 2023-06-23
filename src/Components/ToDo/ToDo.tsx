
import { useState } from 'react';
import { ToDo as ToDoType, ToDoComponentProps } from '../../types'
import { Container } from './ToDo.styles'

const ToDo = ({ toggleComplete, update, remove, toDo }: ToDoComponentProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState<ToDoType>(toDo);

    const toggleFrom = () => {
        setIsEditing(!isEditing);
    };
    const handleChange = (task: string) => {
        setTask((prev) => ({ ...prev, task: task }));
        console.log(task)
    };
  
    return (
        <Container>
            {isEditing ? <div className="Todo">
                <form className="Todo-edit-form" onSubmit={(e) => { e.preventDefault(); update(task.id, task.task); toggleFrom()}}>
                    <input onChange={(e) => handleChange(e.target.value)} value={task.task} type="text" />
                    <button type='submit'>Save</button>
                </form>
            </div> :
                <div className="Todo">
                    <li
                        onClick={()=> toggleComplete(task.id)}
                        className={toDo.complete ? "Todo-task completed" : "Todo-task"}
                    >
                        {task.task}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={toggleFrom}>
                            <i className="fas fa-pen" />
                        </button>
                        <button onClick={() => remove(task.id)}>
                            <i className="fas fa-trash" />
                        </button>
                    </div>
                </div>
            }
        </Container>
    )
}

export default ToDo