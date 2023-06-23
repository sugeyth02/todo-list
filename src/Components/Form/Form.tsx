import  { useState } from 'react'
import { Form as FormType, ToDo} from '../../types'
import { Container } from './Form.styles'
import { v4 as uuid } from 'uuid';
import { PrimaryButton } from '../../styles/Button';
import { PrimaryInput } from '../../styles/Input';

const Form = ({ create }: FormType) => {

    const [userInput, setUserInput] = useState("");

    const handleSubmit = () => {
        const newTodo:ToDo = { id: uuid(), task: userInput, complete: false };
        create(newTodo);
        setUserInput("");
    };

  return (
      <Container onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
          <PrimaryInput
              value={userInput}
              onChange={(e)=>setUserInput(e.target.value)}
              id="task"
              type="text"
              name="task"
              placeholder="What you want to do?"
              required
          />
          <PrimaryButton type='submit'>Add To Do</PrimaryButton>
      </Container>
  )
}

export default Form