const axios = require('axios');

const fetchTodos = async (URL, PORT) => {
  const res = await axios.get(`${URL}:${PORT}/todos`);
  return res.data;
};


const addNewTodo = (URL, PORT, todoName, ) => {
  const data = {
    title: todoName,
  };

  axios
    .post(`${URL}:${PORT}/todos`, data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.response.data.message));
};

module.exports = {
  fetchTodos,
  addNewTodo,
};
