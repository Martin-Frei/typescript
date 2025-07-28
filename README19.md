
# TypeScript Array Utilities – README19

Dieses Dokument enthält praktische Beispiele für den Umgang mit `filter()`, `map()` und `reduce()` in TypeScript, einschließlich einer Zählfunktion und dem "Flatten" verschachtelter Arrays.

---

## 📌 Aufgabe 1: Nur aktive Benutzer filtern

```ts
type User19 = {
    id: number;
    name: string;
    isActive: boolean;
};

const users19: User19[] = [
    { id: 1, name: "Frank", isActive: true },
    { id: 2, name: "Jane", isActive: false },
    { id: 3, name: "Bob", isActive: true },
];

const activUser = users19.filter((user) => user.isActive == true);
console.log(activUser);
```

▶️ `filter()` wird verwendet, um nur die Nutzer mit `isActive === true` zurückzugeben.

---

## 📌 Aufgabe 2: Produktnamen herausfiltern & nach Preis filtern

```ts
type Product19 = {
    id: number;
    name: string;
    price: number;
};

const products19: Product19[] = [
    { id: 1, name: "Phone", price: 800 },
    { id: 2, name: "Laptop", price: 1200 },
    { id: 3, name: "Tablet", price: 500 },
];

const productName = products19.map((product) => product.name);
console.log(productName);

const productPrice = products19
    .filter((product) => product.price > 700)
    .map((product) => product.name);
console.log(productPrice);
```

▶️ `map()` extrahiert bestimmte Felder (hier `name`).  
▶️ `filter()` kombiniert mit `map()` wählt Produkte mit Preis > 700 und gibt deren Namen zurück.

---

## 📌 Aufgabe 3: Gesamtpreis mit `reduce()` berechnen

```ts
type Item = {
    name: string;
    price: number;
};

const cart: Item[] = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 5 },
    { name: "Notebook", price: 10 },
];

const sumPrice = cart.reduce((result, item) => result += item.price, 0);
console.log(sumPrice);
```

▶️ `reduce()` wird verwendet, um die Summe der Preise zu berechnen.

---

## 📌 Aufgabe 4: Zählen wie oft ein Wort vorkommt

```ts
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const myCount = words.reduce((result, item) => {
    if (!result[item]) result[item] = 1;
    else result[item] += 1;
    return result;
}, {} as Record<string, number>);

console.log(myCount);
```

▶️ Hier erzeugen wir mit `reduce()` ein Objekt, das zählt, wie oft jedes Wort vorkommt.

---

## 📌 Aufgabe 5: Verschachtelte Arrays „flatten“

```ts
const nested = [[1, 2], [3, 4], [5]];

const myObj = nested.reduce((result, item) => 
    result.concat(item), []);

console.log(myObj);
```

▶️ `reduce()` wird verwendet, um verschachtelte Arrays zu einem einzigen Array zusammenzuführen.

---

## 🧠 Zusammenfassung

| Methode     | Zweck                               |
|-------------|--------------------------------------|
| `filter()`  | Elemente nach Bedingung auswählen    |
| `map()`     | Datenstruktur transformieren         |
| `reduce()`  | Werte reduzieren/zusammenfassen      |

