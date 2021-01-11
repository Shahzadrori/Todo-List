import React, { useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Li from './list';
import './todo.css';


const List = () => {
    const [item,setitem] = useState();
    const [subitems,setsubitems] = useState([]);

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
   
     const Rmval = (id)=>{
       console.log('delete')
       setsubitems((oldval)=>{
           return oldval.filter((arrEl,index)=>{
               return index !== id
           })
       })
     }


    return(
    <>
        
            <div className='inner'>
                <h1>Todo List</h1>
                <div className='btn'>
                <input id='inp' type='text' placeholder='Enter the task' onChange = {Inp} value={item} required />
                <AddBoxIcon className='btn-s' type='button' onClick={Sub}>+</AddBoxIcon> 
                </div>
    
                <ul>
                {subitems.map((oldval,index)=>{
                    return(
                <Li 
                key={index}
                id={index}
                text={oldval}
                onselect={Rmval}
                
                
                 />
                    )
                })
                }
                </ul>
        </div>
    </>
    )
            }



export default List;