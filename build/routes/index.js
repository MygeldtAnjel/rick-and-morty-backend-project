"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const characters_route_1 = __importDefault(require("./characters.route"));
const router = express_1.default.Router();
router.use('/characters', characters_route_1.default);
exports.default = router;
