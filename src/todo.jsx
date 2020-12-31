import React from 'react';
import './todo.css';

const List = () => {



    return(
    <>
        <div className='outer'>
            <div className='inner'>
                <h1>Todo List</h1>
                <div className='btn'>
                <input type='text' placeholder='Enter the task' required />
                <button type='submit'>+</button> 
                </div>
                <ol>
                    <li>Apple</li>
                </ol>
            </div>
        </div>
    </>
    )
}
export default List;