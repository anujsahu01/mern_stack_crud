import express from 'express';
import {
  createdepartments,
  getAlldepartments,
  getdepartmentsById,
  updatedepartmentsById,
  deletedepartmentsById,
} from '../controllers/departments.js';

const router = express.Router();

router.post('/', createdepartments);
router.get('/', getAlldepartments);
router.get('/:id', getdepartmentsById);
router.put('/:id', updatedepartmentsById);
router.delete('/:id', deletedepartmentsById);

export default router;