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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
describe('User Model', () => {
    it('should create a new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            name: 'matheus',
            email: 'matheus@gmail.com',
            cpf: '12345678900',
            address: 'Rua avenida',
            password: 'password123',
        };
        const user = yield User_1.default.create(userData);
        expect(user).toBeDefined();
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
        expect(user.cpf).toBe(userData.cpf);
        expect(user.address).toBe(userData.address);
        expect(user.password).toBe(userData.password);
        expect(user.isAdmin).toBe(false);
    }));
    it('should not create a user without required fields', () => __awaiter(void 0, void 0, void 0, function* () {
        const userDataName = {
            email: 'matheus@gmail.com',
            cpf: '12345678900',
            address: 'Rua avenida',
            password: 'password123',
        };
        try {
            yield User_1.default.create(userDataName);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toContain('Path `name` is required.');
        }
        ;
        const userDataEmail = {
            name: 'matheus',
            cpf: '12345678900',
            address: 'Rua avenida',
            password: 'password123',
        };
        try {
            yield User_1.default.create(userDataEmail);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toContain('Path `email` is required.');
        }
        ;
        const userDataCpf = {
            name: 'matheus',
            email: 'matheus@gmail.com',
            address: 'Rua avenida',
            password: 'password123',
        };
        try {
            yield User_1.default.create(userDataCpf);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toContain('Path `cpf` is required.');
        }
        ;
        const userDataAddress = {
            name: 'matheus',
            email: 'matheus@gmail.com',
            cpf: '12345678900',
            password: 'password123',
        };
        try {
            yield User_1.default.create(userDataAddress);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toContain('Path `address` is required.');
        }
        ;
        const userDataPassword = {
            name: 'matheus',
            email: 'matheus@gmail.com',
            cpf: '12345678900',
            address: 'Rua avenida',
        };
        try {
            yield User_1.default.create(userDataPassword);
        }
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toContain('Path `password` is required.');
        }
        ;
    }));
});
