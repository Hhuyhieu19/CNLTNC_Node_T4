const express = require('express');
const hello = express();
const PORT = 8000;

hello.get('/', (req, res) => {
  res.send('Hello, world');
});

hello.listen(PORT, () => {
  console.log(`Server chay tren http://127.0.0.1:${PORT} hoac http://localhost:${PORT}`);
});
