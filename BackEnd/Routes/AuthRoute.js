import express from 'express';
import { signin, signup } from '../Controller/AuthController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/sigin', signin);

export default router;