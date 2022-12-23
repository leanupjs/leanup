#encoding: utf-8

Feature: Demo Tests

    Scenario: Neuen Eintrag anlegen

        Given Ich starte die App
        And Die Liste enthaelt keinen Eintrag "Maus"
        And Ich oeffne das Formular zum Anlegen
        And Ich warte 5 Sekunden
        When Ich gebe als Titel "Maus" ein
        And Ich gebe als Einheit "€" ein
        And Ich klicke auf Speichern
        Then Die Liste enthaelt einen Eintrag "Maus"

    Scenario: Eintrag bearbeiten

        Given Ich starte die App
        Then Die Liste enthaelt einen Eintrag "Maus"
        And Ich bearbeite Eintrag 5
        And Ich warte 5 Sekunden
        When Ich gebe als Titel "Maus2" ein
        And Ich gebe als Einheit "$" ein
        And Ich warte 5 Sekunden
        And Ich klicke auf Speichern
        Then Die Liste enthaelt einen Eintrag "Maus2"

    Scenario: Eintrag löschen

        Given Ich starte die App
        Then Die Liste enthaelt einen Eintrag "Maus2"
        And Ich bearbeite Eintrag 5
        And Ich warte 5 Sekunden
        And Ich klicke auf Löschen
        And Die Liste enthaelt keinen Eintrag "Maus2"