import express from 'express';
import {
  createemp,
  getAllemp,
  getempById,
  updateempById,
  deleteempById,
} from '../controllers/emp.js';

const router = express.Router();

router.post('/', createemp);
router.get('/', getAllemp);
router.get('/:id', getempById);
router.put('/:id', updateempById);
router.delete('/:id', deleteempById);

export default router;