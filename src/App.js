import './App.css';
import { useState } from 'react';

let todoList = []


function App() {
  const [todo, setTodo] = useState([])
  const [todoArray, submitTodo] = useState(todoList)

  const deleteTodo = (id) =>{
    //Filter out the deleted todo Item
    const newList = todoArray.filter(item => item.id !== id)

    //Set state to list with all todo deleted
    submitTodo(newList)
  }
  

  return (
    <div className="App">
      <input type="text" onChange={(e)=>{
        setTodo({content: e.target.value})}} />
      <input type="submit" onClick={()=>{
        
        submitTodo([...todoArray, {id:(todoArray.length), content:todo.content}])
      }} />

      <div>
        {todoArray.map((item, i)=>(
          <div key={i}>{item.content}
            <a onClick={()=>{deleteTodo(item.id)}} href="#">Delete</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
