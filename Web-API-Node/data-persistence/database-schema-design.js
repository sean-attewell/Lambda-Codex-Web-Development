// One useful visual interface we might use with an SQLite database is called SQLite Studio
// download sqlite studio from https://sqlitestudio.pl/
// Once installed, we can use SQLite Studio to open any .db3 file

// FROM THE VIDEO
// Open software and click open database (looks like three cylinders with a plus)
// Find your existing database e.g. hubs.db3
// see it on the left hand side, containing tables

// Opening a table you can look at the structure (column names and data types)
// As well as the data itself.
// You can also delete data within the data view of the application
// Click the red minus to delete, then store with the checkmark nexto it.

// Scroll symbol along the top is how to query with SQL


// What is a DBMS?
// To manage digital databases we use specialized software called DataBase Management Systems (DBMS). 
// These systems typically run on servers and are managed by DataBase Administrators (DBAs).

// In less technical terms, we need a type of software that will allow us to create, access, and generally manage our databases. 
// In the world of relational databases, we specifically use Relational Database Management Systems (RDBMs). 
// Some examples are Postgres, SQLite, MySQL, and Oracle.

// Choosing a DBMS determines everything from how you set up your database, where and how the data is stored, and what SQL commands you can use. 
// Most systems share the core of the SQL language that you've already learned.

// In other words, you can expect SELECT, UPDATE, INSERT, WHERE , and the like to be the same across all DBMSs, but the subtleties of the language may vary.

// What is SQLite?
// SQLite is the DBMS we primarily use at Lambda. As the name suggests, it is a more lightweight system and thus easier to set up than others.
// SQLite allows us to store databases as single files. Many of the challenges and guided projects in Lambda have a .db3 extension. That is the database.
// SQLite is not a database (like relational, graph, or document are databases) but rather a database management system.

// Opening an existing database in SQLite Studio
// One useful visual interface we might use with an SQLite database is called SQLite Studio. Install SQLite Studio here.
// Once installed, we can use SQLite Studio to open any .db3 file from a previous lesson. 
// We may view the tables, view the data, and even make changes to the database.


// Database Schema
// A database schema is the shape of our database. 
// It defines what tables we'll have, which columns should exist within the tables, and any restrictions on each column.

// A well-designed database schema keeps the data well organized and can help ensure high-quality data.

// While schema design is usually left to Database Administrators (DBAs), understanding schema helps when designing APIs and database logic. 
// And in a smaller team, this step may fall on the developer.


// When designing a single table, we need to ask three things:

// What fields (or columns) are present?
// What type of data do we expect for each field?
// Are there other restrictions needed for each column?

// field	  data type	        metadata
// id	    unsigned integer	primary key, auto-increments, generated by database
// name	  string	          required, unique
// budget	numeric	          required


// A primary key is a way to identify each entry in the database uniquely. 
// It is most often represented as an auto-incrementing integer called id or [tablename]Id

// Some supported datatype in SQLite include:

// Null: Missing or unknown information.
// Integer: Whole numbers.
// Real: Any number, including decimals.
// Text: Character data.
// *Blob: a large binary object that can be used to store miscellaneous data.

// Constraints
// Beyond data types, we may add additional constraints on each field. Some examples include:

// Not Null: The field cannot be left empty
// Unique: No two records can have the same value in this field
// Primary key: - Indicates this field is the primary key. Both the not null and unique constraints will be enforced.
// Default: - Sets a default value if none is provided.
// As with data types, any data that does not satisfy the schema constraints will be rejected from the database.


// Designing scheme within SQLite Studio:
// You can make a new database within sqlite studio (using the plus sign rather than navigating from an existing file)
// Add table button at the top
// Then add columns and specify the data type
// Don't need to click 'Not NULL' for primary key as that is taken care of.

// Click the green check which will gnerate SQL code "CREATE TABLE"
// Can go to the data tab to add data (plus button, then commit with tick)
// generally we will design our databases within our codebases from scratch rather than doing this.
