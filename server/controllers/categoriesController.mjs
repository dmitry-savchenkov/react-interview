import { readFileSync } from 'node:fs';
import express from 'express';

const router = express.Router();

router.route('/').get(async (req, res) => {
  const products = JSON.parse(
    readFileSync(`${process.cwd()}/server/fixtures/categories.json`, 'utf8'),
  );

  await new Promise((res) => setTimeout(res, 15000));

  res.send(products);
});

export default router;
