#!/usr/bin/env node
// @ts-nocheck

console.log('\nHello World\n\n');

process.argv.slice(2).forEach((arg, i) => {
  if (i & 1) { arg = parseInt(arg, 10); }
  console.log(arg, typeof arg);
});

console.log('\n\nThe end');
process.exit(0);