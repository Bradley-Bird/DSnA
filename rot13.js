function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const cipher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

  const rot = message.replace(
    /[a-z]/gi,
    (letter) => cipher[alphabet.indexOf(letter)]
  );
  console.log(rot);
  return rot;
}

rot13('message');
