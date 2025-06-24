
# TypeScript – Zusammenfassung Unterrichtseinheit 6: Abstrakte Klassen

## 📌 Ziel: Einführung in abstrakte Klassen, abstrakte Methoden und Vererbung

---

## 🧱 `abstract class Animal`

```ts
abstract class Animal {
    constructor(protected name: string) {
        this.name = name;
    }

    abstract makeSound(): void;

    move(): void {
        console.log("Moving.....");
    }
}
```

### 🔍 Erklärung Zeile für Zeile

- `abstract class`: Diese Klasse ist eine Vorlage. Sie **kann nicht direkt instanziiert werden**.
- `protected name`: Nur die Klasse selbst und abgeleitete Klassen haben Zugriff darauf.
- `abstract makeSound()`: Diese Methode muss **zwingend** in Unterklassen definiert werden – keine eigene Logik hier!
- `move()`: Eine konkrete Methode mit eigener Logik, die vererbt wird.

### 📦 Klasse `Dogs` erbt von `Animal`:

```ts
class Dogs extends Animal {
    makeSound(): void {
        console.log("Woow.....");
    }
    printName(): void {
        console.log(this.name);
    }
}
```

- `makeSound()`: Pflichtmethoden-Implementierung.
- `printName()`: Zugriff auf `protected name` aus der Oberklasse.

---

## 🧑‍🏫 Abstrakte Klasse `Person` + `Teacher`

```ts
abstract class Person {
    constructor(public name: string) {
        this.name = name;
    }

    abstract greet(): void;

    sayName(): void {
        console.log(`My Name is ${this.name}`);
    }
}

class Teacher extends Person {
    greet() {
        console.log(`Hello Students, I am ${this.name}`);
    }
}
```

- `sayName()`: konkrete Methode
- `greet()`: muss in `Teacher` definiert werden, sonst Fehler

---

## 🔌 Abstrakte Klasse `Appliance`

```ts
abstract class Appliance {
    constructor(public name: string) {
        this.name = name;
    }

    abstract turnOn(): void;

    describe(): void {
        console.log(`This is a ${this.name}`);
    }
}
```

- `abstract turnOn()`: Pflichtmethode für Unterklassen
- `describe()`: Standardverhalten – kann überschrieben werden, muss aber nicht

### 🔧 Subklassen: `Fan` & `WashingMachine`

```ts
class Fan extends Appliance {
    turnOn(): void {
        console.log(`${this.name} makes now fresh Air`);
    }

    describe(): void {
        console.log(`I am a ${this.name} and make fresh Air`);
    }
}

class WashingMachine extends Appliance {
    turnOn(): void {
        console.log(`${this.name} washes the laundry`);
    }

    describe(): void {
        console.log(`I am a ${this.name} and wash a lot of clothes`);
    }
}
```

- Beide Klassen implementieren ihre eigene `turnOn()`-Methode.
- Sie überschreiben `describe()` für eine individuelle Beschreibung.

---

## 🧪 Instanziierung und Ausführung

```ts
const myDevice = new Fan("Fancy Fan");
myDevice.turnOn();      // Fancy Fan makes now fresh Air
myDevice.describe();    // I am a Fancy Fan and make fresh Air

const myDevice2 = new WashingMachine("Big Washing Machine");
myDevice2.turnOn();     // Big Washing Machine washes the laundry
myDevice2.describe();   // I am a Big Washing Machine and wash a lot of clothes
```

---

## 🧠 Fazit

Mit abstrakten Klassen kannst du:
- Gemeinsamkeiten definieren (`describe`, `name`)
- Pflichtfunktionen erzwingen (`abstract turnOn`)
- saubere Architektur durch klare Rollentrennung erreichen

Du bist damit jetzt auf dem Weg zu **fortgeschrittener OOP mit TypeScript**! 🚀
