import express from 'express';
const router = express.Router();

import userRoutes from './users.js';
import studentRoutes from './students.js';
import empRoutes from './emp.js';
import departmentsRoutes from './departments.js';


import authRoutes from './auth.js'; // authentication 
import { verifyToken } from '../middleware/auth.js'
// Use user routes
router.use('/users',userRoutes);
router.use('/students',verifyToken, studentRoutes);
router.use('/emp',verifyToken, empRoutes);
router.use('/departments',verifyToken, departmentsRoutes);

router.use('/auth', authRoutes); // Use auth routes

export default router;
