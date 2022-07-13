const numsArray = [1,20,50,4,5,6,7,8,9,2];

const targetToFind = 11;
/*
const findTwoSum = function(nums, targetToFind){
    for(let p1 = 0; p1 < nums.length; p1++) {
        const numberToFind  = targetToFind - nums[p1]; 
        for(let p2 = p1 + 1; p2 < nums.length; p2++){
            if(numberToFind === nums[p2]){
                return [p1, p2];
            }
        }
    }

    return null;
}

*/

const findTwoSum = function(nums, targetToFind){
    const numsMap = {};
    for(let i = 0; i < nums.length; i++) {
        const currentMapVal = numsMap[nums[i]];
        if(currentMapVal >= 0) {
            return [currentMapVal, i];
        } else{
            const numberToFind = targetToFind - nums[i];
            numsMap[numberToFind] = i;
        }
    }

    return null;
}


console.log(findTwoSum(numsArray, targetToFind));