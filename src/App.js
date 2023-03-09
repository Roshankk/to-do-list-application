import React, { useState } from "react";
import './App.css'
import TodoList from "./components/to-do";
import Products from "./components/to-do-list";
function App() {
  const [ListTodo,setListTodo]=useState([])
  let addList=(inputItems)=>{
    if(inputItems!=='')
    setListTodo([...ListTodo,inputItems])
  }

  const deleteItem=(key)=>{
    let newlistTodo=[...ListTodo]
    newlistTodo.splice(key,1)
    setListTodo([...newlistTodo])
  }
  return (
    
      <div className="mainContainer">
     <div className="centerContainer">
      <TodoList addList={addList}/>
      <h1 className="app-heading">TODO</h1>
      <hr />
      {ListTodo.map((listItem,index)=>{
        return(
          <Products key={index} index={index} item={listItem} deleteItem={deleteItem}/>
      )
      })}
     </div>
      </div>
    
  );
}

export default App;
