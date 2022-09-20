
import { Checkbox } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../redux/actionTypes'
import './TodoItem.css';

const TodoItem = ({task,status,id}) => {

    const dispatch = useDispatch()

    const markDone=()=>{
        dispatch({
            type:actions.MARK_DONE,
            payload: {
                id
            }
        })
    }

    const deleteTask=()=>{
        dispatch({
            type:actions.REMOVE_TASK,
            payload: {
                id
            }
        })
    }

  return (
    <div className='todoItem' style={{display:"flex"}}>
        <Checkbox checked={status}  onChange={markDone} />
        <p className={status&&'todoItem--completed'}>{task}</p>
        <Checkbox checked={false} onChange={deleteTask}/>
    </div>
  )
}

export default TodoItem