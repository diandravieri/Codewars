function maxMin(arr1, arr2) {
    var difference = arr1.map((v, i) => Math.abs(v - arr2[i]));
    return [Math.max(...difference), Math.min(...difference)]
  }