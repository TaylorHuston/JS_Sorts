//Classic sorting algorithms, implemented in JS


//Sorting Algorithms
var selection = function(toSort) {
    for (var i = 0; i < toSort.length; i++) {
        var min = i;
        for (var j = i+1; j <toSort.length; j++) {
            if (toSort[j] < toSort[min]) {
                min = j;
            }
        }
        swap(toSort, i, min);
    }
}


//Helper functions
var swap = function(toSort, x, y) {
    var temp = toSort[x];
    toSort[x] = toSort[y];
    toSort[y] = temp;
}


var masterArray = new Array();
for (var i = 0; i < 20; i++) {
    masterArray.push(Math.floor(Math.random()*100) + 1);
}

toSort = masterArray.slice(0);

console.log(masterArray);

selection(toSort);

console.log(toSort);