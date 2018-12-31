// write an efficient function that checks whether any permutation of an input string is a palindrome

function hasPalindromePermutation(theString) {
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  return unpairedCharacters.size <= 1;
}
