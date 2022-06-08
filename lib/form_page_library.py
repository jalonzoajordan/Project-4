import sqlalchemy
from sqlalchemy import create_engine, inspect
import os

def card_list():
    #set up engine
    engine = create_engine(f"sqlite:///{os.getcwd()}/Data/Poker_data.db")
    
    #run queries for data
    cards_query = engine.execute('SELECT DISTINCT table_1 from dbo_hands ORDER BY table_1').fetchall()
    cards_list = []
    for card in cards_query:
        if card[0] == None:
            cards_list.append("None")
        else:
            cards_list.append(card[0])
    return cards_list
