# 4A00EZ62 Backend-kehitys

## Backend Development - Final Project

## Topic

### General Project

Most of us want to know where our money goes. You now have the chance to create a solution to that question. Create an application for tracking your personal expenses.

**OR**

### Fantasy Project

Like fantasy pizza, you can decide your own final project concept.
The idea must be approved by the teacher (DM the idea in ::slack:Slack).

## Topic

### General Project

Created an application for tracking expenses.

#### Creating database and adding default data

drop table if exists expenses;

create table expenses(
expense_id int(11) auto_increment,
product_name varchar(255) not null,
product_amount int(10) not null,
product_category varchar(255) not null,
shop_name varchar(255) not null,
expense_date date default null,
cost decimal(8,2) default null,
created timestamp default current_timestamp,
updated timestamp not null default current_timestamp on update current_timestamp,
primary key(expense_id)
);

insert into `expenses` (product_name, product_amount, product_category, shop_name, expense_date, cost) values ('Kurkku', 2, 'Vihannes', 'K-Market','2023-01-14', 5.24);
insert into `expenses` (product_name, product_amount, product_category, shop_name, expense_date, cost) values ('Tomaatti', 5, 'Vihannes','K-Market','2023-01-15', 4.97);
insert into `expenses` (product_name, product_amount, product_category, shop_name, expense_date, cost) values ('Salaatti', 1, 'Vihannes','S-Market','2023-01-15', 2.75);
insert into `expenses` (product_name, product_amount, product_category, shop_name, expense_date, cost) values ('Jauheliha', 2, 'Liha','Lidl','2023-01-16', 3.67);

select \* from expenses;

#### Install node packages

npm install

#### Create .env file to the project root with the following keys

HOST=
DBUSERNAME=
PASSWORD=
DATABASE=
PORT=

#### Run the app locally

nodemon index.js

#### Test that it works using the requests in localhost.rest file

### Server

Server is running on the following address and you can try using it from the server.rest file
https://expense-app-miqsuqs.onrender.com/api/expenses

#### Implemented endpoints

Health endpoint:
https://expense-app-miqsuqs.onrender.com/health

Should return OK if service is running

https://expense-app-miqsuqs.onrender.com/api/expenses
Can be used for GET, POST and PUT calls

https://expense-app-miqsuqs.onrender.com/api/expenses/{expense_id}
Can be used to DELETE or to GET the information of a specific expense by id or to get the information of a specific expense.

See the openapi.yaml for more detailed documentation.

### Self Evaluation

A = 12
B = 30
C = 12 (No tests were implemented and some endpoints weren't implemented)
D = 20
E = 10 (Documentation could be more compressed)
F = 0

Overall = 86
