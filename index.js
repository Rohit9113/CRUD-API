const express = require('express');
const app = express();
const db = require('./config');
const routes = require('./routes');
const winston = require('winston');

// Configure Winston logger
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((error, req, res, next) => {
  logger.error(error.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
