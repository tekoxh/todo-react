import { AiFillDelete } from "react-icons/ai";

export default function Task({taskArray,onDelete}){
   

    return(
        <ul>
           {taskArray.map((taskList,index) =>{
            return <li className="task-box" key = {index}>
            <p>{taskList}</p>
                    <AiFillDelete onClick={onDelete}/>
            </li>
           })}
        </ul>
    )
       
 
}