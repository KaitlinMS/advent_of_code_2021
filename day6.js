let testData = [3,4,3,1,2];
let data = [5,1,1,3,1,1,5,1,2,1,5,2,5,1,1,1,4,1,1,5,1,1,4,1,1,1,3,5,1,1,1,1,1,1,1,1,1,4,4,4,1,1,1,1,1,4,1,1,1,1,1,5,1,1,1,4,1,1,1,1,1,3,1,1,4,1,4,1,1,2,3,1,1,1,1,4,1,2,2,1,1,1,1,1,1,3,1,1,1,1,1,2,1,1,1,1,1,1,1,4,4,1,4,2,1,1,1,1,1,4,3,1,1,1,1,2,1,1,1,2,1,1,3,1,1,1,2,1,1,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3,1,1,1,1,1,1,2,1,1,2,3,1,2,1,1,4,1,1,5,3,1,1,1,2,4,1,1,2,4,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,4,3,1,2,1,2,1,5,1,2,1,1,5,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,3,1,1,5,1,1,1,1,5,1,4,1,1,1,4,1,3,4,1,4,1,1,1,1,1,1,1,1,1,3,5,1,3,1,1,1,1,4,1,5,3,1,1,1,1,1,5,1,1,1,2,2];
let days = 256;

// {timer: number of fish}
let allFish = new Map;

let initializeFish = (data) => {
    allFish.set(8, 0).set(7, 0).set(6, 0).set(5, 0).set(4, 0).set(3, 0).set(2, 0).set(1, 0).set(0, 0);

    data.forEach(function(timer) {
        allFish.set(timer, allFish.get(timer) + 1);
    });

    console.log('Initial fish:');
    console.log(allFish);
}

let tickFishTimer = () => {
    let newFishTotal = allFish.get(0);

    allFish.set(0, allFish.get(1));
    allFish.set(1, allFish.get(2));
    allFish.set(2, allFish.get(3));
    allFish.set(3, allFish.get(4));
    allFish.set(4, allFish.get(5));
    allFish.set(5, allFish.get(6));
    allFish.set(6, allFish.get(7) + newFishTotal);
    allFish.set(7, allFish.get(8));
    allFish.set(8, newFishTotal);
}

let totalFish = () => {
    return allFish.get(8) + allFish.get(7) + allFish.get(6) + allFish.get(5) + allFish.get(4) + allFish.get(3) + allFish.get(2) + allFish.get(1) + allFish.get(0);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

initializeFish(data);

// Run through all the days
for (let i= 1; i <= days; i++) {
    tickFishTimer();

    console.log('Total fish on day ' + i + ': ' + totalFish());
}