// Using useState hook
import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Oct 3rd at 1:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Team Meeting',
        day: 'Oct 3rd at 12:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Oct 3rd at 2:30pm',
        reminder: false,
    }
])

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}


// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? 
  {...task, reminder: !task.reminder} : task))
}



  return (
    // JSX expression must have one parent element
    <div className="container">
     <Header />
     <AddTask />
     {/* if task is > 0, display tasks else display no task */}
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} 
     onToggle = {toggleReminder}
     />) : ('No Available Task')}
    </div>
  );
}

export default App;
