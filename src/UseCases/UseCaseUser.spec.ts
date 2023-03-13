import User from "../models/User";

describe('User Model', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'matheus',
        email: 'matheus@gmail.com',
        cpf: '12345678900',
        address: 'Rua avenida',
        password: 'password123',
      };
      const user = await User.create(userData);
      expect(user).toBeDefined();
      expect(user.name).toBe(userData.name);
      expect(user.email).toBe(userData.email);
      expect(user.cpf).toBe(userData.cpf);
      expect(user.address).toBe(userData.address);
      expect(user.password).toBe(userData.password);
      expect(user.isAdmin).toBe(false);
    });
  
    it('should not create a user without required fields', async () => {
      const userDataName = {
        email: 'matheus@gmail.com',
        cpf: '12345678900',
        address: 'Rua avenida',
        password: 'password123',
      };
      try {
        await User.create(userDataName);
      } catch (error: any) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toContain('Path `name` is required.');
      };
      const userDataEmail = {
        name: 'matheus',
        cpf: '12345678900',
        address: 'Rua avenida',
        password: 'password123',
      };
      try {
        await User.create(userDataEmail);
      } catch (error: any) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toContain('Path `email` is required.');
      };
      const userDataCpf = {
        name: 'matheus',
        email: 'matheus@gmail.com',
        address: 'Rua avenida',
        password: 'password123',
      };
      try {
        await User.create(userDataCpf);
      } catch (error: any) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toContain('Path `cpf` is required.');
      };
      const userDataAddress = {
        name: 'matheus',
        email: 'matheus@gmail.com',
        cpf: '12345678900',
        password: 'password123',
      };
      try {
        await User.create(userDataAddress);
      } catch (error: any) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toContain('Path `address` is required.');
      };
      const userDataPassword = {
        name: 'matheus',
        email: 'matheus@gmail.com',
        cpf: '12345678900',
        address: 'Rua avenida',
      };
      try {
        await User.create(userDataPassword);
      } catch (error: any) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toContain('Path `password` is required.');
      };
    });
});
