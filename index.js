// Code your solution in this file!
function distanceFromHqInBlocks(blockB){
    const blockA =42;
    return Math.abs(blockB -blockA);
}

function distanceFromHqInFeet(blockB){
    const distance = distanceFromHqInBlocks(blockB);
    const interval=264;
    return interval * distance;

}

function distanceTravelledInFeet(startingBlock ,endingBlock){
    let distanceCovered =  Math.abs(endingBlock - startingBlock);
    let interval= 264;
    return (distanceCovered* interval)
}

function calculatesFarePrice(startBlock , endBlock){
    let distancetobecovered = distanceTravelledInFeet(startBlock, endBlock)
    if(distancetobecovered <= 400){
        return 0;
    }else if(distancetobecovered >400 && distancetobecovered <2000){
        return (0.02*(distancetobecovered-400))
    }else if(distancetobecovered >2000 && distancetobecovered <2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}