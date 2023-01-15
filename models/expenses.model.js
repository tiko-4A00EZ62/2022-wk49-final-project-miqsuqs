/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
const connection = require('../db/connection');

const expenses = {
  findAll: () =>
    new Promise((resolve, reject) => {
      connection.query('select * from expenses;', (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  findById: (id) =>
    new Promise((resolve, reject) => {
      const selectQuery = 'select * from expenses where expense_id=?;';
      connection.query(selectQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  post: (expense) =>
    new Promise((resolve, reject) => {
      connection.query('insert into expenses set ?', expense, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  deleteById: (id) =>
    new Promise((resolve, reject) => {
      const deleteQuery = 'delete from expenses where expense_id=?;';
      connection.query(deleteQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  updateById: (expense) =>
    new Promise((resolve, reject) => {
      const updateQuery =
        'update expenses set product_name = ?, product_amount = ?, product_category = ?, shop_name = ?, expense_date = ?, cost = ? where expense_id = ?;';
      connection.query(
        updateQuery,
        [
          expense.product_name,
          expense.product_amount,
          expense.product_category,
          expense.shop_name,
          expense.expense_date,
          expense.cost,
          expense.id,
        ],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
};

module.exports = expenses;
