import React from 'react'

function Products(props){
    return(
        <li className='listItem'>
            {props.item}
           
            <span className='icons'>
            <i class="fa-solid fa-trash" onClick={(e)=>{
            props.deleteItem(props.index)
            }}  ></i>
            </span>
        </li>
    )
}

export default Products;