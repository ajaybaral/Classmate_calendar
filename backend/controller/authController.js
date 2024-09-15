const { auth } = require('../config/firebaseConfig'); // Import Firebase Auth

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        res.status(201).json({ uid: user.uid, email: user.email });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Login a user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        res.status(200).json({ uid: user.uid, email: user.email });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user', error });
    }
};

// Logout a user
exports.logoutUser = async (req, res) => {
    try {
        await auth.signOut();
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging out user', error });
    }
};
