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

console.log(resultReport([99, 87, 67, 12 ,87]));

