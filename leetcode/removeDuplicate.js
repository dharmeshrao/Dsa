var removeDuplicates = function(nums) {
    let map = new Map()
    for(let i = 0;i< nums.length;i++){
        if(!map.has(nums[i]))map.set(nums[i],i)
    }
    nums.length = 0;
    map.forEach((e,k)=>nums.push(k))
    console.log(nums);
};

let arr = [0,0,1,1,1,2,2,3,3,4]
removeDuplicates(arr)