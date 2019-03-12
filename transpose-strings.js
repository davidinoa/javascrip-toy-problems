const transposeStrings = (string1, string2) => {
    const characters1 = string1.split('');
    const characters2 = string2.split('');
    const longestLength = Math.max(characters1.length, characters2.length);
    let output = '';

    for (let i = 0; i < longestLength; i++) {
        const character1 = characters1[i] || ' ';
        const character2 = characters2[i] || ' ';

        output += `${character1} ${character2}\n`;
    }

    return output;
};

const test = transposeStrings('inoa', 'llenas');
console.log(test);
