var isEvenOddTree = function (root) {
  const queue = [];
  queue.push(root);
  let odd = true;
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      if (
        (odd &&
          (!(cur.val % 2) || (i !== length - 1 && cur.val >= queue[0].val))) ||
        (!odd && (cur.val % 2 || (i !== length - 1 && cur.val <= queue[0].val)))
      )
        return false;
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }

    odd = !odd;
  }
  return true;
};
