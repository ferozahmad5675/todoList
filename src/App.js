import React,{useState} from "react"
import './App.css';
import {AiFillDelete} from "react-icons/ai"

function App() {

const[Items, setItems] = useState([])
  const [input , setinput]= useState();
  const itemEvent = (e)=>{
setinput(e.target.value)
  }
  const listItems = ()=>{
   setItems((olditems)=>{
    return [...olditems , input]
   })
   setinput("")
  }

  const deleteitem = (id)=>{
   console.log(id)
   const updateItems = Items.filter((elem,ind)=>{
    return ind !== id;
   })
   setItems(updateItems)
  }
  return (
<>
<div className="main_div">
  <div className="center_div">
    <br />
    <h1>To Do List</h1>
    <br />
    <input type="text" placeholder="Add items" value={input} onChange={itemEvent} />
    <button onClick={listItems}>+</button>
    <ol>
      

      {Items.map((value , index)=>{
        return(
          <>
       <div className="todo_style" key={index}>
     <button onClick={()=>deleteitem(index)} className="icon">  <AiFillDelete/></button> 
    
          <li >{value}</li>
         
          </div>
          </>
        )
      })}
    </ol>
  </div>
</div>
</>
  );
}

export default App;
