import axios from 'axios';

// Example endpoint - adjust according to your backend API
const API_BASE_URL = 'http://localhost:8000/api';

export const getTasksForDate = async (date, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tasks`, {
            params: { date },
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data; // e.g., [{ id: 1, title: 'Task', date: 'YYYY-MM-DD', category: 'exam' }]
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const createTask = async (task, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/tasks`, task, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data; // e.g., { id: 1, ...task }
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

export const updateTask = async (taskId, updatedTask, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/tasks/${taskId}`, updatedTask, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data; // e.g., { id: 1, ...updatedTask }
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

export const deleteTask = async (taskId, token) => {
    try {
        await axios.delete(`${API_BASE_URL}/tasks/${taskId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};
