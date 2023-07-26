const request = require('supertest');
const app = require('./index.js');

describe('GET /will', () => {
  it('responds with status "Hello World"', async () => {
    const response = await request(app).get('/will');

    expect(response.body).toEqual({ response: 'Hello World' });
  });
});
