import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

function App() {

  const data = useSelector((state)=>state);


  return (
    <div className="App" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      Todo App
      {data.map(task=>(<TodoItem task={task.task} status={task.status} id={task.id}/>))}

      <Input/>
    </div>
  );
}

export default App;

// ecommerce->

// store -> js object -> 
// store = {
//   product: [
//     {
      
//     },
//     {

//     }
//   ],
//   cart: [
//     {

//     },
//     {

//     }
//   ],
//   user: {

//   }
// }

// todolist store = [
//   {
//     id: ,
//     task:  ,
//     status: 
//   },
//   {

//   }
// ]

// actions - > 
// 1- addTask
// 2- markDone
// 3- removeTask
