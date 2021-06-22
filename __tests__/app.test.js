import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import User from '../lib/models/User.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POST user with word of the day', async () => {
    const res = await request(app)
      .post('/api/v1/users')
      .send({
        name: 'god',
        email: 'gawd@dagates.com'
      });
    console.log(res.body.word);
    expect(res.body).toEqual({
      id: '1',
      name: 'god',
      email: 'gawd@dagates.com',
      word: expect.any(Object)
    });
  });

  it('GET user by ID', async () => {
    const user = await User.insert({
      name: 'jason',
      email: 'vorhees@knife'
    });

    const res = await request(app)
      .get(`/api/v1/users/${user.id}`);
    
    expect(res.body).toEqual(user);
  });

  it('GET all users', async () => {
    const jason = await User.insert({
      name: 'jason',
      email: 'vorhees@knife'
    });

    const freddy = await User.insert({
      name: 'fred',
      email: 'krueger@dreamland'
    });

    const res = await request(app)
      .get('/api/v1/users');

    expect(res.body).toEqual([jason, freddy]);
  });

  
});
