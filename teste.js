let numbers = [0,3,2,1,20,10,30]

numbers.sort(function(a,b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(numbers)