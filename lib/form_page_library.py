import sqlalchemy
from sqlalchemy import create_engine, inspect
import pandas as pd
import os

#set up engine
engine = create_engine(f"sqlite:///{os.getcwd()}/Data/Poker_data.db")

def card_list():
    #run queries for data
    card_df = pd.read_sql('SELECT DISTINCT table_1 from dbo_hands', engine)
    card_list = card_df["table_1"]
    card_list = card_list.tolist()
    return card_list
