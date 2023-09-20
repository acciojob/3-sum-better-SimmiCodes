function threeSum(nums, target) {
    console.log(`Input: ${nums}, Target: ${target}`);
    nums.sort((a, b) => a - b);
    console.log(`Sorted array: ${nums}`);
    let result = nums[0] + nums[1] + nums[2];
    console.log(`Initial result: ${result}`);
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            console.log(`i: ${i}, j: ${j}, k: ${k}, sum: ${sum}, result: ${result}`);
            if (Math.abs(target - sum) < Math.abs(target - result)) {
                result = sum;
            }
            if (sum <= target) {
                j++;
            } else {
                k--;
            }
        }
    }
    console.log(`Final result: ${result}`);
    return result;
}