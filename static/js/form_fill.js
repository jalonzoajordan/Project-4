function loadPage(cards){

    for ( j = 1; j < 12; j++){
        d3.select("#number_of_players").append('option').attr('value', j+1).text(j+1);
    }

    for (i=0; i<cards.length; i++){
        var card = cards[i];
        d3.select("#available_cards_1").append('option').attr('value', card).text(card);
        d3.select("#available_cards_2").append('option').attr('value', card).text(card);
        d3.select("#available_cards_3").append('option').attr('value', card).text(card);
        d3.select("#available_cards_4").append('option').attr('value', card).text(card);
        d3.select("#available_cards_5").append('option').attr('value', card).text(card);
    }

}


function updatePlayers(){
    change = d3.select("#number_of_players").node().value;

    d3.select("#chair_number").html("");
    d3.select("#players_flop").html("");

    for (i=0; i<change; i++){
        d3.select("#chair_number").append('option').attr('value', i+1).text(i+1);
        d3.select("#players_flop").append('option').attr('value', i+1).text(i+1);

    }

}

function updateTurn(){
    change = d3.select("#players_flop").node().value;

    d3.select("#players_turn").html("");

    for (i=0; i<change; i++){
        d3.select("#players_turn").append('option').attr('value', i+1).text(i+1);

    }   
}


function updateRiver(){
    change = d3.select("#players_turn").node().value;

    d3.select("#players_river").html("");
    for (i=0; i<change; i++){
        d3.select("#players_river").append('option').attr('value', i+1).text(i+1);

    }   
}