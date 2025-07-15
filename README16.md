# TypeScript – README16.md  
## 🎯 Thema: Enums & Decorators

---

## 🔢 ENUMS – Aufzählungstypen

Mit Enums kannst du Gruppen von benannten Konstanten definieren. Sie verbessern die Lesbarkeit und verhindern magische Zahlen (z. B. `0`, `1`, `2`) im Code.

```ts
enum direction {
    up,       // = 0
    down,     // = 1
    left,     // = 2
    right     // = 3
}

let move: direction = direction.down;
console.log(move);  // Ausgabe: 1
```

Enums zählen **automatisch hoch**, beginnend mit 0, sofern nichts anderes angegeben wird.

---

### 🔠 Enum mit benutzerdefinierten Werten

```ts
enum status10 {
    pending = 1,
    approved = 2,
    rejected = 3,
    yes = "YES"
}
```

- `console.log(status10.approved)` → `2`
- `console.log(status10[2])` → `"approved"` (nur bei nummerischen Werten rückwärts möglich)
- `console.log(status10.yes)` → `"YES"`
- `console.log(status10[4])` → `undefined` (existiert nicht)

**⚠️ Hinweis:** Nur numerische Enums erlauben "reverse lookup" (Wert ➝ Schlüssel).

---

## 🧩 DECORATORS – Erweiterte Funktionen (Meta-Programmierung)

Decorators sind spezielle Funktionen, die z. B. Methoden oder Klassen zur **Laufzeit verändern** oder **ergänzen**.

### 🧪 Beispiel: Methodendekorator `@logMethod`

```ts
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Called ${propertyKey} with`, args);
        return original.apply(this, args);
    };
}
```

- `target` ist die Klasse, auf der die Methode definiert ist.
- `propertyKey` ist der Name der Methode.
- `descriptor.value` ist die ursprüngliche Methode.

### 💡 Verwendung:

```ts
class calculator {
    @logMethod
    add(a: number, b: number): number {
        return a + b;
    }
}
const calc = new calculator();
console.log(calc.add(5, 5));
```

**Was passiert?**  
Wenn `add(5, 5)` aufgerufen wird:
1. Wird die dekorierte Methode abgefangen
2. Ein Log wird ausgegeben:  
   ➤ `Called add with [5, 5]`  
3. Dann wird die Originalmethode ausgeführt

---

## ✅ Fazit

| Thema     | Nutzen                                                  |
|-----------|---------------------------------------------------------|
| `enum`    | Bessere Lesbarkeit und Kontrolle über fixe Werte        |
| Decorator | Erweitert Verhalten von Methoden (Logging, Validation)  |

---

📌 **Voraussetzung:**  
Decorators sind experimentell und müssen im Compiler aktiviert werden:  
```json
"experimentalDecorators": true
```
