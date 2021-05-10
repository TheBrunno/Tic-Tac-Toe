function Clicked(pos, gamer){
    if(gamer % 2 == 0){
        pos.style.backgroundImage = 'url("img/o.png")'
        pos.style.cursor = 'default'
        return 1
    }else{
        pos.style.backgroundImage = 'url("img/x.png")'
        pos.style.cursor = 'default'
        return 2
    }
}
function Ganhar(winner){
    setTimeout(function(){
        alert(`Jogador ${winner["gamer"]} ganhou!`);
        winner["vitorias"] += 1;
        if(winner["gamer"] == 1){
            points_player_one.innerHTML = winner["vitorias"]
        }else{
            points_player_two.innerHTML = winner["vitorias"]
        }

        Reset()
    }, 350);
}
function Empate(){
    setTimeout(function(){alert(`Deu velha :(`); Reset()}, 350);
}
function mudarVez(vez){
    if(vez % 2 == 0){
        player_two.innerHTML = 'Jogador 2'
        player_one.innerHTML = 'Vez de Jogador 1'
    }else{
        player_one.innerHTML = 'Jogador 1'
        player_two.innerHTML = 'Vez de Jogador 2'
    }
}
var vez = Math.round((Math.random() * 1));
mudarVez(vez)
var num_gamer;
one["caminho"].onclick = function(){
    if(one["click"] != true){
        num_gamer = Clicked(one["caminho"], vez)
        vez++
        mudarVez(vez)
        one["click"] = true
        game = acrecentar(1, num_gamer)
        verific(game)
    }
}
two["caminho"].onclick = function(){
    if(two["click"] != true){
        num_gamer = Clicked(two["caminho"], vez)
        vez++
        mudarVez(vez)
        two["click"] = true
        game = acrecentar(2, num_gamer)
        verific(game)
    }
}
three["caminho"].onclick = function(){
    if(three["click"] != true){
        num_gamer = Clicked(three["caminho"], vez)
        vez++
        mudarVez(vez)
        three["click"] = true
        game = acrecentar(3, num_gamer)
        verific(game)
    }
}
four["caminho"].onclick = function(){
    if(four["click"] != true){
        num_gamer = Clicked(four["caminho"], vez)
        vez++
        mudarVez(vez)
        four["click"] = true
        game = acrecentar(4, num_gamer)
        verific(game)
    }
}
five["caminho"].onclick = function(){
    if(five["click"] != true){
        num_gamer = Clicked(five["caminho"], vez)
        vez++
        mudarVez(vez)
        five["click"] = true
        game = acrecentar(5, num_gamer)
        verific(game)
    }
}
six["caminho"].onclick = function(){
    if(six["click"] != true){
        num_gamer = Clicked(six["caminho"], vez)
        vez++
        mudarVez(vez)
        six["click"] = true
        game = acrecentar(6, num_gamer)
        verific(game)
    }
}
seven["caminho"].onclick = function(){
    if(seven["click"] != true){
        num_gamer = Clicked(seven["caminho"], vez)
        vez++
        mudarVez(vez)
        seven["click"] = true
        game = acrecentar(7, num_gamer)
        verific(game)
    }
}
eight["caminho"].onclick = function(){
    if(eight["click"] != true){
        num_gamer = Clicked(eight["caminho"], vez)
        vez++
        mudarVez(vez)
        eight["click"] = true
        game = acrecentar(8, num_gamer)
        verific(game)
    }
}
nine["caminho"].onclick = function(){
    if(nine["click"] != true){
        num_gamer = Clicked(nine["caminho"], vez)
        vez++
        mudarVez(vez)
        nine["click"] = true
        game = acrecentar(9, num_gamer)
        verific(game)
    }
}