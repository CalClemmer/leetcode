var scoreOfParentheses = function (s) {
  let ans = 0;
  let depth = 1;
  for (i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      depth *= 2;
    } else if (s[i] === ")") {
      if (s[i - 1] === ")") {
        depth /= 2;
      } else if (s[i - 1] === "(") {
        depth /= 2;
        ans += depth;
        console.log("ans", ans);
      }
    }
  }
  return ans;
};

// s = "(())(())";
s = "((()()()))";
console.log(scoreOfParentheses(s));

// () = 1
// (()) =  2
// ((())) = 4
// ((()())) = ((1 + 1)) = ((2)) = (4) = (8)
// ((()()())) = ((1 + 1 + 1)) = ((3)) = (6) = 12
// ((())()()) = ((1)()()) = (2()()) = (2+1+1) = (4) = 8
// ()()()() = 4

// n = 1, 2, 4), 4)

// value of a closed parenthesis depends solely on depth
