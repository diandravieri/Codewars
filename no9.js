function padIt(str, n) {
    let paddedString = str;
    let i = 1;
  
    while (i <= n) {
      if (i % 2 === 1) {
        paddedString = '*' + paddedString; 
      } else {
        paddedString = paddedString + '*'; 
      }
  
      i++;
    }
  
    return paddedString;
  }
  
  console.log(padIt("hello", 3)); 
  console.log(padIt("world", 4)); 
  