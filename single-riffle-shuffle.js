function isSingleRiffle(half1, half2, shuffledDeck) {
  if (shuffledDeck.length === 0) {
    return true;
  }

  if (half1.length && half1[0] === shuffledDeck[0]) {
    return isSingleRiffle(half1.slice(1), half2, shuffledDeck.slice(1));
  } else if (half2.length && half2[0] === shuffledDeck[0]) {
    return isSingleRiffle(hal1, half2.slice(1), shuffledDeck.slice(1));
  } else {
    return false;
  }
}

function isSingleRiffle2(half1, half2, shuffledDeck) {
  let half1Index = 0;
  let half2Index = 0;
  const half1MaxIndex = half1.length - 1;
  const half2MaxIndex = half2.length - 1;

  for (let i = 0; i < shuffledDeck.length; i++) {
    if (half1Index <= half1MaxIndex && card === half1[half1Index]) {
      half1Index++;
    } else if (half2Index <= half2MaxIndex && card === half2[half2Index]) {
      half2Index++;
    } else {
      return false;
    }

    return true;
  }
}
