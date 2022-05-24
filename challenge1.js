const gold = 'alchemy rocks gold';
const split = gold.split(' ');
console.log(split);

const newSplit = split.map((word) => word.split(''));
console.log(newSplit);

const firstReverse = newSplit.map((word) => word.reverse());
console.log(firstReverse);

const next = firstReverse.map((word) => word.join(''));
console.log(next);

const final = next.join(' ');
console.log(final);
