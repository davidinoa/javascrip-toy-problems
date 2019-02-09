// write code that takes a long string and builds its word cloud data in a map, where the key are words and the values are the number of times the words occurred.

class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    let currentWordStartIndex = 0;
    let currentWordLength = 0;

    for (let i = 0; i < inputString.length; i++) {
      const character = inputString.charAt(i);

      if (i === inputString.length - 1) {
        if (this.isLetter(character)) {
          currentWordLength++;
        }
        if (currentWordLength > 0) {
          const word = inputString.slice(
            currentWordStartIndex,
            currentWordStartIndex + currentWordLength,
          );
          this.addWordToMap(word);
        }
      } else if (character === ' ' || character === '\u2014') {
        if (currentWordLength > 0) {
          const word = inputString.slice(
            currentWordStartIndex,
            currentWordStartIndex + currentWordLength,
          );
          this.addWordToMap(word);
          currentWordLength = 0;
        }
      } else if (character === '.') {
        if (i < inputString.length - 1 && inputString.charAt(i + 1) === '.') {
          if (currentWordLength > 0) {
            const word = inputString.slice(
              currentWordStartIndex,
              currentWordStartIndex + currentWordLength,
            );
            this.addWordToMap(word);
            currentWordLength = 0;
          }
        }
      } else if (this.isLetter(character) || character === "'") {
        if (currentWordLength === 0) {
          currentWordStartIndex = i;
        }
        currentWordLength++;
      } else if (character === '-') {
        if (
          i > 0 &&
          this.isLetter(inputString.charAt(i - 1)) &&
          this.isLetter(inputString.charAt(i + 1))
        ) {
          if (currentWordLength === 0) {
            currentWordStartIndex = i;
          }
          currentWordLength += 1;
        } else {
          if (currentWordLength > 0) {
            const word = inputString.slice(
              currentWordStartIndex,
              currentWordStartIndex + currentWordLength,
            );
            this.addWordToMap(word);
            currentWordLength = 0;
          }
        }
      }
    }
  }
}
