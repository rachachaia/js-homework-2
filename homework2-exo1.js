let idk1 = {prénom: "RACHA",age:18,passion:"sport"}
let idk2 = { age:18,passion: "sport"}
function IDK(idk1,idk2) {
  
    for (key in idk2) {
          
        // Check if idk1 and idk2 don't have the equal values of same key
        if (idk1[key] !== idk2[key]) {
            return false;
        }
    }
    return true
}

// Call the function
console.log(IDK(idk1,idk2))