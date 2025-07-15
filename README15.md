# TypeScript – README17.md  
## 🛠️ Thema: Utility Types – `-readonly`, `Record`, Map-Typen selbst erstellen

---

## 🔁 Remove `readonly` von allen Properties

Mit einer benutzerdefinierten Utility-Typfunktion kannst du `readonly`-Eigenschaften **in veränderbare (mutable)** Felder umwandeln.

```ts
type readOnlyType = {
    readonly id: number;
    name: string;
}

type mutable<T> = {
    -readonly [K in keyof T]: T[K];
}

type editUser = mutable<readOnlyType>;

let pers1: editUser = {
    id: 1,
    name: "Martin"
};

pers1.id = 2;  // funktioniert, weil readonly entfernt wurde
```

### Erklärung:

- `keyof T`: Erzeugt eine Union aller Keys von T.
- `[K in keyof T]`: Iteration über alle Keys.
- `-readonly`: Entfernt das `readonly` Attribut.
- Ergebnis: Ein Typ mit denselben Keys, aber **veränderbar**.

---

## 🗺️ Manuelles Mapping von Wochentagen (nicht empfohlen)

```ts
type weekMap = {
    day1: string;
    day2: string;
    day3: string;
    day4: string;
    day5: string;
    day6: string;
    day7: string;
}

let weekObj: weekMap = {
    day1: "monday",
    day2: "tuesday",
    day3: "wednesday",
    day4: "thursday",
    day5: "friday",
    day6: "saturday",
    day7: "sunday"
};
```

**Nachteil:** Umständlich und nicht skalierbar – lieber `Record` verwenden.

---

## 📋 Besser: `Record<Type1, Type2>`

```ts
type WeekDays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Schedule = Record<WeekDays, string>;

const schedule: Schedule = {
    Mon: "Math",
    Tue: "Science",
    Wed: "History",
    Thu: "English",
    Fri: "Art"
};
```

### Vorteile von `Record`:

| Vorteil                     | Beschreibung                                |
|----------------------------|---------------------------------------------|
| Einfach                    | Nur eine Zeile zur Definition                |
| Typ-sicher                 | Feste Keys möglich (z. B. `"Mon"`, `"Tue"`)  |
| Skalierbar                 | Ändere nur die `WeekDays` Definition        |

---

## ✅ Fazit

| Technik      | Nutzen                                              |
|--------------|-----------------------------------------------------|
| `-readonly`  | Entfernt Schreibschutz von Properties               |
| `Record`     | Schnelle Zuordnung von festen Keys zu Typen        |
| Map-Objekte  | Alternative ohne `Record`, aber nicht so elegant   |

