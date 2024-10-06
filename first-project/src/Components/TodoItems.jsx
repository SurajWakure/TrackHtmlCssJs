import React from 'react'
import './CSS/TodoItems.css'
import next from './Assets/next.png'
import back from './Assets/back.png'

const TodoItems = ({no,display,text,setTodos}) => {
    const deletetodo =(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"));
        data=data.filter((todo)=>todo.no!==no)
        setTodos(data);
    }

    const toggle=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"));
        for(let i=0;i<data.length;i++){
            if(data[i].no===no){
                if(data[i].display===""){
                    data[i].display="line-through";
                }
                else{
                    data[i].display="";
                }
                break;
            }
        }
        setTodos(data);
    }
  return (
    <div className='todoitems'>
      <div className={`todoitemscontainer ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={next} alt="" />:<img src={back} alt="" />}
        
        <div className="todoitemstext">{text}</div>
      </div>
      <img onClick={()=>{deletetodo(no)}} className='todiitemscrossicon' src={next} alt="" />
    </div>
  )
}

export default TodoItems
