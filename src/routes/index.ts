import express from 'express';
import charactersRoute from './characters.route';

const router = express.Router();

router.use('/characters', charactersRoute);

export default router;