// import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksData = await fetchTasks();
      setTasks(tasksData);
    }
    getTasks();

    
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }
  const addTask = async (taskData) => {
    // console.log(taskData);
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(taskData)
    })
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = {id, ...taskData};
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  }

  const deleteTask = async (id) => {
    // console.log('delete', id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });

    setTasks(tasks.filter(task => task.id !== id));
  }

  const highlightTask = async (id) => {
    const task = await fetchTask(id);
    const updateTask = {...task, highlight: !task.highlight}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    });
    const data = await res.json();
    setTasks(tasks.map(task => task.id === id ? {...task, highlight: data.highlight} : task)); 
  }

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  if (tasks.length > 0){
    return (
      <div className="container">
      <Header onShowForm={toggleForm} showForm={showForm}/>
      {showForm && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={ deleteTask } onHighlight={ highlightTask } />
      </div>
    )
  } else{
    return (
      <div className="container">
      <Header onShowForm={toggleForm} showForm={showForm}/>
      {showForm && <AddTask onAdd={addTask}/>}
      <p>今天没有任务！Enjoy！</p>
      </div>
    )
  } 
}

export default App;
