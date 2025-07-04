
# TypeScript – README12-2: Utility Types `Pick` & `Record`

## 🔧 Was sind Utility Types?

Utility Types sind eingebaute Typwerkzeuge von TypeScript, mit denen man bestehende Typen gezielt verändern oder neu zusammensetzen kann. Zwei der wichtigsten sind `Pick` und `Record`.

---

## 🟦 `Pick<Type, Keys>` – Teiltyp mit ausgewählten Feldern

```ts
type User2 = {
    id: number;
    name: string;
    email: string;
    password: string;
}

type loginData = Pick<User2, "email" | "password">;
```

- `loginData` enthält nur die Felder `email` und `password` aus `User2`.
- Ideal, um gezielt **Teildaten** eines Typs zu verwenden – z. B. für Login-Formulare.

### Beispiel:

```ts
const login: loginData = {
    email: "example@gmail.com",
    password: "1234",
}
```

Ein zweiter Teiltyp mit anderen Feldern:

```ts
type loginData2 = Pick<User2, "name" | "email">;
const infoUser2: loginData2 = {
    name: "Martin",
    email: "example@gmail.com"
}
```

---

## 🟨 `Record<Keys, ValueType>` – Erzwinge bestimmte Schlüssel mit Werten

```ts
type status1 = "pending" | "aproved" | "rejected";

const statusMsg: Record<status1, string> = {
    pending: "Still under review",
    aproved: "accepted",
    rejected: "Try again"
}
```

- `Record<status1, string>` erzeugt ein Objekt, das **genau die Schlüssel aus `status1`** haben muss.
- Jeder Schlüssel hat den Typ `string` als Wert.

### Vorteile:
- Typensicher: keine vergessenen oder falschen Keys
- Ideal für **Statusnachrichten**, Labels, Übersetzungen, Rollen usw.

```ts
console.log(statusMsg.pending); // Still under review
```

---

## ✅ Zusammenfassung

| Utility Type | Beschreibung | Beispiel |
|--------------|--------------|----------|
| `Pick`       | Wählt bestimmte Felder aus einem bestehenden Typ | `Pick<User, "email" | "password">` |
| `Record`     | Erstellt ein Objekt mit festen Keys & gleichem Wert-Typ | `Record<"pending" \| "done", string>` |

---

## 💡 Fazit

Mit `Pick` und `Record` kannst du flexibel und sauber neue Typen ableiten, ohne Redundanz zu erzeugen. Sie sind ein Grundbaustein für professionelle TypeScript-Projekte.
