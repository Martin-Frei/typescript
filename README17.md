
# README17.md – TypeScript: Getter Decorators

## 🧩 Thema: Getter-Decorator mit `@accessor`

Diese Lektion zeigt, wie man mit einem Decorator (`@accessor`) das Verhalten eines **Getters** in einer Klasse beeinflussen kann.

---

## 🔍 Erklärung des Codes

```ts
function accessor(target: any, name: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get; // Original-Getter-Funktion speichern
    descriptor.get = function () {
        console.log(`Getting value from ${name}`); // Log-Ausgabe bei Zugriff
        return original?.apply(this); // ursprüngliche Getter-Methode ausführen
    }
}
```

- `target`: Referenz auf das Zielobjekt (z. B. die Klasse)
- `name`: Der Name der Eigenschaft (hier z. B. `"food"`)
- `descriptor`: Ein Objekt, das den Getter beschreibt (enthält `get`, `set`, etc.)
- Mit `descriptor.get = function()` wird die Getter-Methode überschrieben, um zusätzlich eine Konsolenausgabe zu erzeugen.

---

## 🧪 Anwendung des Decorators in einer Klasse

```ts
class item17 {
    private _price: number = 100;
    private _food: string = "beef";

    @accessor
    get food() {
        return [this._price, this._food];
    }
}
```

- Die Klasse `item17` hat zwei private Eigenschaften: `_price` und `_food`.
- Der Getter `food()` gibt beide Werte als Array zurück.
- Durch `@accessor` wird beim Zugriff auf `food` ein Logeintrag ausgegeben.

---

## 📦 Instanz und Getter-Aufruf

```ts
const item171 = new item17();
console.log(item171.food);
```

- Beim Zugriff auf `item171.food` wird durch den Decorator `Getting value from food` ausgegeben.
- Danach folgt der tatsächliche Rückgabewert: `[100, "beef"]`

---

## ✅ Ergebnis im Terminal

```
Getting value from food
[ 100, 'beef' ]
```

---

## 🧠 Fazit

- Mit Decorators lassen sich Methoden, Getter und Setter **ergänzen oder überschreiben**, ohne den Originalcode zu ändern.
- Besonders nützlich für Logging, Validierung, Zugriffskontrolle oder Metriken.
