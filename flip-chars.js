function flipEveryNChars(string, n) {
    const output = [];
    const characters = string.split('');

    for (let i = 0; i < characters.length; i += n) {
        const flippedCharacters = characters.slice(i, i + n).reverse();
        output.concat(flippedCharacters);
    }

    return output.join('');
}
