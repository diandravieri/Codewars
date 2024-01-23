function giveMeFive(obj){
    var resultArray = [];
  
    for (var key in obj) {
      if (key.length === 5) {
        resultArray.push(key);
      }
  
      if (obj[key].length === 5) {
        resultArray.push(obj[key]);
      }
    }
  
    return resultArray;
  }
  
console.log(giveMeFive({key1: "value1", key2: "value22", key3: "value333"}));