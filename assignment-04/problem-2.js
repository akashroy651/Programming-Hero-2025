function  onlyCharacter( str ) {
          // You have to write your code here
        if (typeof str !== "string") {
        return "Invalid";
    }
    return str.split(" ").join("").toUpperCase();
}
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  ")); 
