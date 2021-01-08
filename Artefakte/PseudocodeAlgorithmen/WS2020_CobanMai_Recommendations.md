### Recommendations
```
Höre auf Verbindungen()
-> Wenn Verbindung mit Peer
--> Dann Höre auf Änderungen an Rezepten.wurdegekocht ODER Rezepten.wurdegespeichert
---> Wenn Änderungen an einem Rezept
----> Dann lese Rezept.Metadaten(Kategoriename, Zutatenliste, Schwierigkeitsgrad)
----> Lese Nutzer.Vorlieben.Kategorien
----> Wenn Nutzer.Vorlieben.Kategorien enthält Kategoriename
-----> Dann erhöhe Häufigkeit der Vorlieben.Kategorien.Kategoriename um 1
----> Lese Nutzer.Vorlieben.Zutaten
----> Für jede Zutat in Rezept.Zutatenliste
-----> Wenn Nutzer.Vorlieben.Zutaten enthält Zutat
------> Dann erhöhe Häufigkeit der Vorlieben.Zutaten.Zutat um 1
----> Wenn Nutzer.Vorlieben.Schwierigkeitsgrade enthält Schwierigkeitsgrad
-----> Dann erhöhe Häufigkeit der Vorlieben.Schwierigkeitsgrade.Schwierigkeitsgrad um 1
----> Speichere Änderungen an Vorlieben

Gib Vorschläge()
-> Wenn Komponente Recommendations geladen wurde
--> Dann Lese lokale Rezepte und Nutzer.Vorlieben
--> Speicher zwischen: Rezepte die: Nutzer.Vorlieben.Zutatenliste.dieHöchstenFünf() enthalten
--> Speicher zwischen: Rezepte die: Nutzer.Vorlieben.Kategorien.dieHöchstenDrei() enthalten
--> Speicher zwischen: Rezepte die: Nutzer.Vorlieben.Schwierigkeitsgrad.HöchsterWert() enthalten
--> Wenn zwischen gespeicherte Rezepte Rezepte enthält die alle drei Anforderungen erfüllen (kommt drei mal vor)
---> UND nicht bereits gekocht wurde.
---> Dann gib zurück diese ausgewählten Rezepte

```