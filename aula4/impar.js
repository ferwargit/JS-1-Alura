function addOdds(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if(i%2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(addOdds(5));
console.log(addOdds(7));