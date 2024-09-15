import React, { useState } from 'react';

const TaskForm = () => {
    const [task, setTask] = useState({
        title: '',
        date: '',
        category: 'exam', // default category
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Task added:', task);
        // Submit task logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
            <input
                type="date"
                value={task.date}
                onChange={(e) => setTask({ ...task, date: e.target.value })}
            />
            <select
                value={task.category}
                onChange={(e) => setTask({ ...task, category: e.target.value })}
            >
                <option value="exam">Exam</option>
                <option value="submission">Submission</option>
                <option value="event">Event</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
 