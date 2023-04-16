/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

app.post('/api/authenticate', async (req, res) => {
  const { username } = req.body;

  axios
    .put(
      'https://api.chatengine.io/users/',
      {
        username: username,
        secret: username,
      },
      {
        headers: {
          'PRIVATE-KEY': `${process.env.CHATENGINE_PRIVATE_KEY}`,
        },
      }
    )
    .then((response) => {
      return res.status(response.status).json(response.data);
    })
    .catch((error) => {
      return res.status(error.response.status).json(error.response.data);
    });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
