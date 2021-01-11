import React, { useState } from 'react';
import './todo.css';


const List = () => {
    const [item,setitem] = useState();
    const [subitems,setsubitems] = useState([
    ])

    const Inp = (val) => {
        setitem(val.target.value);
    }
    const Sub = ()=>{
        setsubitems((oldval) =>{
            return (
                [...oldval,item]
            )
        });
        setitem('')
      };
   



    return(
    <>
        <div className='outer'>
            <div className='inner'>
                <h1>Todo List</h1>
                <div className='btn'>
                <input id='inp' type='text' placeholder='Enter the task' onChange = {Inp} value={item} required />
                <button type='button' onClick={Sub}>+</button> 
                </div>
    
                <ul>
                {subitems.map((oldval)=>{
                    return <li>{oldval}</li>
                })
                }
                </ul>
            </div>
        </div>
    </>
    )
            }



export default List;