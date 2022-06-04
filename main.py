#import python libraries
from flask import Flask, render_template, jsonify
from lib import poker_learning_app, form_page_library

#set up Flask
app = Flask(__name__)

#homepage
@app.route("/")
def home(*args):
    #log server action
    print("Page accessed: Home")
    #output to webpage
    return render_template("index.html")


#form
@app.route("/poker_form")
def home(*args):
    #log server action
    print("Page accessed: poker_form")
    cards = form_page_library.card_list()
    #output to webpage
    return render_template("play.html", cards = cards)




#poker results
@app.route("/results", methods=['POST', 'GET'])
def results():
    #log server action
    print("Page accessed: results")
    #run the machine learning model
    result = poker_learning_app.get_pokerResults()
    #extract into outputs
    confidence = result[1]
    if result[0] == 0:
        reccomendation = "DO NOT BET!"
    else:
        recommendation = "BET!"
    return render_template("result.html", confidence = confidence, reccomendation = reccomendation)
    

#run the app
if __name__ == "__main__":
    app.run(debug=True)