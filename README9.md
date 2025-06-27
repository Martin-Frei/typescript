
# TypeScript – Zusammenfassung Unterrichtseinheit 9: Generics mit Einschränkungen (`extends`)

## 🎯 Ziel: Typen durch Constraints (Typ-Bedingungen) absichern

---

## 🔐 Funktion: printName

```ts
function printName<T extends { name: string }>(person: T) {
    console.log(`Name is ${person.name}`);
}
```

### 🔍 Erklärung:
- `T` muss mindestens ein Objekt mit einer `name`-Eigenschaft vom Typ `string` sein.
- Du kannst zusätzliche Eigenschaften übergeben, aber `name` **muss** vorhanden und vom Typ `string` sein.

### ✅ Beispiele:
```ts
printName({ name: "frank", age: 34, gender: "male" }); // OK
printName({ name: "martin" });                         // OK
```

### ❌ Fehler:
```ts
// printName({ age: 34 });         // ❌ kein "name" vorhanden
// printName({ name: 34 });        // ❌ "name" ist kein string
```

---

## 📏 Funktion: printLength

```ts
function printLength<T extends { length: number }>(item: T) {
    console.log(`The length is ${item.length}`);
}
```

### 🔍 Erklärung:
- Diese Funktion akzeptiert **alle Typen**, die eine `length`-Eigenschaft vom Typ `number` haben – z. B. `string`, `Array`, `HTMLCollection` usw.

### ✅ Beispiele:
```ts
printLength("Hello");                        // Ergebnis: 5
printLength([1, 2, 3, 4, 5, 6]);             // Ergebnis: 6
printLength(["Hello", "Hello", "Hello"]);    // Ergebnis: 3
```

### ❌ Fehler:
```ts
// printLength(436);    // ❌ Kein length vorhanden
```

---

## 🐾 Funktion: describeAnimal

```ts
type Animal = { name: string; specious: string };

function describeAnimal<T extends Animal>(a: T) {
    console.log(`${a.name} is a ${a.specious}`);
}
```

### 🔍 Erklärung:
- `T` ist ein generischer Typ, der mindestens alle Eigenschaften von `Animal` haben muss.
- **Weitere Eigenschaften sind erlaubt**, solange `name` und `specious` korrekt vorhanden sind.

### ✅ Beispiele:
```ts
describeAnimal({ name: "Simba", specious: "Lion" });
describeAnimal({ name: "Bello", specious: "Dog" });
describeAnimal({ name: "Frank", specious: "Tutor" });
```

---

## ✅ Zusammenfassung

| Syntax                             | Bedeutung                                                  |
|------------------------------------|-------------------------------------------------------------|
| `<T extends { name: string }>`     | T muss mindestens ein `name`-Feld vom Typ string besitzen |
| `printLength<T extends { length }>`| Nur Objekte mit `length` erlaubt (z. B. Array, string)     |
| `type Animal` + `T extends Animal` | Erzwingt Struktur einer Basisform                          |

---

## 🚀 Fazit
Mit `extends` kannst du deine generischen Funktionen **kontrolliert einschränken**, sodass nur bestimmte Strukturen erlaubt sind.  
Das schützt vor Laufzeitfehlern und macht die Typen in deinem Code **vorhersehbar und sicher**.

