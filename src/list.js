import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const Li= (props)=>{
    return(
        <>
    <div className='dis'>
    <HighlightOffIcon className='btn-a' onClick={()=>{
        props.onselect(props.id)
    }} />.
    <li>{props.text}</li>
    </div>
    </>
    )
}

export default Li;