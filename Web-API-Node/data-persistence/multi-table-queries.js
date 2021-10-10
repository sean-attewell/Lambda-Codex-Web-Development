// Foreign keys are a type of table field used for creating links between tables. 
// Like primary keys, they are most often integers that identify (rather than store) data. 
// However, whereas a primary key is used to id rows in a table, foreign keys are used to connect a record in one table to a record in a second table.

// The farm_id in the ranchers table is an example of a foreign key. 
// Each entry in the farm_id (foreign key) column corresponds to an id (primary key) in the farms table. 
// This allows us to track which farm each rancher belongs to while keeping the tables normalized.

// If we could only see the ranchers table, we would know that John, Jane, and Jen all work together and that Jim and Jay also work together. 
// However, to know where any of them work, we would need to look at the farms table.



// A join statement is a method for querying data from two or more tables
// Used to connect table on a common field (such as a foreign and primary key)
// For example you could make a new third table that shows rancher_id, rancher_name and farm_name all together.

// You select the fields you want as normal, then join them

// SELECT OrderID, CustomerName, OrderDate FROM Orders
// JOIN Customers
// ON Orders.CustomerId = Customers.CustomerId

// This is the default type of join - an INNER JOIN. Will only select rows where there is a match between tables.
// LEFT JOIN selects everything forom the first table and any matches from the right (so will include an order without a customer)
// RIGHT JOIN defaults to everything from the right table, and any matches from the left (so would include a customer without an order)
// FULL JOIN selects all entries from both tables regardless of matches

// INNER JOIN and LEFT JOIN are the most common

// Can Join another table on with another two lines of JOIN and ON below
// Everything you join on has to link to first table you started with
// Also can Alias

// SELECT OrderID, CustomerName, ShipperName OrderDate FROM Orders AS O
// JOIN Customers AS C
// ON O.CustomerId = C.CustomerId
// JOIN Shippers AS S
// ON O.ShipperId = S.ShipperID



// select d.id, d.name, e.id, e.first_name, e.last_name, e.salary
// from employees as e
// join departments as d
//   on e.department_id = d.id
// order by d.name, e.last_name

// Notice that we can take advantage of white space and indentation to make queries more readable.

// There are several ways of writing joins, but the one shown here should work on all database management systems and avoid pitfalls, so we recommend it.

// The syntax for performing a similar join using Knex is as follows:

db('employees as e')
  .join('departments as d', 'e.department_id', 'd.id')
  .select('d.id', 'd.name', 'e.first_name', 'e.last_name', 'e.salary')


// DIY example:

// https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top

// SELECT P.ProductName, C.CategoryName FROM Products AS P
// JOIN Categories as C
//   on P.CategoryID = C.CategoryID
