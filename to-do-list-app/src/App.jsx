import React, { useState } from 'react';
import ToDoList from './components/ToDoList/ToDoList'


function App() {

  const [tasks, setTasks] = useState([
    { id: 1, content: 'Learning React', status: 'complete' },
  ]);



  return (
    <ToDoList />
  )
}

export default App
