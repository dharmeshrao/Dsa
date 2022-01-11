var removeElement = function(nums, val) {
for(let i = 0;i< nums.length;i++){
    for(let j = 0;j< nums.length-i-1; j++){
        if(nums[j] === val){
            [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
        }
    }
}
for(let i = nums.length-1; i >= 0; i--)if(nums[i] === val)nums.pop()
return nums
};


let nums = [3,2,2,3], val = 3
removeElement(nums,val)