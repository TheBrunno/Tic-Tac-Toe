function acrecentar(pos, gamer_number){
    if(gamer_number == 1){
        gamer_one["jogadas"].push(pos)
        return gamer_one
    }else{
        gamer_two["jogadas"].push(pos)
        return gamer_two
    }
}
function verific(gamer){
    if((gamer["jogadas"].indexOf(1) > -1 &&
       gamer["jogadas"].indexOf(4) > -1 &&
       gamer["jogadas"].indexOf(7) > -1 || 
       gamer["jogadas"].indexOf(2) > -1 && 
       gamer["jogadas"].indexOf(5) > -1 && 
       gamer["jogadas"].indexOf(8) > -1 ||
       gamer["jogadas"].indexOf(3) > -1 && 
       gamer["jogadas"].indexOf(6) > -1 && 
       gamer["jogadas"].indexOf(9) > -1 ) ||
       (gamer["jogadas"].indexOf(1) > -1 &&
       gamer["jogadas"].indexOf(2) > -1 &&
       gamer["jogadas"].indexOf(3) > -1 || 
       gamer["jogadas"].indexOf(4) > -1 && 
       gamer["jogadas"].indexOf(5) > -1 && 
       gamer["jogadas"].indexOf(6) > -1 ||
       gamer["jogadas"].indexOf(7) > -1 && 
       gamer["jogadas"].indexOf(8) > -1 && 
       gamer["jogadas"].indexOf(9) > -1 ) ||
       (gamer["jogadas"].indexOf(1) > -1 &&
       gamer["jogadas"].indexOf(5) > -1 &&
       gamer["jogadas"].indexOf(9) > -1 || 
       gamer["jogadas"].indexOf(7) > -1 && 
       gamer["jogadas"].indexOf(5) > -1 && 
       gamer["jogadas"].indexOf(3) > -1))
       {Ganhar(gamer)}
    else if(gamer_one["jogadas"].length + gamer_two["jogadas"].length == 9){
        Empate()
    }
}
var gamer_one = {
    "gamer": 1,
    "jogadas": [],
    "vitorias": 0
}
var gamer_two = {
    "gamer": 2,
    "jogadas": [],
    "vitorias": 0
}