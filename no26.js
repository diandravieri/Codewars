function isolateIt(arr){
    var array = arr.map(function(item){
      var itemLength = item.length;
    
      if(itemLength % 2 === 0) {
       return item.slice(0,itemLength/2) + "|" + item.slice(itemLength/2);
      } else {
        return item.slice(0,itemLength/2) + "|" + item.slice(itemLength/2 +1);
      } 
  
    });
    return array;
  }