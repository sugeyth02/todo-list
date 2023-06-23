import  { useState } from 'react'
import { Form as FormType, ToDo} from '../../types'
import { Container } from './Form.styles'
import { v4 as uuid } from 'uuid';

const Form = ({ create }: FormType) => {
    const [userInput, setUserInput] = useState("");


    const handleSubmit = () => {
        const newTodo:ToDo = { id: uuid(), task: userInput, complete: false };
        create(newTodo);
        setUserInput('');
    };
  return (
      <Container className="NewTodoForm" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
          <label htmlFor="task">New todo</label>
          <input
              value={userInput}
              onChange={(e)=>setUserInput(e.target.value)}
              id="task"
              type="text"
              name="task"
              placeholder="New Todo"
              required
          />
          <button type='submit'>Add Todo</button>
      </Container>
  )
}

export default Form