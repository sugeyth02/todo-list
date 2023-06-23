
import { useState } from 'react';
import { ToDo as ToDoType, ToDoComponentProps } from '../../types'
import { Container } from './ToDo.styles'
import { Item } from '../../styles/Typography';
import { PrimaryButton } from '../../styles/Button';
import { PrimaryInput } from '../../styles/Input';

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
            {isEditing && 
                <form  className="update-form" onSubmit={(e) => { e.preventDefault(); update(item.id, item.task); toggleFrom() }}>
                    <PrimaryInput onChange={(e) => handleChange(e.target.value)} value={item.task} type="text" />
                    <PrimaryButton type='submit'>Save</PrimaryButton>
                </form>
            }
            {!isEditing && <div className='item'>
                <Item
                    onClick={handledComplete}
                    complete={item.complete}
                >
                    {item.task}
                </Item>
                <div className='buttons'>
                    {!item.complete && <PrimaryButton onClick={toggleFrom}>
                        <i className="fas fa-pen" />
                    </PrimaryButton>}
                    <PrimaryButton onClick={() => remove(item.id)}>
                        <i className="fas fa-trash" />
                    </PrimaryButton>
                </div>
            </div>}
        </Container>
    )
}

export default ToDo