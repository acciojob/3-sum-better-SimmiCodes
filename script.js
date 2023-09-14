function findClosestSum(nums, target) {
 nums.sort((a, b) => a - b);
 let closestSum = Infinity;

 for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum <= target) {
        left++;
      } else {
        right--;
      }
    }
 }

 return closestSum;
}

let nums = [1, 2, 3, 4, 5];
let target = 10;
console.log(findClosestSum(nums, target));