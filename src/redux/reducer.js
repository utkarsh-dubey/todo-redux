import { actions } from "./actionTypes"


// action = {
//     type: ,
//     payload: {

//     }
// }


// store example - 
const initial =  [
    {
        id:1,
        task:"To complete this app",
        status:false
    }
 ]

export const reducer = (state=initial, action) =>{

    switch (action.type) {
        case actions.ADD_TASK:
            //logic for adding task in store
            
            return [ ...state,
                {
                    id: Date.now(),
                    task: action.payload.task,
                    status: false
                }
             ];
        
        case actions.REMOVE_TASK:
            //logic for removing task from store

            return state.filter(task=> task.id!==action.payload.id);

        case actions.MARK_DONE:
            //logic for  marking a task as done in store

            return state.map(task=> (task.id!==action.payload.id)?task:{...task,status:!task.status});


        default:
            
            return state;
    }

}