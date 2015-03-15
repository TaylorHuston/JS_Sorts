//Helper functions
var swap = function(toSort, x, y) {
    var temp = toSort[x];
    toSort[x] = toSort[y];
    toSort[y] = temp;
}


//Entry point
var masterArray = new Array();
for (var i = 0; i < 20; i++) {
    masterArray.push(Math.floor(Math.random()*100) + 1);
}

console.log(masterArray);

var toSort = masterArray.slice(0);
console.log(toSort);
selection(toSort);
console.log("After selection " + toSort);

toSort = masterArray.slice(0);
console.log(toSort);
insertion(toSort);
console.log("After insertion " + toSort);

toSort = masterArray.slice(0);
console.log(toSort);
shell(toSort);
console.log("After shell " + toSort);
