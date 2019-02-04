const swap = (index1, index2, array) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let swaps = 0;

    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swaps++;
        swap(j, j + 1, array);
      }
    }

    if (!swaps) {
      break;
    }
  }
  return array;
};
