// Tasks.jsx
import React from 'react';
import './Tasks.css';

const SingleTask = ({ id, content, status, onStatusChange }) => {
    return (
        <div className="task-container">
            <span
                className="task-text"
                style={{ textDecoration: status === 'complete' ? 'line-through' : 'none' }}
            >
                {content}
            </span>
            <button
                className="task-button"
                onClick={() => onStatusChange(id)}
            >
                {status === 'complete' ? 'Incomplete' : 'Complete'}
            </button>
        </div>
    )
}

const Tasks = ({ tasks, onStatusChange }) => {
    return (
        <div className="taskList-container">
            {tasks.map(task => (
                <SingleTask
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    status={task.status}
                    onStatusChange={onStatusChange}  // 将更新函数传给每个SingleTask
                />
            ))}
        </div>
    )
}

export default Tasks;