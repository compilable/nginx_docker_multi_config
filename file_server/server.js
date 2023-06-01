const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', async function (req, res) {
  const data = await getUserData()
  console.log(data);
  re.send(data)
});

async function getUserData() {
  try {
    const response = await axios.get("http://auth_server:5002/");
    console.log(response);
    return response.data
  } catch (error) {
    console.log(error);
  }
}

app.listen(5001, function () {
  console.log('file_server is listening on port 5001');
});