import React from 'react'
import Button from './Button'

const Header = ({title, onShowForm, showForm}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* <p>{subtitle}</p> */}
            <Button showForm={showForm} 
                    onShowForm={onShowForm}/>
        </header>
    )
}

Header.defaultProps = {
    title: '今日任务'
}

export default Header


