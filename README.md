# Project-4
UTSA Data Visualization Project 4





# Poker Data Flask App

![gif](https://media.giphy.com/media/xT9DPlAUKTl1GeZjC8/giphy.gif)

## Table of Contents

* [Poker Data](#poker-data)
* [Data Source](#data-sources)
* [Technologies](#technologies)
* [Extract](#extract)
* [Transform](#transform)
* [Load](#load)
* [Run Flask App](#run-flask)
* [Contacts](#contacts)
* [Findings](#findings)

## Poker Data

Objective: Create a poker web app to tell whether a player should bet or bluff based certain table conditions.

## Data Source

- [Poker Data](http://poker.cs.ualberta.ca/irc_poker_database.html)


## Technologies
* Python
* Flask
* Javascript
* HTML/CSS
* Tableau
* Jupyter Notebook
* SQLiteStudio

# Extract

* Took .txt files from lib/raw_data-cleanup folder and turned them into .csv files.
* Jupyter Notebook was then used to view, clean, and organize the data with Pandas/Python.

# Transform

* Transferred from .csv format to SQLite.

# Load

* Cleaned .csv files were loaded into Tableau to create visualizations. 
* Cleaned information was fed into a deep learning model to make predictions. 
* Build Flask app and connection.
 
# Deploy
 
* Using VSCode, we made an app to call our data queries from the SQLite database but call it using Flask and Python
* Data called, able to create visualizations for our build webpage via CSS, HTML, Javascript, Python, and Tableau

## Run Flask

To Deploy the Flask App, please follow the steps:

* Step 1: Git clone the repository into your local computer.

* Step 2: Confirm that Jupyter Notebook is up and running with the environment where you have the python libraries mentioned in the notebook installed.

* Step 3: Confirm that you have sqlitestudio app up and running on your machine.

* Step 4: Connect the database using the database called 'Poker_Data.db'.

* Step 5: Execute command python app.py and launch the server using URL: http://127.0.0.1:5000/.

## Findings
* Over the course of the project, we made a lot of interesting findings. When analyzing the number of wins by chair number, the position relative to the dealer, we can see that the closer to the dealer a player sits, the more likely they are to win that round. Another interesting find was a correlation between the number of players and the average winnings. When there are few players, you are going to average around 25 chips but interestingly enough, when there are the max amount of players, you can actually win more chips. This could be due to the fact that if there are more players, there are more chips on the table and more to win. Lastly, it was very interesting to see that the average play bet and average winnings remained the same when compared to the number of players. For example, when there are two players, the average bet and average winning was 27.09 chips. This could be explained because you can only win what chips are on the table but it also confirms our first visualization in that the closer you are to the dealer, the higher your chances of winning are and the amount you may win. It must also be mentioned that although the average bet/winnings went down the more players there were, the average winnings by chair position actually go up as seen in the second visualization.

Having these insights, take a chance and check out the "Play" page of our site! You can enter the conditions of the table including chip count, the number of players and what cards are played to see if you should bluff or not. 


***Disclaimer: this site should not be used for actual gambling purposes.***
    

## Contacts

[Johnathan Fludd](https://github.com/JohnathanFludd)

[Jordan Alonzo](https://github.com/jalonzoajordan)

[Marquetta Valdez](https://github.com/quettamar)

[Mindy Garcia](https://github.com/mingarci)
