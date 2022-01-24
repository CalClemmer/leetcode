// this works in all normal cases... but not optimal enough
// changing array length is an expensive computation
var getWinnerOld = function (arr, k) {
  let win = 0;
  let i = 0;
  if (k > arr.length) {
    return Math.max(...arr);
  }
  while (true) {
    i++;
    // if first element wins
    if (arr[0] >= arr[1]) {
      win++;
      //swap second element out to end
      let _loser = arr.splice(1, 1);
      arr.push(_loser);
    } else {
      win = 1;
      //swap first element out to end
      let _loser = arr.splice(0, 1);
      arr.push(_loser);
    }
    // game won
    if (win >= k) {
      return arr[0];
    }
  }
};

var getWinner = function (arr, k) {
  let wins = 0;
  let champIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    // if we reach k break out of loop
    if (wins === k) {
      break;
    }

    // if champ is larger, wins++
    if (arr[champIndex] > arr[i]) {
      wins++;

      // if champ smaller, new champ + reset wins
    } else {
      champIndex = i;
      wins = 1;
    }
  }
  return arr[champIndex];
};

// example
var getWinnerExample = function (arr, k) {
  let curr = arr[0],
    counter = 0;

  for (let i = 1; i < arr.length; i++) {
    if (curr > arr[i]) counter++;
    else {
      curr = arr[i];
      counter = 1;
    }
    if (counter === k) {
      return curr;
    }
  }
  return Math.max(...arr);
};

let test = [1, 11, 22, 33, 44, 55, 66, 77, 88, 99];
console.log(getWinner(test, 10000));
