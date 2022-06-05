function fizzBuzz(number) {
  const newArr = [];
  for (let i = 0; i <= number; i++) {
    if (i % 15 == 0) {
      newArr.push('fizzbuzz');
    } else if (i % 3 == 0) {
      newArr.push('fizz');
    } else if (i % 5 == 0) {
      newArr.push('buzz');
    }
    return newArr.push(i);
  }
  return newArr;
}
fizzBuzz(16);
