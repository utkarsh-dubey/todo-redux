import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actionTypes';

const Input = () => {

    const [task,setTask] = useState('');

    const dispatch = useDispatch();

    const addToReduxStore = ()=>{
        dispatch({
            type: actions.ADD_TASK,
            payload: {
                task
            }
        })
    }



  return (
    <div>
        <input type='text' value={task} onChange={e=>setTask(e.target.value)}></input>
        <button onClick={addToReduxStore}>Add</button>
    </div>
  )
}

export default Input