import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  // loginuser
supportUser,
order,
} from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);
router.post('/order' ,order);


//usersopprt
router.post('/support' , supportUser)

// login website
// router.post('/login',loginuser);

export default router;