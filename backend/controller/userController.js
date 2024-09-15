const { firestore } = require('../config/firebaseConfig'); // Import Firebase Firestore

// Get user profile by UID
exports.getUserProfile = async (req, res) => {
    try {
        const { uid } = req.params;
        const userDoc = await firestore.collection('users').doc(uid).get();

        if (!userDoc.exists) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(userDoc.data());
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error });
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    try {
        const { uid } = req.params;
        const { displayName, photoURL } = req.body;

        const userRef = firestore.collection('users').doc(uid);
        await userRef.update({ displayName, photoURL });

        res.status(200).json({ message: 'User profile updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile', error });
    }
};
