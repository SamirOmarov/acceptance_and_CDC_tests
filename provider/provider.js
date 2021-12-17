const Joi = require('joi');
const express = require('express');
const { getTodos } = require('./actions');

const app = express();
app.use(express.json());

const todos = getTodos();

app.get('/todos', (req, res) => {
  res.send(todos);
});



app.post('/todos', (req, res) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
  });

  const result = Joi.validate(req.body, schema);
  const todo = {
    title: req.body.title,
  };

  if (result.error) res.status(404).send(result.error.details[0]);
});

module.exports = app;