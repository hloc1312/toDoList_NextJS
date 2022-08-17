import * as React from 'react';
import { useState } from 'react';
export interface ToDoListProps {
}

export default function ToDoList (props: ToDoListProps) {
    const [userInput, setUserInput] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const [toDoListComplete, setToDoListComplete] = useState([]);
    
  return (
    <div className='ToDoList container border border-primary w-50 rounded p-4'>

        <h3 className='text-info font-weight-bold text-center'>To Do List</h3>
        <form action="#">
            <div className="form-group">
                <label>Nhập việc cần làm:</label>
                <input type="text" className="form-control" onChange={(e)=>{
                    setUserInput(e.target.value);
                    // console.log(userInput)
                }}/>                
            </div>
            <button className="btn btn-outline-success" onClick={(e)=>{
                e.preventDefault();
                setToDoList([...toDoList, userInput]);
            }}>Thêm việc cần làm</button>
           <ul className='mt-4'>
                {
                    toDoList.length >= 1 ? 
                    toDoList.map((todo,index)=>{
                        return(
                            <li key={index} className="mb-3">
                                {todo}
                                <button className="btn btn-outline-danger ml-3" onClick={(e)=>{
                                    e.preventDefault();
                                    const updateArr = toDoList.filter((val)=> toDoList.indexOf(val) !== toDoList.indexOf(todo))
                                    console.log(updateArr)
                                    setToDoList(updateArr)
                                }}>
                                    Xóa
                                </button>
                                <button className="btn btn-outline-success ml-3" onClick={(e)=>{
                                    e.preventDefault();
                                    const updateArrComplete = toDoList.filter((val)=> toDoList.indexOf(val) === toDoList.indexOf(todo));
                                    console.log(updateArrComplete)
                                    setToDoListComplete([updateArrComplete,...toDoListComplete]);
                                    console.log(toDoListComplete)
                                    const updateArr = toDoList.filter((val)=> toDoList.indexOf(val) !== toDoList.indexOf(todo))
                                    setToDoList(updateArr)
                                    console.log({updateArr})

                                }}>Đã hoàn thành</button>
                            </li>

                        ) 
                    })

                    : 
                    <div>
                        <p className='text-danger text-center'>Công việc cần làm </p>
                      
                    </div> 


                }
           </ul>
           <hr />
           <ul>
                {
                    toDoListComplete.length >= 1 ? 
                    toDoListComplete.map((todo,index)=>{
                        return(
                            <li key={index} className="mb-3 text-success">
                                {todo}
                                <button className="btn btn-danger ml-3" onClick={(e)=>{
                                    e.preventDefault();
                                    const updateArr = toDoListComplete.filter((val)=> toDoListComplete.indexOf(val) !== toDoListComplete.indexOf(todo))
                                    console.log(updateArr)
                                    setToDoListComplete(updateArr)
                                }}>
                                    Xóa
                                </button>
                                <button className="btn btn-success ml-3" onClick={(e)=>{
                                    e.preventDefault();
                                    const updateArrComplete = toDoList.filter((val)=> toDoList.indexOf(val) === toDoList.indexOf(todo));
                                    // console.log(updateArrComplete)
                                    setToDoListComplete([updateArrComplete,...toDoListComplete]);

                                   

                                }}>Đã hoàn thành</button>
                            </li>

                        ) 
                    })
                    :
                    
                    <div>
                        <p className='text-success text-center'>Công việc đã hoàn thành </p>
                      
                    </div> 
                }
           </ul>
        </form>


    </div>
  );
}
