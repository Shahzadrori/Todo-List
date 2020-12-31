import React, { useState } from 'react';
import './todo.css';

const List = () => {
    const [name,setname] = useState("");
    const [item,setitem] = useState([
        
    ])

    const Inp = (val) => {
        setname(val.target.value);
    }



    return(
    <>
        <div className='outer'>
            <div className='inner'>
                <h1>Todo List</h1>
                <div className='btn'>
                <input type='text' placeholder='Enter the task' onChange = {Inp} required />
                <button type='submit'>+</button> 
                </div>
    
                <ul>
                    <li>{name}</li>
                </ul>
            </div>
        </div>
    </>
    )
}
export default List;