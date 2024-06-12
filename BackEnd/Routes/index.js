import express from 'express';
import Snackin from '../Routes/Snackin.js';
import AuthRoute from '../Routes/AuthRoute.js';
import { authenticateToken } from '../Middleware/ValidateMiddleware.js';
import passport from 'passport';
import '../Middleware/Passport.js';

const router = express();

// router.use(authenticateToken, Snackin);
// router.use(siswaRoute);
router.use(passport.authenticate('jwt', { session: false }), Snackin);
router.use(AuthRoute);

export default router;