# Calculate the price of an order
The total amount to be paid for a list of products

## Installation
Simply navigate to the project folder and install it `npm install -g --only=production`
or `npm link`.

OPTIONAL: you can also build and start docker container and log into its shell, and proceed to the usage normally.

## Usage
Provide a CSV file with the following lines:
```
<ProductID>,<Stock>,<Price>
```

### Command line interface
The program must run from the command line with the following arguments
```
CalculateOrder <path_to_catalog> <product1> <quantity1> <product2> <quantity2> ...
```

## Example
Given the input `Catalog.txt` file
```
P4,10,250.00
P10,5,175.00
P12,5,1000.00
```

```
$ CalculateOrder Catalog.txt P4 6 P10 5 P12 1
Total: 4151,25
```