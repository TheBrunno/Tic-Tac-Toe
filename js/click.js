function Clicked(pos, gamer){
    if(gamer % 2 == 0){
        pos.style.backgroundColor = '#00F'
        return 1
    }else{
        pos.style.backgroundColor = '#F00'
        return 2
    }
}
var vez = Math.round((Math.random() * 1));
var num_gamer;
one["caminho"].onclick = function(){
    if(one["click"] != true){
        num_gamer = Clicked(one["caminho"], vez)
        vez++
        one["click"] = true
        game = acrecentar(1, num_gamer)
        verific(game)
    }
}
two["caminho"].onclick = function(){
    if(two["click"] != true){
        num_gamer = Clicked(two["caminho"], vez)
        vez++
        two["click"] = true
        game = acrecentar(2, num_gamer)
        verific(game)
    }
}
three["caminho"].onclick = function(){
    if(three["click"] != true){
        num_gamer = Clicked(three["caminho"], vez)
        vez++
        three["click"] = true
        game = acrecentar(3, num_gamer)
        verific(game)
    }
}
four["caminho"].onclick = function(){
    if(four["click"] != true){
        num_gamer = Clicked(four["caminho"], vez)
        vez++
        four["click"] = true
        game = acrecentar(4, num_gamer)
        verific(game)
    }
}
five["caminho"].onclick = function(){
    if(five["click"] != true){
        num_gamer = Clicked(five["caminho"], vez)
        vez++
        five["click"] = true
        game = acrecentar(5, num_gamer)
        verific(game)
    }
}
six["caminho"].onclick = function(){
    if(six["click"] != true){
        num_gamer = Clicked(six["caminho"], vez)
        vez++
        six["click"] = true
        game = acrecentar(6, num_gamer)
        verific(game)
    }
}
seven["caminho"].onclick = function(){
    if(seven["click"] != true){
        num_gamer = Clicked(seven["caminho"], vez)
        vez++
        seven["click"] = true
        game = acrecentar(7, num_gamer)
        verific(game)
    }
}
eight["caminho"].onclick = function(){
    if(eight["click"] != true){
        num_gamer = Clicked(eight["caminho"], vez)
        vez++
        eight["click"] = true
        game = acrecentar(8, num_gamer)
        verific(game)
    }
}
nine["caminho"].onclick = function(){
    if(nine["click"] != true){
        num_gamer = Clicked(nine["caminho"], vez)
        vez++
        nine["click"] = true
        game = acrecentar(9, num_gamer)
        verific(game)
    }
}