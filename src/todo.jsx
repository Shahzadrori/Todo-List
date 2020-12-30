import React from 'react';
import './todo.css';

const List = () => {



    return(
    <>
        <div className='outer'>
            <div className='inner'>
            <br/>
                <h1>Todo List</h1>
                <br/>
                <input type='text' placeholder='Enter the task' required />
                <button type='submit'>+</button>
            </div>
        </div>
    </>
    )
}
export default List;