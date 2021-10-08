import React from 'react'
import { useState } from "react";



const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [time, setTime] = useState('今天之内');
    const [highlight, setHighlight] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text || !time){
            alert('待办和期限不能为空！');
            return;
        }
        onAdd({ text, time, highlight}); // => taskData
        setText('');
        setTime('今天之内');
        setHighlight(false);
    }
    

    return (
        <form action="" className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="">待办</label>
                <input type="text" name="" id="" placeholder="查邮件" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="">期限</label>
                <input type="text" name="" id="" placeholder="晚10点前" value={time} onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="">重要</label>
                <input type="checkbox" name="" id="" value={highlight} onChange={(e) => setHighlight(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="保 存" className='btn btn-block'/>
        </form>
    )
}

export default AddTask
