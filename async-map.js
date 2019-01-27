const asyncMap = (tasks, callback) => {
  const resultsArray = [];
  let resultsCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    ((i) => {
      tasks[i]((val) => {
        resultsArrays[i] = val;
        resultsCount++;
        if (resultsCount === tasks.length) {
          callback(resultsArray);
        }
      });
    })(i);
  }
};
