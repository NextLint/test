const express = require('express');
const config = require('config');
const path = require('path');
const pino = require('pino');
const expressPino = require('express-pino-logger');
const mongoose = require('mongoose');

module.exports = logger = pino({ level: process.env.LOG_LEVEL || 'info', prettyPrint: true });
const expressLogger = expressPino({ logger });

const app = express();

app.use(expressLogger);

app.use(express.json({ extended: true }));

let userRoutes = require('./routes/users.routes');

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(5000, () => logger.info(`App has been started on port ${PORT}!`));
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start();
