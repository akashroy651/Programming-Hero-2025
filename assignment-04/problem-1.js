function totalFine( fare ) {
          // You have to write your code here
       if(typeof fare !== "number" || fare <= 0){
        return "Invalid";
       } 
       return fare + fare*(20/100)+ 30;
}
console.log(totalFine(200));
