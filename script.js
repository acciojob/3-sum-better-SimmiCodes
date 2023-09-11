function threeSumClosest(S, target) {
  S.sort((a, b) => a - b);

  let closestSum = Infinity;
  let closestDiff = Infinity;

  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const sum = S[i] + S[left] + S[right];
      const diff = Math.abs(target - sum);

      if (diff < closestDiff) {
        closestSum = sum;
        closestDiff = diff;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}