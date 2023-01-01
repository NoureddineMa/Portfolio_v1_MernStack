const app = require('../server.js');
const request = require('supertest');

describe('POST /login', () => {

    test('should respond status 400 if email or password empty', async () => {
        const response = await request(app).post('/api/users/login').send({ email: '', password: '' });
        expect(response.statusCode).toBe(400);
    });

    test('should respond status 400 if email not valid ' , async () => {
        const response = await request(app).post('/api/users/login').send({ email: 'test', password: 'test' });
        expect(response.statusCode).toBe(400);
    });
    test('should respond status code 400 if email or password incorrect',async () => {
        const response = await request(app).post('/api/users/login').send({ email: 'test@gmail.com', password: 'test' });
        expect(response.statusCode).toBe(400);
    })
    test('should respond status code 200 if email and password correct',async () => {
        const response = await request(app).post('/api/users/login').send({ email: 'noureddinemaher13@gmail.com' , password: 'test123' });
        expect(response.statusCode).toBe(200);
    })
});
