import express from 'express';
import { createServer } from 'http';
import { Server as WebSocketServer } from 'ws';
import cors from 'cors';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Your frontend server
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
  });

  ws.send('Hello from WebSocket server');
});

server.listen(3333, () => {
  console.log('Server started on http://localhost:3333/');
});
