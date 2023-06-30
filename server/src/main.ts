import express from 'express';

const app = express();

app.get('/', (req,res) => {
  console.log(req);
  res.send('hello world');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
