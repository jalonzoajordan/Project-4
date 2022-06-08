import sqlalchemy
from sqlalchemy import create_engine, inspect

def card_list():
    #set up engine
    engine = create_engine(f"postgresql://yiluefypceulzp:be583ca4c86a6b2bba9122550256efd0570894caed40063dd83216bfa884ee42@ec2-3-234-131-8.compute-1.amazonaws.com:5432/d5534vfkpk3oln")

    #run queries for data
    cards_query = engine.execute('SELECT DISTINCT table_1 from dbo_hands ORDER BY table_1').fetchall()
    cards_list = []
    for card in cards_query:
        if card[0] == None:
            cards_list.append("None")
        else:
            cards_list.append(card[0])
    return cards_list
