--
-- File generated with SQLiteStudio v3.3.3 on Thu Jun 2 21:09:47 2022
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: dbo_hand_roster
CREATE TABLE dbo_hand_roster (
    hand_id     BIGINT  REFERENCES dbo_hands (hand_id),
    num_players INTEGER,
    player_1    TEXT,
    player_2    TEXT,
    player_3    TEXT,
    player_4    TEXT,
    player_5    TEXT,
    player_6    TEXT,
    player_7    TEXT,
    player_8    TEXT,
    player_9    TEXT,
    player_10   TEXT,
    player_11   TEXT,
    player_12   TEXT
);


-- Table: dbo_hands
CREATE TABLE dbo_hands (
    hand_id        BIGINT  PRIMARY KEY
                           UNIQUE,
    table_num      INTEGER,
    table_hand_num INTEGER,
    num_players    INTEGER,
    flop_pot       TEXT,
    turn_pot       TEXT,
    river_pot      TEXT,
    winnings_pot   TEXT,
    table_1        TEXT,
    table_2        TEXT,
    table_3        TEXT,
    table_4        TEXT,
    table_5        TEXT
);


-- Table: dbo_players
CREATE TABLE dbo_players (
    player_name     TEXT,
    hand_id         BIGINT  REFERENCES dbo_hands (hand_id),
    num_players     INTEGER,
    chair_num       INTEGER,
    action_pre_flop TEXT,
    action_flop     TEXT,
    action_turn     TEXT,
    action_river    TEXT,
    chip_count      INTEGER,
    player_bet      INTEGER,
    player_winnings INTEGER,
    revealed_card_1 TEXT,
    revealed_card_2 TEXT
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
