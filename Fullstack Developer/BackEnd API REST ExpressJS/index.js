const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/new-endpoint', (req, res) => {
  res.send('new endpoint!');
});

app.get('/products', (req, res) => {
  res.json({
    name : 'nicolas',
    lastname : 'martinez'
  });
});

app.get('/products/:id', (req, res) => {
  const reqId  = req.params.id;
  // const { id } = req.params; una forma de destructurar todo del request para solo sacar el id
  res.json({
    id : reqId
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
   const { categoryId,productId  } = req.params;
  res.json({
    category : categoryId,
    product : productId
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
