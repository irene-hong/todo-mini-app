import React from 'react'

const Button = ({onShowForm, showForm}) => {
    if (showForm){
        return (
            <button className='btn' 
                onClick={onShowForm} 
                style={{backgroundColor: 'grey'}}> 取消 
            </button>
        )
    } else {
        return (
            <button className='btn' 
                onClick={onShowForm} 
                style={{backgroundColor: 'black'}}> 添加 
            </button>
        )
    }
    
}




export default Button
