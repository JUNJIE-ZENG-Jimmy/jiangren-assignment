import { useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import InputComponent from './components/InputComponent/InputComponent';
import Filter from './components/Filter/Filter';
import './ToDoList.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, content: 'Learning React', status: 'complete' },
    ]);
    const [currentFilter, setCurrentFilter] = useState('all');

    const handleStatusChange = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId
                    ? {
                        ...task,
                        status: task.status === 'complete' ? 'incomplete' : 'complete'
                    }
                    : task
            )
        );
    };

    const handleInputChange = (value) => {
        if (value.trim()) {
            setTasks(prevTasks => [
                ...prevTasks,
                {
                    id: prevTasks.length + 1,
                    content: value,
                    status: 'incomplete'
                }
            ]);
        }
    };

    const handleFilterChange = (filterValue) => {
        setCurrentFilter(filterValue);
    };

    const displayTasks = tasks.filter(task => {
        if (currentFilter === 'all') return true;
        return task.status === currentFilter;
    });

    return (
        <div className="todo-list">
            <div>
                <InputComponent onInputChange={handleInputChange} />
                <Filter
                    currentFilter={currentFilter}
                    onFilterChange={handleFilterChange}
                />
            </div>
            <Tasks tasks={displayTasks} onStatusChange={handleStatusChange} />
        </div>
    )
}

export default ToDoList;