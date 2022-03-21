function difference(idk1, idk2) {
    var common = [];
    for (var R = 0; R < idk1.length; R++) {
      for (var C = 0; C < idk2.length; C++) {
        if (idk1[R] == idk2[C]) { 
          common.push(idk1[R]); 
        }
      }
    }
    return common; // Return common 
  }
  var idk1 = [1, 2, 3];
  var idk2 = [100, 2, 1, 10];
  var common= difference(idk1, idk2); 
  console.log(common); // Output: 1 et 2