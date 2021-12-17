const todos = require('../data/todos.json');

const getTodos = () => {
  return todos;
};

module.exports = {
  getTodos,

};