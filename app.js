const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

const userRoutes = require('./routes/users.routes');

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = config.PORT || 5000;

async function startServer() {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}!`));
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

startServer();
