import express from 'express';
import { signup, login, logout, deleteAccount } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.delete('/delete-account', protect, deleteAccount);

export default router;