import express from 'express';
import * as charactersController from "../controllers/characters.controller";

const router = express.Router();

router.get("/:page", charactersController.getCharacters);

export default router;