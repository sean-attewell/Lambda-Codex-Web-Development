// A database is often necessary because our application or code requires data persistence. 
// This term refers to data that is infrequently accessed and not likely to be modified. 
// In less technical terms, the information will be safely stored and remain untouched unless intentionally modified.

// A familiar example of non-persistent data would be JavaScript objects and arrays, which reset each time the code runs.

// Relational Databases
// In relational databases, the data is stored in tabular format grouped into rows and columns (similar to spreadsheets). 
// A collection of rows is called a table. 
// Each row represents a single record in the table and is made up of one or more columns.

// These kinds of databases are relational because relation is a mathematical idea equivalent to a table. 
// So relational databases are databases that store their data in tables.

// Tables
// Below are some basic facts about tables:

// Tables organize data in rows and columns.
// Each row in a table represents one distinct record.
// Each column represents a field or attribute that is common to all the records.
// Fields should have a descriptive name and a data type appropriate for the attribute it represents.
// Tables usually have more rows than columns.
// Tables have primary keys that uniquely identify each row.
// Foreign keys represent the relationships with other tables.


// SQL (Structured Query Language)
// Relational database specific 
// A query language not a programming language 
// Knex is kind of a JS wrapper for writing SQL

// SQL is a standard language, which means that it will certainly be supported, no matter how your database is managed. 
// That said, be aware that the SQL language can vary depending on database management tools. 
// This lesson focuses on a set of core commands that never change. 

// The syntax for SQL is English-like and requires fewer symbols than programming languages like C, Java, and JavaScript. 
// It is declarative and concise, which means there is much less to learn to use effectively.

// When learning SQL, it is helpful to understand that each command is designed for a different purpose. 
// If we classify the commands by purpose, we'll end up with the following sub-categories of SQL:

// Data Definition Language (DDL): used to modify database objects. 
// Some examples are: CREATE TABLE, ALTER TABLE, and DROP TABLE.

// Data Manipulation Language (DML): used to manipulate the data stored in the database. 
// Some examples are: INSERT, UPDATE, and DELETE.

// Data Query Language (DQL): used to ask questions about the data stored in the database. 
// The most commonly used SQL command is SELECT, and it falls in this category.

// Data Control Language (DCL): used to manage database security and user's access to data. These commands fall into the realm of Database Administrators. 
// Some examples are GRANT and REVOKE.

// Transaction Control Commands: used for managing groups of statements that must execute as a unit or not execute at all. Examples are COMMIT and ROLLBACK.
// As a developer, you'll need to get familiar with DDL and become proficient in using DML and DQL.


// SQL statements end with a semicolon
// SQL doesn't care about new lines
// SQL isn't case sensitive though it is 