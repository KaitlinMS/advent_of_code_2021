let testData = [3,4,3,1,2];
let data = [5,1,1,3,1,1,5,1,2,1,5,2,5,1,1,1,4,1,1,5,1,1,4,1,1,1,3,5,1,1,1,1,1,1,1,1,1,4,4,4,1,1,1,1,1,4,1,1,1,1,1,5,1,1,1,4,1,1,1,1,1,3,1,1,4,1,4,1,1,2,3,1,1,1,1,4,1,2,2,1,1,1,1,1,1,3,1,1,1,1,1,2,1,1,1,1,1,1,1,4,4,1,4,2,1,1,1,1,1,4,3,1,1,1,1,2,1,1,1,2,1,1,3,1,1,1,2,1,1,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3,1,1,1,1,1,1,2,1,1,2,3,1,2,1,1,4,1,1,5,3,1,1,1,2,4,1,1,2,4,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,4,3,1,2,1,2,1,5,1,2,1,1,5,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,3,1,1,5,1,1,1,1,5,1,4,1,1,1,4,1,3,4,1,4,1,1,1,1,1,1,1,1,1,3,5,1,3,1,1,1,1,4,1,5,3,1,1,1,1,1,5,1,1,1,2,2];
let days = 18;


// let allFish = [];
// {'fishID', timer}
let allFish = new Map;
let id = 1;
let newFish = [];

// class lanternfish {
//     // By default, a new lanternfish has a timer of 8
//     constructor(timer = 8) {
//         this.timer = timer;
//     }
//
//     tick() {
//         this.timer--;
//
//         if (this.timer < 0) {
//             // Reset the timer to 6 and spawn a baby fish
//             this.timer = 6;
//             allFish.push(new lanternfish());
//         }
//     }
// }

let createNewFish = (timer) => {
    allFish.set('fish' + id, timer);
    id++;
}

let initializeFish = (data) => {
    data.forEach(function(timer) {
        // allFish.push(new lanternfish(timer));
        createNewFish(timer);
    });

    console.log('Initial fish:');
    console.log(allFish);
}

let tickFishTimer = (value, key) => {
    let newTimer = value - 1;

    if (newTimer < 0) {
        newTimer = 6;
        createNewFish(8);
    }

    allFish.set(key, newTimer);
}


initializeFish(testData);

for (let i= 1; i <= days; i++) {
    allFish.forEach(function(value, key) {
       tickFishTimer(value, key);
    });

    // console.log('After ' + i + ' days:');
    // console.log(allFish);
    console.log('Total fish on day ' + i + ': ' + allFish.size);
}