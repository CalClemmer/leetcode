var numberOfSubstrings = function (s) {
  const searchArr = [];
  const firstArr = [];
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (!searchArr.includes(s[i])) {
      searchArr.push(s[i]);
    }
    if (searchArr.length === 3) {
      ans += s.length - i;
      searchArr.shift();
    }
  }

  // i need to find the first necessary letter

  for (let i = 0; i < s.length; i++) {}

  return ans;
};

let s = "aaacb";
console.log(numberOfSubstrings(s));

/*
we go through. Once we find an a, b, and c, we can
add a number to total based on position of c
that number is length - c index 
Then we remove first entered in and continue 

Implement queue, first it needs to find one of each
then add to total once all found 
then remove first in, and look for that again 
*/
