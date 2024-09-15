import React from 'react';
import Calendar from '../components/Calendar';
import TaskForm from '../components/TaskForm';

const CalendarPage = () => {
    return (
        <div>
            <h2>My Calendar</h2>
            <Calendar />
            <TaskForm />
        </div>
    );
};

export default CalendarPage;
