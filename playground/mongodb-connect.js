const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb'); // destructuring
// var obj = new ObjectID();
// console.log(obj);

// //-------- object destructuring in es6 ------------
// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name);
// //-------------------------------------------------

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server'); // da se ovo dole ne izvrsi, zbog toga return (umesto else)
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));// ovo ops da prikaze rezultat samo
  // });

  // db.collection('Users').insertOne({
  //   name: 'Darko Milicevic',
  //   age: 28,
  //   location: 'Nis'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   // console.log(result.ops[0]._id.getTimestamp()); // to see when object was created, from _id property
  // });

  db.close();
});