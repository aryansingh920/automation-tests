// using jest
// Import the required dependencies

// npm install jest --save-dev

// npm install supertest --save-dev

// {
//   "scripts": {
//     "test": "jest"
//   }
// }

// npm test

const request = require('supertest');
const app = require('./app'); // Your Express application

// A sample test case
describe('GET /api/users', () => {
  it('responds with JSON containing a list of users', async () => {
    // Send a GET request to the specified route
    const response = await request(app).get('/api/users');
    
    // Assert the response
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));
    expect(response.body).toHaveProperty('users');
    expect(response.body.users).toBeInstanceOf(Array);
  });
});
