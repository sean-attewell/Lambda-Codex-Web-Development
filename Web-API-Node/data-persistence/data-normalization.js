// Normalization is the process of designing or refactoring database tables for maximum consistency and minimum redundancy.

// With objects, we're used to denormalized data, stored with ease of use and speed in mind. 
// Non-normalized tables are considered ineffective in relational databases.


// Normalization Guidelines

// Each record has a primary key
// No fields are repeated
// All fields relate directly to the key data
// Each field entry contains a single data point
// There are no redundant entries


// When these issues begin arising in your schema design, it means that you should separate information into two or more tables.

// Denormalized Data
// farm_name	    animal1 	animal2	  animal3
// Beech Ranch	  pigs	    chickens	goats
// Morton Farms	horses	  chickens	cows


// This table has two issues. 
// There is no proper id field (as multiple farms may have the same name) 
// and multiple fields are representing the same type of data: animals.

// farm_id	farm_name	    animals
// 1	      Beech Ranch	  pigs, chickens, goats
// 2	      Morton Farms	horses, chickens, cows

// While we have now eliminated the first two issues, we now have multiple entries in one field, separated by commas. 
// This isn't good either, as it's another example of denormalization. 
// There is no "array" data type in a relational database, so each field must contain only one data point.

// animal_id	  animal	  farm_name	    ann_revenue
// 1	          pig	      Beech Ranch	  65000
// 2	          chicken	  Beech Ranch	  65000
// 3	          goat	    Beech Ranch	  65000

// Now we've solved the multiple fields issue, but we created repeating data (the farm field), which is also an example of denormalization. 
// We can also see that if we were tracking additional ranch information (such as annual revenue), that field is only vaguely related to the animal information.

// When these issues begin arising in your schema design, it means that you should separate information into two or more tables.

// Anomalies
// Obeying the above guidelines prevent anomalies in your database when inserting, updating, or deleting. 
// For example, imagine if the revenue of Beech Ranch changed. 
// With our denormalized schema, it may get updated in some records but not others

// Similarly, if Beech Ranch shut down, there would be three (if not more) records that needed to be deleted to remove a single farm.

// Thus a denormalized table opens the door for contradictory, confusing, and unusable data.

// Again, when these issues begin arising in your schema design, it means that you should separate information into two or more tables.



// Table Relationships

// One to one:
// Each farm has one revenue, each rev
// Can use a foreign key in either one of the tables
// A good rule of thumb is to put the foreign key in whichever table is more auxiliary to the other.
// But needs the restraint of 'unique' to make sure it is really one to one
// You can represent one-to-one data in a single table without creating anomalies. 
// However, it is sometimes prudent to use two tables as shown above to keep separate concerns in separate tables


// One to Many relationship: 
// One user can have many posts. But one post is by one user.
// The forgeign key will always go in the many table
// Otherwise you'd have a list of the 'many' in the 'one' table
// In a one to many relationship, the foreign key (in this case farm_id) should not be unique.

// Many to many:
// a book can have more than one author, and an author can write more than one book.
// require a third intermediary table to link them for this reason.
// It will hold foreign keys that reference the primary key on each of the related tables to model this relationship
// While each foreign key on the intermediary table is not unique, the combinations of keys should be unique


