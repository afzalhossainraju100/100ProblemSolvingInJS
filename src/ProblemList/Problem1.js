//Problem 1 — Two Sum
//Return indices of two numbers that add up to target.
function twoSum(nums, target){
    const map = new Map();

    for(let i=0; i < nums.length; i++){
        const needed = target - nums[i];
        
        if(map.has(needed)){
            return [map.get(needed), i];

        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2,11,7,15],9));