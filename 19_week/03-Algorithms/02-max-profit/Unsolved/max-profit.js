// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock.

// TODO: Complete the function below:

var maxProfit = function (prices) {
  let minPrice = 100000; 
  let minIndex = 0;
  let maxPrice = 0;
  let maxIndex = 0;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {

    // find smallest value in the array
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      minIndex = i;
    }

    // find the largest value in the array && min value is before max value
    if (prices[i] > maxPrice && minIndex < i) {
      maxPrice = prices[i];
    }
  }
  // find the difference b/ the largest and smallest; if maxPrice less minPrice is less than 0 then profit = 0;
  maxPrice - minPrice < 0 ? profit : profit = maxPrice - minPrice;
  console.log({ prices, minPrice, maxPrice, profit })

  return profit;
};

maxProfit( [ 1, 6, 7, 9 ]);
maxProfit( [ 7, 1, 5, 3, 6, 4 ]);
maxProfit( [ 1, 6, 7, 9 ]);
maxProfit( [ 9, 7, 4, 1 ]);
maxProfit( [ 7, 2, 8, 9 ]);
