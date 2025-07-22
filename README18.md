
# README18.md

## Überblick

Dieses Beispiel demonstriert den Import benutzerdefinierter Module sowie den Umgang mit Klassen, Interfaces und grundlegender Datenverwaltung in TypeScript.

### Importierte Elemente

```typescript
import { pi, square, identity } from "./typescript17";
```

- `pi`: Eine Konstante mit dem Wert der Kreiszahl π.
- `square`: Eine Funktion, die das Quadrat einer Zahl berechnet.
- `identity`: Ein Interface für Objekte mit `id`, `name` und `age`.

### Beispiel für die Nutzung

```typescript
console.log(pi);               // Ausgabe von π
console.log(square(5));        // Ausgabe: 25

const u:identity = {
    id: 12345,
    name: "martin",
    age: 53
};
console.log(u);
```

## `inventoryManage` Klasse

Die Klasse `inventoryManage` verwaltet ein Inventar von Artikeln.

### Interface: `inventoryItem`

```typescript
interface inventoryItem {
    id: number;
    name: string;
    quantity: number;
}
```

### Methoden der Klasse

- **addItem(item: inventoryItem)**  
  Fügt einen Artikel dem Inventar hinzu.

- **listItems()**  
  Gibt alle Artikel im Inventar aus.

- **updateQuantity(id: number, newQuantity: number)**  
  Aktualisiert die Menge eines Artikels anhand seiner ID.

- **removedItem(id: number)**  
  Entfernt einen Artikel anhand seiner ID.

### Beispiel:

```typescript
const manager = new inventoryManage();

manager.addItem({ id: 1, name: "Stuhl", quantity: 5 });
manager.listItems();
manager.updateQuantity(1, 10);
manager.removedItem(1);
```

## Fazit

Dieses Beispiel zeigt, wie man in TypeScript:
- Module importiert,
- Interfaces nutzt,
- Klassen mit Methoden für Datenoperationen erstellt.

Es eignet sich hervorragend zum Verständnis von OOP und Datenverwaltung in TypeScript.
