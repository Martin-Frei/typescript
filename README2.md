
# TypeScript – Zusammenfassung der zweiten Stunde

## 🧱 interface vs. type  
Mit `interface` und `type` kannst du in TypeScript Datenstrukturen definieren.

- `interface`:  
  - Beschreibt Objektformen  
  - Kann mit `extends` erweitert werden  
  - Kann mehrfach deklariert werden (praktisch bei Klassen)

- `type`:  
  - Flexibler (z. B. für Union, Intersection, Funktionen)  
  - Erweiterung mit `&` (Schnittmenge)  
  - **Nicht** mehrfach deklarierbar

Beispiele:
```ts
interface User {
  name: string;
  age: number;
}

type Id = {
  name: string;
  age: number;
}
```

---

## 🔗 Erweiterung und Kombination  
- Mit `interface` nutzt du `extends`  
- Mit `type` nutzt du den `&` Operator (Intersection)

```ts
interface UserInfo extends User {
  jobTitle: string;
}

type personalInfo = Id & {
  jobTitle: string;
}
```

Damit entsteht jeweils ein neuer Typ mit allen Eigenschaften beider Quellen.

---

## 🎯 Literal Union Types  
Du kannst Werte auf bestimmte erlaubte Optionen beschränken – ähnlich wie bei Enums.

```ts
type status = "loading" | "success" | "error";
let pageStatus: status = "loading";
```

Nur die drei vorgegebenen Werte sind erlaubt.

---

## 🧩 Optional (?) und readonly Eigenschaften  
- `?` → Feld ist **optional** (kann, muss aber nicht da sein)  
- `readonly` → Feld ist **schreibgeschützt** (nach der Zuweisung nicht mehr veränderbar)

Beispiel:
```ts
interface Product {
  name: string;
  readonly id: string;
  description?: string;
}
```

---

## 🛒 Kombination mit readonly & Intersection  
Du kannst `readonly` auch in kombinierten Typen verwenden:

```ts
interface Meat {
  meatName: string;
  meatWeight: number;
  readonly meatPrice: number;
}

type Shop = Meat & {
  shopPlace: string;
}

let purchase: Shop = {
  meatName: "beef",
  meatWeight: 25,
  meatPrice: 15,
  shopPlace: "hotel"
};
```

---

## ⚠️ Schreibschutz beachten  
```ts
// purchase.meatPrice = 20; ❌ Fehler: readonly-Eigenschaft darf nicht geändert werden
```

---


