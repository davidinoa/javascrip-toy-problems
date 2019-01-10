function canTwoMoviesFillFlight(movieLenghts, flightLength) {
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];
    const secondMovieLength = flightLength - firstMovieLength;

    if (movieLengthsSeen.has(secondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  return false;
}
