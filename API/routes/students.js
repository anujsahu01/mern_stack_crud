import express from 'express';
import {
  createstudents,
  getAllstudents,
  getstudentsById,
  updatestudentsById,
  deletestudentsById,
} from '../controllers/students.js';

const router = express.Router();

router.post('/', createstudents);
router.get('/', getAllstudents);
router.get('/:id', getstudentsById);
router.put('/:id', updatestudentsById);
router.delete('/:id', deletestudentsById);

export default router;