
# TypeScript – README13: Utility Types – Partial, Required, Exclude, Extract

In dieser Lektion geht es um vier wichtige Utility Types: `Partial`, `Required`, `Exclude` und `Extract`. Sie helfen dabei, vorhandene Typen dynamisch anzupassen, ohne Redundanz oder komplexe Umschreibungen.

---

## 🔧 `Partial<Type>`

Wandelt alle Eigenschaften eines Typs in **optionale** Felder um. Ideal für **Updates**, bei denen nicht alle Daten übergeben werden müssen.

```ts
type product1 = {
    id: number;
    name: string;
    price: number;
};

const updateProduct = (updates: Partial<product1>) => {
    console.log("updateProduct:", updates);
};
```

✅ Du kannst z. B. nur den Namen oder nur die ID ändern.

---

## ✅ `Required<Type>`

Das Gegenteil von `Partial`: Alle Felder eines Typs **müssen** vorhanden sein.

```ts
type book1 = {
    name: string;
    author: string;
    release: number;
};

const publish = (post: Required<book1>) => {
    console.log("publishing:", post.name, post.author, post.release);
};
```

❌ Fehlt ein Feld, gibt TypeScript einen Fehler aus.

---

## 🚫 `Exclude<UnionType, ExcludedMembers>`

Entfernt aus einer Union alle angegebenen Typen.

```ts
type roles = "admin" | "user" | "guest";
type visibleRoles = Exclude<roles, "guest">; // => "admin" | "user"
```

```ts
type fileExtension = "jpg" | "png" | "mp4" | "mp3";
type imgExtension = Exclude<fileExtension, "mp4" | "mp3">; // => "jpg" | "png"
```

✅ Nützlich für Whitelists, Blacklists oder sichtbare Optionen.

---

## 🧪 `Extract<UnionType, MembersToKeep>`

Behält aus einer Union nur die angegebenen Mitglieder.

```ts
type cars2 = {
    brand: string;
    model: string;
    mileage: number;
    age: number;
    hp: number;
};

type newCar = Extract<keyof cars2, "model" | "age">;
// => "model" | "age"

type mainCar = Pick<cars2, newCar>;

const user10: mainCar = {
    model: "Audi",
    age: 2008
};
```

`Extract` + `keyof` + `Pick` ist ein starker Kombi-Ansatz zum dynamischen Erstellen von Teilobjekten.

---

## ✅ Zusammenfassung

| Utility Type | Zweck                                                       |
|--------------|-------------------------------------------------------------|
| `Partial`    | Alle Felder optional machen                                 |
| `Required`   | Alle Felder als Pflichtfelder erzwingen                     |
| `Exclude`    | Mitglieder aus einer Union entfernen                        |
| `Extract`    | Bestimmte Mitglieder aus einer Union auswählen              |

---

## 💡 Fazit

Diese Utility Types sind unverzichtbar, wenn du wiederverwendbare, flexible Typdefinitionen brauchst – z. B. für Formulare, APIs oder dynamische UI-Komponenten. Sie machen deinen Code **klarer**, **typsicherer** und **wartbarer**.
