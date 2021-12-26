let testData = [3,4,3,1,2];
let data = [5,1,1,3,1,1,5,1,2,1,5,2,5,1,1,1,4,1,1,5,1,1,4,1,1,1,3,5,1,1,1,1,1,1,1,1,1,4,4,4,1,1,1,1,1,4,1,1,1,1,1,5,1,1,1,4,1,1,1,1,1,3,1,1,4,1,4,1,1,2,3,1,1,1,1,4,1,2,2,1,1,1,1,1,1,3,1,1,1,1,1,2,1,1,1,1,1,1,1,4,4,1,4,2,1,1,1,1,1,4,3,1,1,1,1,2,1,1,1,2,1,1,3,1,1,1,2,1,1,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3,1,1,1,1,1,1,2,1,1,2,3,1,2,1,1,4,1,1,5,3,1,1,1,2,4,1,1,2,4,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,4,3,1,2,1,2,1,5,1,2,1,1,5,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,3,1,1,5,1,1,1,1,5,1,4,1,1,1,4,1,3,4,1,4,1,1,1,1,1,1,1,1,1,3,5,1,3,1,1,1,1,4,1,5,3,1,1,1,1,1,5,1,1,1,2,2];
let days = 256;


let allFish = [];

class lanternfish {
    // By default, a new lanternfish has a timer of 8
    constructor(timer = 8) {
        this.timer = timer;
    }

    tick() {
        this.timer--;

        if (this.timer < 0) {
            // Reset the timer to 6 and spawn a baby fish
            this.timer = 6;
            allFish.push(new lanternfish());
        }
    }
}

let initializeFish = (data) => {
    data.forEach(function(timer) {
       allFish.push(new lanternfish(timer));
    });

    console.log('Initial fish:');
    console.log(allFish);
}


initializeFish(data);

for (let i= 1; i <= days; i++) {
    allFish.forEach(function(fish) {
       fish.tick();
    });

    // console.log('After ' + i + ' days:');
    // console.log(allFish);
    console.log('Total fish on day ' + i + ': ' + allFish.length);
}