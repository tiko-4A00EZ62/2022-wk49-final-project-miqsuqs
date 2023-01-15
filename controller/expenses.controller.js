/* eslint-disable newline-per-chained-call */
// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require('joi');
const expenses = require('../models/expenses.model');

const getExpenses = async (req, res) => {
  try {
    const response = await expenses.findAll();
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getExpenseById = async (req, res) => {
  const id = parseInt(req.params.expense_id, 10);
  try {
    const response = await expenses.findById(id);
    if (response.length === 1) {
      res.send(response[0]);
    } else {
      res.status(404).send('Not Found');
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const createExpense = async (req, res) => {
  const schema = Joi.object({
    product_name: Joi.string().min(3).max(255).required(),
    product_amount: Joi.number().integer().min(1).max(1000).required(),
    product_category: Joi.string().min(3).max(255).required(),
    shop_name: Joi.string().min(3).max(255).required(),
    expense_date: Joi.date().min('2000-01-01').required(),
    cost: Joi.number().min(0).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const expense = {
    product_name: req.body.product_name,
    product_amount: req.body.product_amount,
    product_category: req.body.product_category,
    shop_name: req.body.shop_name,
    expense_date: req.body.expense_date,
    cost: req.body.cost,
  };
  try {
    const response = await expenses.post(expense);
    if (response) {
      expense.expense_id = response.insertId;
      res.status(201).send(expense);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const updateExpense = async (req, res) => {
  const schema = Joi.object({
    expense_id: Joi.number().integer().required(),
    product_name: Joi.string().min(3).max(255).required(),
    product_amount: Joi.number().min(1).max(1000).integer().required(),
    product_category: Joi.string().min(3).max(255).required(),
    shop_name: Joi.string().min(3).max(255).required(),
    expense_date: Joi.date().min('2000-01-01').required(),
    cost: Joi.number().min(0).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const expense = {
    id: req.body.expense_id,
    product_name: req.body.product_name,
    product_amount: req.body.product_amount,
    product_category: req.body.product_category,
    shop_name: req.body.shop_name,
    expense_date: req.body.expense_date,
    cost: req.body.cost,
  };

  const id = parseInt(req.body.expense_id, 10);
  try {
    const result = await expenses.findById(id);
    if (result.length === 0) {
      res.status(404).send('Not Found');
      return;
    }
    const response = await expenses.updateById(expense);
    if (response) {
      res.status(200).send(expense);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const deleteExpense = async (req, res) => {
  const id = parseInt(req.params.expense_id, 10);
  try {
    const result = await expenses.findById(id);
    if (result.length === 0) {
      res.status(404).send('Not Found');
      return;
    }

    const response = await expenses.deleteById(id);
    if (response.affectedRows === 1) {
      res.status(200).send('Expense deleted');
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

module.exports = {
  createExpense,
  deleteExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
};
