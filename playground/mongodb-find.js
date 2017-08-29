// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server'); // da se ovo dole ne izvrsi, zbog toga return (umesto else)
  }
  console.log('Connected to MongoDB server');

  // toArray() because find() just returns pointers to that objects, then() because it return promise
  // db.collection('Todos').find({
  //   // ne moze samo _id: 59a52dbfd06854254075b45e, jer nije string nego ObjectID
  //   _id: new ObjectID('59a52dbfd06854254075b45e')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.close();
});