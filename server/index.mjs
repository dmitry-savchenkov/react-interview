import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Controllers
import productsController from './controllers/productsController.mjs';
import categoriesController from './controllers/categoriesController.mjs';

const port = 4441;
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Controller assignments
app.use('/products', productsController);
app.use('/categories', categoriesController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
