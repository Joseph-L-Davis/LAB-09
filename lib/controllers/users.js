import Router from 'express';


export default Router()
  .post('/api/v1/users', async (req, res) => {
   
  })

  .get('/api/v1/users/:id', async (req, res) => {
    try{
      const pajama = await Pajama.findById(req.params.id);
      res.send(pajama);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  .get('/api/v1/users', async (req, res) => {
    try {
      const users = await Pajama.findAllusers();
      res.send(users);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  .put('/api/v1/users/:id', async (req, res) => {
    try {
      const pajama = await Pajama.updatePajama(req.params.id);
      res.send(pajama);
    } catch(err) {
      res.status(500).send(err);
    }
  })

  .delete('/api/v1/users/:id', async (req, res) => {
    try {
      const pajama = await Pajama.deletePajama(req.params.id);
      res.send(pajama);
    } catch(err) {
      res.status(500).send(err);
    }
  });