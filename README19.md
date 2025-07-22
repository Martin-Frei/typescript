# README19 - Array Methoden in TypeScript (filter, map, reduce)

## 🧑‍💻 Aufgabe 1: Aktive Nutzer filtern

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

const activUser = users19.filter((user) => user.isActive == true )
console.log(activUser)
```

➡️ `filter()` durchläuft das Array und gibt nur die Elemente zurück, bei denen die Bedingung `isActive == true` zutrifft.

---

## 🛒 Aufgabe 2: Produktnamen extrahieren & Filtern nach Preis

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

const productName = products19.map((product) => product.name)
console.log(productName)
```

➡️ `map()` erzeugt ein neues Array nur mit den Namen der Produkte.

```ts
const productPrice = products19
    .filter((product) => product.price > 700)
    .map((product) => product.name )
console.log(productPrice)
```

➡️ Kombination von `filter()` und `map()`:
- `filter()` wählt Produkte über 700€ aus.
- `map()` extrahiert danach die Namen.

---

## 💸 Aufgabe 3: Gesamtpreis berechnen mit `reduce()`

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

const sumPrice = cart.reduce((result, item) => result += item.price, 0 )   
console.log(sumPrice)
```

➡️ `reduce()` sammelt (`accumuliert`) alle Preise zu einem einzigen Wert.
- `result` ist der Akkumulator (Startwert: `0`).
- `item.price` ist der Wert jedes einzelnen Elements, der hinzugefügt wird.