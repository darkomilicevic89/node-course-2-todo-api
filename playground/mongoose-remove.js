const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAnRemove

// Todo.findOneAndRemove({_id: '59a7a9f78d94ce0430ca1444'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('59a7a9f78d94ce0430ca1444').then((todo) => {
  console.log(todo);
});