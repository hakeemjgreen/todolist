import './App.css';
import { useState } from 'react';

let todoList = []


function App() {
  const [todo, setTodo] = useState([])
  const [todoArray, submitTodo] = useState(todoList)

  const deleteTodo = (id) =>{
    //Filter out the deleted todo Item
    const newList = todoArray.filter(item => item.id !== id)

    //Set state to list with all item deleted
    submitTodo(newList)
  }
  const onTextChange = (typedText) => setTodo({content: typedText}) 
  const onSubmit = () => submitTodo([...todoArray, {id:(todoArray.length), content:todo.content}])
  
  return (
    <div className="App w-100 justify-center">
      <section id="wrapper" className="w-50-l center w-100-ns">
        <h2 className="ma0">Todo List</h2>
        <div className="w-100-l">
          <input className="w-75-l pa3" type="text" onChange={(e)=>{onTextChange(e.target.value)}} />
          <a href="#0" className="f5 fr no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={()=>onSubmit()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
            </svg>          
            <span class="pl1">Submit</span>
          </a>
        </div>
        
        <ul class="list ph0 mt0 f4 tl w-100">
          {todoArray.map((item, i)=>(
            <li class="lh-copy pv3 ph4 ba bl-0 bt-0 br-0 b--black-30 w-100" key={i}>{item.content}
              <a onClick={()=>{deleteTodo(item.id)}} href="#">Delete</a>
            </li>
          ))}
        </ul>
          
      </section>
    </div>
  );
}

export default App;
