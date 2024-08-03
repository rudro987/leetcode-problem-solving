//? problem 1- Two Sum

function twoSum(nums, target){
    if(nums.length <= 1) return nums;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] + nums[i+1] === target){
            return [i, i+1]
        }
    }
    return undefined
}

console.log(twoSum([3,2,4], 6))

