import express from 'express';
import { getUsers, signin, signup } from '../Controller/AuthController.js';

const router = express.Router();

router.get('/signin', getUsers);
// router.get('/signin/:id_user', getUserById);
router.post('/signup', signup);
router.post('/signin', signin);

export default router;