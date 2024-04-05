const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(' CRUD app!'); // Assuming you want to send this response
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
