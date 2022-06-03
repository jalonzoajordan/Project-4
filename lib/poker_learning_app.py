#import dependencies
import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
import ast
from flask import request

#import trained machine learning model
path = "../data/poker_model.hdf5"
nn_model = load_model(path)

#get the model headers from the output text file
headers_path = "../data/dummies_columns.txt"
header = open(headers_path, "r")
header = header.readlines()
header = ast.literal_eval(header[0])

def get_pokerResults():
    #get the input from the form
    num_players = request.form['num_players']
    flop_pot = request.form['flop_pot']
    turn_pot = request.form['turn_pot']
    river_pot = request.form['river_pot']
    chip_count = request.form['chip_count']
    chair_num = request.form['chair_num']
    bet_amt = request.form['bet_amt']
    players_flop = request.form['players_flop']
    players_turn = request.form['players_turn']
    players_river = request.form['players_river']
    card_1 = request.form['card_1']
    card_2 = request.form['card_2']
    card_3 = request.form['card_3']
    card_4 = request.form['card_4']
    card_5 = request.form['card_5']

    #put into a list for translations
    inputs_list = [num_players,flop_pot,turn_pot,river_pot,chip_count,chair_num,bet_amt,players_flop,players_turn,players_river,card_1,card_2,card_3,card_4,card_5]

    #create dummies reference list
    dummies_cards = inputs_list[:10]

    #get the headers from the dummies columns
    dummies_columns = header

    #loop through each table card and add the corresponding binary value
    i = 0
    k = 0
    while i < 5:
        i = i+1
        #get the current card
        curr_card = f'table_{i}_{inputs_list[9+i]}'
        j = 0
        while j<52:
            check_card = dummies_columns[k]
            if curr_card == check_card:
                dummies_cards.append(1)
            else:
                dummies_cards.append(0)
            j = j+1
            k = k+1

    #shape the data to match machine learning model
    x_predict = np.array([dummies_cards])
    x_predict.flatten()

    #run the prediction
    y_predict = nn_model.predict(x_predict)

    #get the evaluation
    result = nn_model.evaluate(x_predict,y_predict,verbose=1)

    #return evaluation
    return result