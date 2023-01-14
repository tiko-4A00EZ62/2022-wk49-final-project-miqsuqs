const express = require('express');
const expensesRouter = require('./routes/expenses.routes');

const app = express();

app.use(express.json());
app.use('/api/expenses', expensesRouter);
app.get('/health', (req, res) => {
  res.send('OK');
});

module.exports = app;
