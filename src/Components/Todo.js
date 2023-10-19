import React,{useState} from 'react'

const Todo = () => {

    const [todo,setTodo]=useState("")
    const [list,setList]=useState([])
    



    function handleSubmit(e){
        e.preventDefault();
        setList([...list,todo])
        setTodo("")
    }
    function handledelete(index){
        console.log(index);
        setList(list.filter((value,position)=>position !== index))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=>setTodo(e.target.value)} value={todo}></input>
            <button type='submit'>Add TODO</button>
        </form>

        
        {
            list.map((item,index)=>(
                <div>
                    <li>
                        {item}
                        <button onClick={()=>handledelete(index)}>Delete</button>
                    </li>
                </div>
            ))
        }

    </div>
  )
}

export default Todo