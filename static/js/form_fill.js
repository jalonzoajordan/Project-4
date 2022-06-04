function loadPage(cards){

    for ( j = 0; j < 12; j++){
        d3.select("#numer_of_players").append('option').attr('value', j+1).text(j+1);
    }

    for (i=0; i<cards.length; i++){
        card = cards[i];
        d3.select("#available_cards").append('option').attr('value', card).text(card);
    }

}


function updatePlayers(){
    change = d3.select("number_of_players").attr('value');
    

    for (i=0; i<change; i++){
        d3.select("#chair_number").append('option').attr('value', i+1).text(i+1);
        d3.select("#players_flop").append('option').attr('value', i+1).text(i+1);

    }

}




function updateTurn(){
    change = d3.select("players_flop").attr('value');

    for (i=0; i<change; i++){
        d3.select("#players_turn").append('option').attr('value', i+1).text(i+1);

    }   
}


function updateRiver(){
    change = d3.select("players_turn").attr('value');

    for (i=0; i<change; i++){
        d3.select("#players_river").append('option').attr('value', i+1).text(i+1);

    }   
}