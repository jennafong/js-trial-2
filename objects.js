"use strict";


// 1. countWords
function countWords(phrase) {
  const wordCounts = {};

  for (const word of phrase.split(' ')) {
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else {
        wordCounts[word] = 1;
    }

  }
  return wordCounts
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
   const melon_prices = {
      2.50: ['Cantaloupe', 'Honeydew'],
      2.95: ['Watermelon'],
      3.25: ['Musk', 'Crenshaw'],
      14.25: ['Christmas']
  };

  if(!(price in melon_prices)){
    return;
  } else {
    return (melon_prices[price]).sort();
  }

}
