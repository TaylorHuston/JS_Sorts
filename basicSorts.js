//Basic Sorting Algorithms
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

var insertion = function(toSort) {
    for (var i = 0; i < toSort.length; i++) {
        for (j = i; j > 0; j--) {
            if (toSort[j] < toSort[j-1]) {
                swap(toSort, j, j-1);
            } else {
                break;
            }
        }
    }
}
