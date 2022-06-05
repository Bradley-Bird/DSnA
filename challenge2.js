function oddishOrEvenish(number) {
  const split = number
    .toString()
    .split('')
    .map((n) => {
      return Number(n);
    });

  const sum = split.reduce((total, n) => {
    total += Number(n);
    return total;
  }, 0);
  //   const sum = eval(split.join('+'));

  const final = sum % 2 ? 'Oddish' : 'Evenish';
  final;
  return final;
}

oddishOrEvenish(120);
