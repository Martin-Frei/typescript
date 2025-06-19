
# TypeScript – Zusammenfassung der dritten Stunde

## 🧱 Klassen (class) in TypeScript

Mit `class` definierst du in TypeScript Baupläne für Objekte. Eine Klasse enthält:
- Eigenschaften (Variablen)
- Methoden (Funktionen)
- Einen `constructor`, um bei der Erstellung Werte zu übergeben

Beispiel:
```ts
class Person {
  name1: string;

  constructor(name1: string) {
    this.name1 = name1;
  }

  greetings() {
    console.log(`Hello, my name is ${this.name1}`);
  }
}

const person1 = new Person("Martin");
person1.greetings(); // → Hello, my name is Martin
```

---

## 🔁 Klassen vs. Funktionen

Eine einfache Funktion:
```ts
function greetings(name1: string) {
  console.log(`Hello, my name is ${name1}`);
}
```

✅ Diese Funktion gibt nur einmal etwas aus – sie speichert keinen Zustand.  
✅ Eine Klasse speichert dauerhaft Werte (z. B. Name) und ist wiederverwendbar.

---

## 👨‍🎓 Klasse `Student`

```ts
class Student {
  fullName: string;
  level: number;

  constructor(fullName: string, level: number) {
    this.fullName = fullName;
    this.level = level;
  }

  introduces() {
    console.log(`Hi, I am ${this.fullName}`);
    console.log(`Hi, I am ${this.level}. Level`);
  }

  promote() {
    this.level++;
    console.log(`${this.fullName} has been promoted to Level ${this.level}`);
  }
}
```

Anwendung:
```ts
const promot = new Student("Martin", 1);
promot.introduces();
promot.promote();
promot.promote();
```

➡️ `Student` speichert einen Zustand (`level`) und verändert ihn mit `promote()`.

---

## ➕ Rechenbeispiel: Klasse `Add`

```ts
class Add {
  num1: number;
  num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  toAdd() {
    console.log(`Sum is: ${this.num1 + this.num2}`);
  }
}

const sum = new Add(5, 5);
sum.toAdd(); // → Sum is: 10
```

---

## 🔄 Vergleich: Funktion vs. Klasse

| Funktion           | Klasse                          |
|--------------------|----------------------------------|
| Einmalige Logik    | Wiederverwendbarer Bauplan       |
| Kein Zustand       | Hat eigenen Zustand (`this.xyz`) |
| Einfach             | Strukturiert, OOP-konform        |

---

## 🧠 Fazit

Du kannst jetzt:
- Klassen mit Eigenschaften und Methoden definieren
- Konstruktoren verwenden, um Initialwerte zu setzen
- Objektzustand speichern und verändern
- Objektmethoden aufrufen (`.greetings()`, `.promote()`)

🧭 Nächster Schritt: Vererbung, Zugriffsschutz (`private`, `public`) und abstrakte Klassen.
