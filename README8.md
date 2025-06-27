
# TypeScript – Zusammenfassung Unterrichtseinheit 8: Fortgeschrittene Generics

## 🧠 Ziel: Anwendung von Generics mit Arrays, benutzerdefinierten Typen und einfachen Filterfunktionen

---

## 📦 Funktion: getFirstItem

```ts
function getFirstItem<T>(item: T[]): T {
    return item[0];
}
```

### 🔍 Erklärung:
- `T` ist ein generischer Typ-Platzhalter.
- Die Funktion nimmt ein Array vom Typ `T[]`.
- Sie gibt das **erste Element dieses Arrays** zurück (vom Typ `T`).

### 🧪 Anwendung:

```ts
const firstNum = getFirstItem([1,2,3,4,5]);        // Ergebnis: 1
const firstLetter = getFirstItem<string>(["martin", "frank"]);  // Ergebnis: "martin"
```

---

## 👤 Benutzerdefinierter Typ: `User`

```ts
type User = {
    idNum: number;
    name: string;
};
```

Ein einfaches Objekt mit zwei Eigenschaften:
- `idNum`: Zahl
- `name`: Text

---

## 📚 Benutzerdefinierte Liste: `users`

```ts
const users: User[] = [
    {idNum: 1, name: "martin"},
    {idNum: 2, name: "frank"},
    {idNum: 3, name: "preply"}
];
```

Ein Array von Objekten vom Typ `User`.

---

## 🔍 Funktion: filterUserById

```ts
function filterUserById<T>(item: T[], x: number): T[] {
    const result = item[x];
    return [result];
}
```

### Erklärung:
- Die Funktion ist generisch mit Typ `T`.
- Sie nimmt ein Array `item` und eine Zahl `x`.
- Sie greift auf das Element an Index `x` zu (`item[x]`) und gibt es **als Array** zurück: `[result]`.

### Anwendung:

```ts
console.log(filterUserById(users, 2));
```

- Gibt ein Array mit **nur einem Element** zurück:  
  → `[{idNum: 3, name: "preply"}]`

---

## ✅ Zusammenfassung

| Teil                       | Bedeutung                                                       |
|---------------------------|------------------------------------------------------------------|
| `function<T>()`           | Definiert einen **generischen** Typ-Platzhalter                 |
| `T[]`                     | Arbeitet mit **Arrays beliebigen Inhalts**                      |
| Rückgabe `T` oder `T[]`   | Gibt entweder ein einzelnes Element oder ein Array zurück       |
| Filterfunktion            | Zugriff auf ein bestimmtes Element im Array über Index          |
| Typ `User`                | Beispiel für eigene benutzerdefinierte Typen                    |

---

## 💡 Weiterdenken:
- Die Funktion `filterUserById` ist **nur ein Indexzugriff**. Für „echtes Filtern“ nach `idNum` könnte man `filter()` verwenden.
- Du kannst Generics mit Bedingungen (`extends`) kombinieren.
- Auch `keyof`, `Record`, `Partial`, `Pick`, usw. lassen sich einbauen.

---

Damit hast du die **praktische Anwendung von Generics** mit realistischen Typen und Objekten gemeistert – sauber!
