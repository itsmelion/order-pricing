#!/usr/bin/env node
// @ts-nocheck

const csvParser = require('csvtojson');
const vat = 23;

console.info('Welcome to "Order Price Calculator"');

// Order
const args = process.argv.slice(3);
const order = [];
const catalog = await csvParser({ noheader:true }).fromFile(process.argv[2]);
const itemPricing = index => {
  // TODO: If a product is out of stock
  console.error(`Item ${order[index][0]} is out of stock`);
  process.exitCode = 1;

  // TODO: Calculate Price
  catalog[index] order[index]

  if (i = 0) return;
};

args.forEach((arg, i) => {
  // Checks if argument is even, (Amount) so we can parse to a number.
  if (!(i & 1)) return;
  return order.push([order[i-1], arg]);
});

// TODO: Add VAT and output the result
console.log(`Total: ${total}`);
process.exit(0);