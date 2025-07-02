
# TypeScript – Zusammenfassung Unterrichtseinheit 10: Generics mit Einschränkungen & Defaultwerten

## 🎯 Ziel: Verwendung generischer Funktionen zur sicheren Datensuche und -rückgabe

---

## 📌 Interface als Constraint: `hasID`

```ts
interface hasID {
    id: number;
}
```

- Dieses Interface stellt sicher, dass ein Typ **mindestens eine `id:number`-Eigenschaft** besitzt.
- Wird als Einschränkung (Constraint) für Generics genutzt.

---

## 🔍 Funktion: `findById`

```ts
function findById<T extends hasID>(list: T[], id: number): T | undefined {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i];
        }
    }
    return undefined;
}
```

### Erklärung:
- `T extends hasID` schränkt den generischen Typ `T` auf Objekte mit einer `id`-Eigenschaft ein.
- Die Funktion durchläuft die Liste und vergleicht jede `id` mit dem gesuchten Wert.
- Gibt das gefundene Objekt oder `undefined` zurück.

### Beispiel:

```ts
const posts = [
    { id: 101, title: "post1" },
    { id: 102, title: "post2" }
];

console.log(findById(posts, 102)); // { id: 102, title: "post2" }
```

---

## ✅ Funktion: `getWithDefault`

```ts
function getWithDefault<T>(value: T | undefined, defaultValue: T): T {
    return value !== undefined ? value : defaultValue;
}
```

### Erklärung:
- Nimmt entweder einen Wert vom Typ `T` oder `undefined`.
- Gibt den übergebenen Wert zurück, wenn er definiert ist – sonst den `defaultValue`.

### Beispiel:

```ts
const settings = getWithDefault<number>(100, 12);
console.log(settings);  // Ergebnis: 100
```

---

## ✅ Vorteile von Constraints und Defaultwerten

| Funktion                     | Vorteil                                               |
|------------------------------|--------------------------------------------------------|
| `T extends hasID`            | Stellt sicher, dass `T` eine bestimmte Struktur hat   |
| `findById<T>()`              | Wiederverwendbar & typgesichert für alle Objekte mit `id` |
| `getWithDefault<T>()`        | Spart `if/else`-Logik bei `undefined`-Werten         |

---

## 💡 Weiterführende Anwendungen

- Kombinieren mit `Partial<T>`, `Readonly<T>`, oder `Pick<T, K>`.
- Ideal für Konfigurationssysteme, Datenbankabfragen oder API-Defaults.
