import React from 'react'
import { useState } from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onHighlight }) => {
    return (
        <>
           { tasks.map( (task) => (
               <Task key={task.id} task={task} onDelete={onDelete} onHighlight={onHighlight}/>
           ))} 
        </>
    )
}

export default Tasks
