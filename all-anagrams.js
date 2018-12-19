const allAnagrams = (string) => {
  const uniqueOutput = {};

  const anagram = (ana, str) => {
    if (str === '') {
      uniqueOutput[ana] = 1;
    }

    for (let i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  };

  anagram('', string);

  return Object.keys(uniqueOutput);
};
