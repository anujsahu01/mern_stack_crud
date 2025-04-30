// routes/users.js
import express from 'express';
import {
login
} from '../controllers/auth.js';

const router = express.Router();

// CRUD Routes
router.post('/login', login);

export default router;