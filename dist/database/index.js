"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDB = void 0;
const Conection_1 = __importDefault(require("./Conection"));
const mongoDB = new Conection_1.default("mongodb://localhost:27017/WhiskyCo");
exports.mongoDB = mongoDB;
