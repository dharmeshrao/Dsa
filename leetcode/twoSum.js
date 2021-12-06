var twoSum = function (numbers, target) {
  let i = 0;
  let res = [],
    j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] == target) {
      (res[0] = i + 1), (res[1] = j + 1);
      return res;
    }
    if (numbers[i] + numbers[j] < target) i++;
    if (numbers[i] + numbers[j] > target) j--;
  }
  return -1;
};

console.log(twoSum([2,7,11,15], 9));
