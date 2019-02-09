const binarySearch = function(array, target) {
  const sub = function(low, high) {
    if (high === low) {
      return null;
    }

    const mid = Math.floor((high - low) / 2) + low;

    if (array[mid] === target) {
      return mid;
    } else if (low === high - 1) {
      return null;
    } else if (array[mid] > target) {
      return sub(low, mid);
    } else {
      return sub(mid, high);
    }

    return sub(0, array.length);
  };
};
