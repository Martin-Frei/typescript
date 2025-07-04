
# TypeScript – README12-1: Fortgeschrittene Generics

## 📦 Generische Paare

```ts
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const result = pair("age", 25); // => ["age", 25]
console.log(result);
```

### Erklärung:
- Die Funktion `pair` nimmt zwei beliebige Typen `T` und `U` entgegen.
- Sie gibt ein Tupel `[T, U]` zurück.
- Der Rückgabetyp bleibt **typisiert und sicher**.

---

## 🔁 Generische Transformation von Objektwerten

```ts
function transformKey<T, K extends keyof T, U>(
    obj: T, key: K, transform: (val: T[K]) => U
): U {
    return transform(obj[key]);
}
```

### Beispielnutzung:

```ts
const person = { name: "martin", age: 53 };

const upperName = transformKey(person, "name", (val) => val.toUpperCase());
console.log(upperName); // => "MARTIN"

const doubledAge = transformKey(person, "age", (val) => val * 2);
console.log(doubledAge); // => 106

person["age"] = doubledAge;
console.log(person); // { name: "martin", age: 106 }
```

---

## 🧠 Warum ist das wichtig?

- Du kannst **Objekte sicher verändern**, ohne auf `any` zurückzufallen.
- Mit `keyof` und `extends` schränkst du die zulässigen Schlüssel ein.
- Die Transformationsfunktion kann beliebige Änderungen durchführen, bleibt aber **typensicher**.

---

## 💡 Zusammenfassung

| Thema                 | Nutzen                                                                 |
|----------------------|------------------------------------------------------------------------|
| Generische Tupel      | Kombinieren von Werten beliebiger Typen                                |
| `transformKey`        | Sicheres Umwandeln eines Feldwerts innerhalb eines Objekts              |
| `keyof`, `extends`    | Begrenzen, was an Schlüsseln oder Typen erlaubt ist                    |

Diese Technik ist sehr mächtig in Formularen, Datenverarbeitung und dynamischen Objektänderungen.

---

## ✅ Nächster Schritt

Du kannst nun Generics:
- für Werte
- für Objekte
- für Schlüssel
- mit Constraints (`extends`)
- und mit Transformfunktionen

Damit beherrschst du Generics auf fortgeschrittenem Niveau.
