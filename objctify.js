function objectify(arr) {
    var result = { };
    for(i=0; i<arr.length; i++) {
        if(typeof(result[arr[i]]) == 'undefined') {
            result[arr[i]] = 1;
        }
        else {
            result[arr[i]]++;
        }
    }
    return result; 
}

function organize(obj) {
	var arrSorted = [];
	for(var key in obj) {
		arrSorted[arrSorted.length]= key;
		alert(key);
	}
	return arrSorted.sort(function(a, b){
    return obj[b]-obj[a];
  });
}

var arr = [5,5,4,5,3,6,6,7,2,2,2,2,2]
var result = objectify(arr);
organize(result);
