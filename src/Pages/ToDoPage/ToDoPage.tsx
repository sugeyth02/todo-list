import { useState } from 'react';
import { ToDo as ToDoType } from '../../types';
import { Container } from './ToDoPage.styles';
import { SubTitle, Title } from '../../styles/Typography';
import ToDo from '../../Components/ToDo/ToDo';
import Form from '../../Components/Form/Form';


function ToDoPage() {
  const [todos, setTodos] = useState<ToDoType[]>([]);

  const create = (newTodo: ToDoType) => {
    setTodos([...todos, newTodo]);
  };

  const remove = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const update = (id: string, updtedTask: string) => {

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log(todos)
  };

  return (
    <Container>
      <Title>To Do List</Title>
      <div className='wrapper'>
        {todos.length === 0 && <SubTitle>Nothing yet, add something!</SubTitle>}
        {todos.map((item) => <ToDo key={item.id} toggleComplete={toggleComplete}
          update={update}
          remove={remove}
          toDo={item} />)}
      </div>
      <div>
        <Form create={create} />
      </div>

    </Container>
  )
}

export default ToDoPage
