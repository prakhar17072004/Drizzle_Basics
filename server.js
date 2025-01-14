import express from 'express';
import db from './DB/DB_Connect.js';
import { users } from './schema.js';

const app = express();
app.use(express.json());

// Add a new user
app.post('/users', async (req, res) => {
    const { name, email, bio } = req.body;
    const result = await db.insert(users).values({ name, email, bio });
    res.json({ message: 'User added successfully', result });
});

// Get all users
app.get('/users', async (_req, res) => {
    const allUsers = await db.select().from(users);
    res.json(allUsers);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
