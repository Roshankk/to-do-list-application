import React, { useState } from 'react'

function TodoList(props) {
    const [inputItems, setinputItems] = useState('')
    const handleEenter=(e)=>{
     
    }
    return (
        <div className="inputContainer">
            <input type="text" className='inputboxTodo' placeholder='Enter your Items'
            value={inputItems}
                onChange={e => { setinputItems(e.target.value) }}
                onKeyDown={handleEenter}
            />
            <button className='plus-btn' onClick={()=>{
                props.addList(inputItems)
                setinputItems('')
            }}>+</button>
            
        </div>
    )
}

export default TodoList;