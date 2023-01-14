const express = require('express');
const {
  createExpense,
  deleteExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
} = require('../controller/expenses.controller');

const router = express.Router();

router.get('/', getExpenses);
router.get('/:expense_id', getExpenseById);
router.post('/', createExpense);
router.put('/', updateExpense);
router.delete('/:expense_id', deleteExpense);

module.exports = router;
