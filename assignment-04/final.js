                //  problem-01

function totalFine(fare) {
          // You have to write your code here
       if(typeof fare !== "number" || fare <= 0){
        return "Invalid";
       } 
       return fare + fare*(20/100)+ 30;
}

                //  problem-02

function  onlyCharacter(str) {
          // You have to write your code here
        if (typeof str !== "string") {
        return "Invalid";
    }
    return str.split(" ").join("").toUpperCase();
}

                  //  problem-03

function  bestTeam(player1, player2) {
          // You have to write your code here
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }

    let p1 = player1.foul + player1.cardY + player1.cardR;
    let p2 = player2.foul + player2.cardY + player2.cardR;

    if (p1 < p2) {
        return player1.name;
    } 
    if (p2 < p1) {
        return player2.name;
    }
    return "Tie";
}

                  //  problem-04

function  isSame(arr1 , arr2) {
          // You have to write your code here
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

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

                  //  problem-05

function  resultReport(marks) {
          // You have to write your code here
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    
 if (marks.length === 0){
     return {finalScore: 0, pass: 0, fail: 0 };
 }

  let total = 0;
  let pass = 0;
  let fail = 0;

    for (let m of marks) {
        total += m;
        if (m >= 40) pass++;
        else fail++;
    }

    return {
        finalScore: Math.round(total / marks.length),
        pass: pass,
        fail: fail
    };

}







