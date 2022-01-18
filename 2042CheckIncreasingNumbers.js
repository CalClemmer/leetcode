var areNumbersAscending = function (s) {
  const tokens = s.split(" ");
  let num = -1;

  for (let i = 0; i < tokens.length; i++) {
    if (Number.isInteger(+tokens[i])) {
      if (+tokens[i] > num) {
        num = +tokens[i];
      } else {
        return false;
      }
    }
  }
  return true;
};

s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s";

console.log(areNumbersAscending(s));
