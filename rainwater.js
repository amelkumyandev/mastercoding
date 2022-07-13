const heights = [0,1,0,2,1,0,3,1,0,1,2];

const getTrappedRainwater = (heights) => {
    let totalWater = 0;
    for(let p = 0; p < heights.length; p++ ){
        let leftP = p;
        let rightP = p;
        let maxLeft = 0;
        let maxRight = 0;

        while(leftP >= 0){
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }

        while(rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }

        const currentWater =  Math.min(maxLeft, maxRight) - heights[p];
        if(currentWater >= 0) {
            totalWater += currentWater;
        }

    }

    return totalWater;
}


console.log(getTrappedRainwater(heights));