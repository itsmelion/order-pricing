#!/usr/bin/env node
// @ts-nocheck
const csvParser = require('csvtojson');

const vat = 23;
const getCatalog = csvParser({ noheader: true, output: "csv" }).fromFile(process.argv[2]);
const order = process.argv.slice(3).reduce((acc, arg, i) => {
  // Checks if argument is even, (Amount) so we can parse to a number.
  if ((i > 0) && (i & 1)) acc.push(parseInt(arg, 10));
  return acc;
}, []);

const itemPricing = (amount, catalog) => {
  let [item, stock, price] = catalog;
  stock = parseInt(stock, 10);
  price = Number(price);

  // If a product is out of stock
  if (amount > stock) {
    console.error(`Item ${item} is out of stock`);
    process.exit(1);
  }

  // Calculate the item price
  return Number(price) * amount;
};

(async () => {
  const catalog = await getCatalog;
  const total = order.reduce((acc, amount, index) => acc + itemPricing(amount, catalog[index]), 0)

  console.log(`Total: ${total + total * (vat / 100)}`);
  process.exit(0);
})();
