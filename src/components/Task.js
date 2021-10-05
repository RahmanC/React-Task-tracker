import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";
// import { FaTimesCircle } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle}) => {
    return (
                        //if the task.reminder is true, then call the class named reminder else nothing 
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => {
            onToggle(task.id)
        }}>
            <h3>{task.text} <FaTimesCircle style= {{ color: 'red', cursor: 'pointer'}}
            onClick={() => onDelete(task.id)}
            /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
