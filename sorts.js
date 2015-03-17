//Helper functions
var swap = function(toSort, x, y) {
    var temp = toSort[x];
    toSort[x] = toSort[y];
    toSort[y] = temp;
}


//Entry point
var masterArray = new Array();
for (var i = 0; i < 100; i++) {
    masterArray.push(Math.floor(Math.random()*100000) + 1);
}

console.log(masterArray);

var toSort = masterArray.slice(0);
selection (toSort);
console.log("After selection " + toSort);

toSort = masterArray.slice(0);
insertion (toSort);
console.log("After insertion " + toSort);

toSort = masterArray.slice(0);
shell(toSort);
console.log("After shell " + toSort);

toSort = masterArray.slice(0);
mergeSort (toSort);
console.log("After merge  " + toSort);

toSort = masterArray.slice(0);
quickSort (toSort);
console.log("After quick  " + toSort);

toSort = masterArray.slice(0);
threeWayQuick (toSort);
console.log("After 3-way quick  " + toSort);
