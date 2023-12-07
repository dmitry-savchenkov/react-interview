import { readFileSync } from 'node:fs';

import express from 'express';
const router = express.Router();

router.route('/').get((req, res) => {
  const products = JSON.parse(
    readFileSync(`${process.cwd()}/server/fixtures/products.json`, 'utf8'),
  );
  const search = req.query.search;

  if (!search) {
    res.send(products);
    return;
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  res.send(filteredProducts);
});

export default router;
