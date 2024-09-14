/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'mpadmin'

// The current database to use.
use(database)

// Create a new collection.
db.createCollection('counters')
db.counters.insertOne({
  _id: 'resourceid',
  seq: 649
})
