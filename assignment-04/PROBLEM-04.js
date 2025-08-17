function  isSame(arr1 , arr2 ) {
          // You have to write your code here
          if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    // length সমান না হলে
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(isSame([1, undefined , 3] , [1,null ,3])); 

