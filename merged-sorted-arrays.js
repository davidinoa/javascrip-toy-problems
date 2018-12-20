function mergeArrays(array1, array2) {
  const mergedArray = [];

  let currentIndex1 = 0;
  let currentIndex2 = 0;

  while (mergedArray.length < array1.length + array2.length) {
    const unmerged1 = array1[currentIndex1];
    const unmerged2 = array2[currentIndex2];
    const Array1Done = currentIndex1 >= array1.length;
    const Array2Done = currentIndex2 >= array2.length;

    if (!Array1Done && (Array2Done || unmerged1 < unmerged2)) {
      mergedArray.push(unmerged1);
      currentIndex1++;
    } else {
      mergedArray.push(unmerged2);
      currentIndex2++;
    }
  }

  return mergedArray;
}
