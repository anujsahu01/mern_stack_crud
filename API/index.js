import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; /// cross origin resourse system 
dotenv.config();

import Routes from './routes/index.js';

// Load environment variables from .env file

const app = express();

app.use(cors({
  origin: ['http://localhost:3003', 'http://localhost:3000','http://localhost:3300','*'],// Frontend localhost origin
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

// Use environment variable for the port, with a fallback value if not provided
const port = process.env.PORT || 3001; // Default to 3001 if PORT is not set

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/api', Routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
