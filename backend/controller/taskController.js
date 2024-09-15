const { firestore } = require('../config/firebaseConfig'); // Import Firebase Firestore

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, deadline, category } = req.body;

        if (!title || !deadline || !category) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newTask = {
            title,
            deadline,
            category,
            createdAt: new Date()
        };

        const docRef = await firestore.collection('tasks').add(newTask);
        res.status(201).json({ id: docRef.id, ...newTask });
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const snapshot = await firestore.collection('tasks').get();
        const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};

// Update a task by ID
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, deadline, category } = req.body;

        if (!title || !deadline || !category) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const taskRef = firestore.collection('tasks').doc(id);
        await taskRef.update({ title, deadline, category });
        res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await firestore.collection('tasks').doc(id).delete();
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};
