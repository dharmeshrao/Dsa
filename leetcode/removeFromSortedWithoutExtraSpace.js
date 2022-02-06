let array = [1, 1, 1, 2, 2, 3];

var removeDuplicates = function (nums) {
  let left = 0,
    right = 0;

  while (left < nums.length) {
    if (nums[left] !== nums[left + 2]) {
      nums[right] = nums[left];
      right++;
    }
    left++;
  }
  return right;
};

console.log(removeDuplicates(array));
