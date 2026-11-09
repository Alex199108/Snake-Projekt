# Snake-Projekt

Snake-Spiel in HTML5 Canvas und JavaScript — Übungsprojekt im Rahmen der Umschulung zum Fachinformatiker Anwendungsentwicklung.

## Aufgaben

- [x] Canvas-Grundlagen: Koordinatensystem, Rendering-Context
- [x] Snake als Array von Grid-Koordinaten darstellen
- [x] Snake zeichnen (updateSnake in der Klasse Snake)
- [x] Bewegung der Schlange (Tastatursteuerung)
- [x] Game Loop (requestAnimationFrame, Geschwindigkeit steigt mit dem Punktestand: ab 30, 100 und 150 Punkten)
- [x] Kollisionserkennung Wand (Game Over)
- [x] Kollisionserkennung eigener Körper
- [x] Futter-Logik (zufällig, Respawn, Wachstum)
- [x] Punktestand
- [x] Restart

## Dateien

- `index.html` — lädt die Skripte und startet das Spiel (`new Game()`)
- `World.js` — Klasse `World`: erstellt das Canvas, stellt den Context bereit, gibt Breite und Höhe zurück und leert das Spielfeld
- `Snake.js` — Klasse `Snake`: Segmente, Steuerung mit den Pfeiltasten (Gegenrichtung gesperrt), Bewegung und Zeichnen der Schlange
- `Game.js` — Klasse `Game`: erstellt World, Snake und Food, Game Loop mit Geschwindigkeitsstufen (`speedLevels`), zeichnet alles
- `Food.js` — Klasse `Food`: zufällige Position (nie auf der Schlange) und Zeichnen
- `script.js` — erste Version ohne Klassen (wird nicht mehr verwendet)
- `notizen.js` — JavaScript-Übungen (Grundkonzepte, getrennt vom Spielcode)
- `style.css` — Layout der Seite und Rahmen des Canvas

## Refactoring

- `getNextPosition(position, direction)` ersetzt die zwei gleichen `switch`-Blöcke in `move()` (DRY)
- Objekt `shiftOf` (Richtung → `{ dx, dy }`) ersetzt die `if / else if`-Kette in `getNextPosition`
- Objekt `oppositeOf` ersetzt die vier `if`-Abfragen in `setDirection`
- Array `speedLevels` mit `find` ersetzt die `if / else if`-Kette für die Geschwindigkeit in `Game.loop`
- Bug beim Fressen behoben: der Kopf sprang zwei Felder weit (konnte das Spielfeld ohne Game Over verlassen) und das Futter konnte unter dem Kopf erscheinen
- Toter und auskommentierter Code entfernt
