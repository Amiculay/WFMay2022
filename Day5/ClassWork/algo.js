var arr = [5, 4, 3, 2, 1];

 for (var first = 0, last = arr.length-1; first < last;first++, last--) {
  var temp = arr[first];
  arr[first] = arr[last];
  arr[last] = temp;
}

console.log(arr);