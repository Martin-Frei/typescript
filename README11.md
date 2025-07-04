
# TypeScript – Zusammenfassung Unterrichtseinheit 11: Dynamische Objekte mit `keyof` & `T[K]`

## 🎯 Ziel: Eigenschaften von Objekten typensicher manipulieren – zur Laufzeit

---

## 📌 `keyof` – Zugriff auf erlaubte Schlüssel eines Objekts

```ts
type Book = {
    Author: string;
    Title: string;
    BookYear: number;
};

type KeysOfBook = keyof Book; // "Author" | "Title" | "BookYear"
```

- `keyof` erzeugt eine Union aus allen **Eigenschaftsnamen** eines Typs.
- Damit kann man **nur gültige Keys** in generischen Funktionen verwenden.

---

## 🧠 `T[K]` – Zugriff auf den Typ einer Eigenschaft

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
    obj[key] = value;
    return obj;
}
```

| Teil             | Erklärung                                                        |
|------------------|------------------------------------------------------------------|
| `T`              | Generischer Typ (z. B. `Book`, `Employe`)                        |
| `K extends keyof T` | Key muss gültiger Eigenschaftsname von `T` sein                 |
| `T[K]`           | Typ der Eigenschaft (z. B. `string`, `number`, `boolean`, …)     |

---

## 📚 Beispiel: Bücher bearbeiten

```ts
type Book = {
    Author: string;
    Title: string;
    BookYear: number;
};

const newBook: Book = {
    Author: "James Clear",
    Title: "Hello again",
    BookYear: 2025,
};

let updatedBook = getProperty(newBook, "BookYear", 2024); // ✅ Zahl erlaubt
updatedBook = getProperty(newBook, "Author", "James Bond"); // ✅ String erlaubt
```

---

## 👨‍💼 Beispiel: Mitarbeitende bearbeiten

```ts
interface Employe {
    id: number;
    name: string;
    role: string;
    isActive: boolean;
}

let worker: Employe = {
    id: 1234,
    name: "Martin",
    role: "Dev",
    isActive: true,
};

let newWorker = getProperty(worker, "id", 1111);       // ✅
newWorker = getProperty(worker, "name", "Frank");      // ✅
newWorker = getProperty(worker, "isActive", false);    // ✅
```

---

## ✅ Vorteile dieser Technik

| Feature             | Vorteil                                                   |
|---------------------|------------------------------------------------------------|
| `keyof`             | Schutz vor falschen Schlüsseln                             |
| `T[K]`              | Wert hat **immer** den richtigen Typ                       |
| Wiederverwendbar    | Funktion funktioniert für beliebige Objekte                |
| Dynamische Nutzung  | Typischer Einsatz für Konfigurationen, Updates, APIs       |

---

## 💡 Fazit

Mit `keyof` und `T[K]` lassen sich sehr **dynamische**, aber dennoch **typensichere** Funktionen schreiben. Du kannst Objekte flexibel manipulieren, ohne die Sicherheit von TypeScript zu verlieren.

