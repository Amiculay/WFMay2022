var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (let i of numbers) {
    if (i > 0) {
        countPositives++;
    }
}
    
console.log("there are " + countPositives + " positive values");