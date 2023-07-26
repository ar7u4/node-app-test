const request = require('supertest');
const app = require('./index.js');

describe('GET /will', () => {
  it('responds with status 200 and "Hello World"', async () => {
    const response = await request(app).get('/will');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ response: 'Hello World' });
  });
});
