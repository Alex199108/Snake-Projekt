# Snake-Projekt

Snake-Spiel in HTML5 Canvas und JavaScript — Übungsprojekt im Rahmen der Umschulung zum Fachinformatiker Anwendungsentwicklung.

## Aufgaben

- [x] Canvas-Grundlagen: Koordinatensystem, Rendering-Context
- [x] Snake als Array von Grid-Koordinaten darstellen
- [x] Snake zeichnen (updateSnake in der Klasse Snake)
- [x] Bewegung der Schlange (Tastatursteuerung)
- [x] Game Loop (requestAnimationFrame, ein Schritt alle 200 ms)
- [x] Kollisionserkennung Wand (Game Over)
- [ ] Kollisionserkennung eigener Körper
- [ ] Futter-Logik und Punktestand

## Dateien

- `index.html` — lädt die Skripte und startet das Spiel (`new Snake()`)
- `World.js` — Klasse `World`: erstellt das Canvas mit Rahmen, stellt den Context bereit, gibt Breite und Höhe zurück und leert das Spielfeld
- `Snake.js` — Klasse `Snake`: Segmente, Steuerung mit den Pfeiltasten (Gegenrichtung gesperrt), Bewegung und Zeichnen der Schlange
- `script.js` — erste Version ohne Klassen (wird nicht mehr verwendet)
- `notizen.js` — JavaScript-Übungen (Grundkonzepte, getrennt vom Spielcode)
