function  bestTeam( player1, player2 ) {
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

console.log(bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }




));
// Invalid