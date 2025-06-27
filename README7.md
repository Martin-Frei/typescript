
# TypeScript – Zusammenfassung Unterrichtseinheit 7: Generics

## 📌 Ziel: Einführung in generische Funktionen, Typen und Wiederverwendbarkeit

---

## 🧠 Was sind Generics?

Generics (generische Typen) ermöglichen es, **Funktionen, Klassen oder Interfaces** so zu schreiben, dass sie mit **beliebigen Typen** arbeiten können – **ohne die Typensicherheit zu verlieren**.

---

## 📦 Beispiel einer generischen Funktion

```ts
function sample<T>(item: T): T {
    return item;
}
```

### 🔍 Erklärung:
- `T` ist ein **Platzhalter für einen echten Typ**, der bei der Nutzung festgelegt wird.
- Die Funktion `sample()` nimmt einen Wert vom Typ `T` und gibt denselben Typ zurück.

---

## 🔧 Nutzung mit verschiedenen Datentypen

```ts
console.log(sample<string>("Hello"))      // "Hello"
console.log(sample<number>(1234))         // 1234
console.log(sample<boolean>(true))        // true
```

✅ Du musst die Funktion nur **einmal schreiben**, kannst sie aber mit **beliebigen Typen** verwenden.

---

## 👤 Verwendung mit Interfaces

```ts
interface User { name: string; age: number }

console.log(sample<User>({ name: "Martin", age: 53 }));
```

Die Funktion erkennt automatisch:
- `T` ist hier vom Typ `User`
- Übergabe und Rückgabe werden komplett typgeprüft

---

## 🧾 Weitere Beispiele

### ➕ Vergleichbare Funktion (nicht generisch)

```ts
function add(a: number, b: number) {
    return a + b;
}
```

- Nur für `number` geeignet
- Nicht wiederverwendbar mit anderen Typen

---

### 🧑‍💼 Mit Interface `Employe`

```ts
interface Employe {
    name: string;
    id: number;
    hired: boolean;
}

console.log(sample<Employe>({ name: "martin", id: 12345, hired: true }));
```

---

### 🧩 Kombination mit `&` (Intersection)

```ts
type UserInfo2 = User & { jobTitle: string };

console.log(sample<UserInfo2>({
    name: "Martin",
    age: 53,
    jobTitle: "Developer"
}));
```

✅ Auch **komplexe Typen** funktionieren problemlos mit Generics.

---

## ✅ Fazit

Mit Generics kannst du:

- Code **einmal schreiben**, aber **vielseitig verwenden**
- **Typen sicher und flexibel** kombinieren
- Besonders nützlich für **Utility-Funktionen**, **Datenstrukturen** und **APIs**

---

Du hast damit einen weiteren mächtigen Baustein für wartbaren und sauberen TypeScript-Code gelernt! 💪
