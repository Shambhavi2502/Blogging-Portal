const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const { authenticateToken } = require('./middlewares/authMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);


app.get('/api/protected', authenticateToken, (req, res) => {
    res.send('This is a protected route');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
