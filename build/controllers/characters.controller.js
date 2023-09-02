"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacters = void 0;
const functions_1 = require("../utils/functions");
const getCharacters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataResponse = yield (0, functions_1.fetchGraphQL)(`
            query {
                characters(page: ${req.params.page || 1}, filter: { species:"Human"}) {
                info {
                    count
                }
                results {
                    name
                    image
                    id
                }
                }
            }
        `);
        res.status(200).json(dataResponse);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getCharacters = getCharacters;
