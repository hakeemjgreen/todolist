import './App.css';
import { useState, useEffect } from 'react';

let todoList = []


function App() {
  const [todo, setTodo] = useState([{content:''}])
  const [todoArray, submitTodo] = useState(todoList)
  
  //If not was succesfully added
  const text = "Add Note";
  const [noteSuccess, successHandler] = useState(text);
  // console.log(noteSuccess)

  const deleteTodo = (id) =>{
    //Filter out the deleted todo Item
    const newList = todoArray.filter(item => item.id !== id)

    //Set state to list with all item deleted
    submitTodo(newList)
  }
  const onTextChange = (typedText) => setTodo({content: typedText}) 
  const onSubmit = () => {
    // successHandler(!noteSuccess)

    
    submitTodo([...todoArray, {id:(todoArray.length), content:todo.content}])
    //Clear input
    setTodo({content:''})
  }

  useEffect(()=>{
    
    const timer = setTimeout(()=> {
        successHandler(text);
        console.log(noteSuccess)
    }, 1000);
    return ()=> clearTimeout(timer);
    // setTimeout(() => successHandler((noteSuccess) => !noteSuccess), 2000);

  },[noteSuccess])
  return (
    <div className="App w-100">
      <section id="wrapper" className="w-30-l center w-100-ns">
        <h2 className="ma0 tc">Todo List</h2>
        <div className="w-100-l mh3 inline-flex items-center">
          {/* Set input text to state, if empty set to empty string */}
          <input id="note-bar" className="w-100 w-70-ns pa3 effect-1" type="text" value={todo.content ? todo.content : ''} onChange={(e)=>{onTextChange(e.target.value)}} />
          <input id="submit-btn" disabled={!todo.content ? true : false} className={`${noteSuccess === "Added" ? 'animate__animated animate__pulse white bg-green' : ''} w-100 w-20-ns f5 effect-1 no-underline black bg-animate inline-flex items-center pa3 ba border-box ml2`} type="submit"  value={noteSuccess} onClick={
            ()=>{
              onSubmit()
              successHandler("Added")}

            } />      
        </div>
        
        <ul className="list ph0 mt0 f4 tl w-100">
          {todoArray.map((item, i)=>(
            <li className="animate__animated animate__fadeInLeft lh-copy pv3 ph4 ba bl-0 bt-0 br-0 b--black-30 w-100" key={i}>{item.content}
              <a disabled onClick={()=>{deleteTodo(item.id)}} href="#">Delete</a>
            </li>
          ))}
        </ul>
          
      </section>
    </div>
  );
}

export default App;
