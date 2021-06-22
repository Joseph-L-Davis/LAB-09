import Router from 'express';
import User from '../models/User';
import postWithWord from '../services/postWithWord';


export default Router()
  .post('/api/v1/users', async (req, res) => {
    try {
      const user = await await postWithWord.create(req.body);
      res.send(user);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  .get('/api/v1/users/:id', async (req, res) => {
    try{
      const user = await User.findById(req.params.id);
      res.send(user);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  .get('/api/v1/users', async (req, res) => {
    try {
      const users = await User.findAllUsers();
      res.send(users);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  .put('/api/v1/users/:id', async (req, res) => {
    try {
      const user = await User.updateUser(req.params.id);
      res.send(user);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  .delete('/api/v1/users/:id', async (req, res) => {
    try {
      const user = await User.deleteUser(req.params.id);
      res.send(user);
    } catch(err) {
      res.status(500).send(err);
    }
  });
