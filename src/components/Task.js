import { MdClose } from 'react-icons/md'
import React from 'react'

const Task = ({ task, onDelete, onHighlight }) => {
    return (
        <div className={`task ${task.highlight?'highlight':''}`} >
            <h3> <span onClick={() => onHighlight(task.id)}>{ task.text } </span>
                <MdClose style={{ cursor: 'pointer' }} 
                        onClick={() => onDelete(task.id)} /></h3>
            <p>{ task.time }</p>
        </div>
    )
}

export default Task
