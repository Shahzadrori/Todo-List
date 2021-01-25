import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const Li= (props)=>{
    return(
        <>
    <div className='dis'>
    <HighlightOffIcon className='' onClick={()=>{
        props.onselect(props.id)
    }} />.
    <li>{props.text}</li>
    </div>
    </>
    )
}

export default Li;