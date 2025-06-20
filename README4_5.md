
# TypeScript – Zusammenfassung der Unterrichtsstunden 4 & 5

## 🔐 Zugriffsschutz in Klassen

TypeScript kennt drei Zugriffstypen für Klasseneigenschaften:

| Modifier     | Zugriff von außen | Zugriff in Unterklassen | Beschreibung |
|--------------|-------------------|--------------------------|--------------|
| `public`     | ✅ Ja             | ✅ Ja                    | Überall sichtbar |
| `private`    | ❌ Nein           | ❌ Nein                  | Nur innerhalb der Klasse |
| `protected`  | ❌ Nein           | ✅ Ja                    | Klasse + Unterklassen |

Beispiel aus der Klasse `Car`:
```ts
class Car {
  public brand: string;
  private mileage: number;
  protected fuelType: string;

  constructor(brand: string, mileage: number, fuelType: string) {
    this.brand = brand;
    this.mileage = mileage;
    this.fuelType = fuelType;
  }

  showMileage() { ... }
  showBrandMileage() { ... }
  manipulateMileage() { ... }
}
```

---

## 🧑‍🍳 Klasse `Chef`
Verwendung von `private` (Gehalt) und `protected` (Spezialität). Nur die Klasse selbst hat Zugriff auf das Gehalt, Spezialgebiet ist für Unterklassen zugänglich.

---

## 🏦 Klasse `Bank` – Methoden zur Kontoführung
```ts
class Bank {
  public accHolder: string;
  private actualyBalance: number;

  constructor(...) {...}

  showBalance() {...}
  makeDeposit(balance: number) {...}
  makeWithdraw(balance: number) {...}
}
```
➡️ Balance kann nur über Methoden verändert werden. Das schützt die Daten.

---

## 📚 Klasse `Book` – private Methode im Einsatz

```ts
class Book {
  public title: string;
  private price: number;

  public displayInfo() {
    console.log(...);
    this.printprice();
  }

  private printprice() {
    return `Price: ${this.price} $`;
  }

  public showInfo() {
    console.log(`Title is : ${this.title} The Price is : ${this.price}`);
  }
}
```

✅ `printprice()` ist **nicht von außen aufrufbar** – nur intern über `displayInfo()`.

---

## 👤 Klasse `bioData` + Vererbung mit `person1`

```ts
class bioData {
  private ssn: string;
  protected nationality: string;

  private getSsn() { return this.ssn; }
  protected showNationality() {...}
}
class person1 extends bioData {
  introduction() {
    this.showNationality();  // ✅ erlaubt
    console.log(...);
  }
}
```

➡️ `ssn` bleibt geschützt – Zugriff nur über die Methode `getSsn()`, die wiederum privat bleibt.  
➡️ Vererbung nutzt `super()` zum Weitergeben von Parametern.

---

## 🧠 Fazit

Du kannst jetzt:
- Mit `public`, `private` und `protected` **Zugriff kontrollieren**
- **Vererbung** umsetzen (`extends`, `super()`)
- **Methoden und Felder** gezielt kapseln
- **Interne Logik absichern** durch private Methoden

🧭 Nächster Schritt: Abstrakte Klassen, Interfaces mit Klassen, Polymorphismus und Verhaltensvererbung.
