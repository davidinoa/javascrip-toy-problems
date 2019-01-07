// write an efficient function that takes stocksPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('At least 2 prices required');
  }

  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 0; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}
