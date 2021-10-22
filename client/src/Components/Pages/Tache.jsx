import React , {useState , useEffect} from 'react'
import axios from 'axios'
import Addtask from '../Addtask'
import Todolist from '../Todolist'
import Updatetask from '../Updatetask'

const Tache = (props) => {

    const [todolist,setTodolist] = useState([])
    const  [tasktoUpdate , setTasktoUpdate] = useState({})
    const [showPopup,setShowPopup] = useState(false)
    const [user, setUser] = useState(null);

    useEffect(() => {
      console.log(user)
      axios.get("http://localhost:8000/api/users/verife").then((res)=>{
        setUser(res.data)
    }).catch((error)=>{
        if(error.response.status === 403){
            props.history && props.history.replace('/login')
            console.log(user)
            setUser(null)
        }
    } )


  axios.get('http://localhost:8000/api/tasks').then(res => { //d'ou elle vient 
    setTodolist(res.data)
    }).catch(err => console.log(err))
    },[])
    const addTask = newTask => {
      setTodolist([...todolist,newTask])
    }

    const logout = async ()=>{
      try{
       await axios.post('http://localhost:8000/api/users/logout')
       props.history.replace('/login')
      }
      catch(error){
  
      }
   }
  
  
    const taskComplete = task  => {
      const newList = [...todolist]
      newList.forEach(item => {
        if(item._id === task._id){
          item.isComplete = task.isComplete
        }
      })
      setTodolist(newList)
    }
    const removeTask = task => {
      const newList = todolist.filter(item => !(item._id === task._id))
      setTodolist(newList)
    }
  
  const updatetask = task => {
    const newList = [...todolist]
    newList.forEach(item => {
      if(item._id === task._id){
        item.todo = task.todo
      }
    })
  setTodolist(newList)
  }

    return (<div>
      <div>
      <Addtask addTask = {addTask}/>
      <button onClick={logout} style={{
      marginLeft:"95%" ,padding:"10px", backgroundColor:"#66ccff",color:"#ffffff",borderRadius:"10px"
    }} >Logout</button>
    
      </div>
    <Todolist todolist = {todolist} taskComplete = {taskComplete} removeTask =
    {removeTask} tasktoUpdate = {task => setTasktoUpdate(task)} showPopup = {() => 
    setShowPopup(!showPopup)}/>
    {showPopup && <Updatetask task = {tasktoUpdate} updatetask = {updatetask} 
    removePopup = {() => setShowPopup(!showPopup)}/>}
    </div>  );
}
 
export default Tache;