
import { useState } from 'react';
import { ToDo as ToDoType, ToDoComponentProps } from '../../types'
import { Container } from './ToDo.styles'
import { Item } from '../../styles/Typography';

const ToDo = ({ toggleComplete, update, remove, toDo }: ToDoComponentProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [item, setItem] = useState<ToDoType>(toDo);



    const handledComplete = () => {
        toggleComplete(item.id)
        setItem((prev) => ({ ...prev, complete: !item.complete }));
    }

    const toggleFrom = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (task: string) => {
        setItem((prev) => ({ ...prev, task: task }));
    };
  
    return (
        <Container>
            {isEditing && <div >
                <form onSubmit={(e) => { e.preventDefault(); update(item.id, item.task); toggleFrom() }}>
                    <input onChange={(e) => handleChange(e.target.value)} value={item.task} type="text" />
                    <button type='submit'>Save</button>
                </form>
            </div>}
            {!isEditing && <div>
                <Item
                    onClick={handledComplete}
                    complete={item.complete}
                >
                    {item.task}
                </Item>
                <div className="Todo-buttons">
                    <button onClick={toggleFrom}>
                        <i className="fas fa-pen" />
                    </button>
                    <button onClick={() => remove(item.id)}>
                        <i className="fas fa-trash" />
                    </button>
                </div>
            </div>}
        </Container>
    )
}

export default ToDo