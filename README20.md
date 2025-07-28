# 📘 TypeScript Lektion 20 – `reduce()` auf zwei Arrays anwenden

In dieser Lektion geht es darum, wie du zwei Arrays – eines mit Werten (`number[]`) und eines mit Schlüsseln (`string[]`) – zu einem Objekt (`Record<string, number>`) kombinieren kannst. Dabei kommt die Methode `.reduce()` zum Einsatz.

---

## ✅ Der Code

```ts
let num20: number[] = [1, 2, 3, 4, 5, 6, 7];
let array: string[] = ["Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday", "Sunday"];

const anyName = array.reduce((accumulator, currentValue, index, array) => {
    if (!accumulator[currentValue]) {
        accumulator[currentValue] = num20[index];
    }
    return accumulator;
}, {} as Record<string, number>);

console.log(anyName);
console.log(typeof(anyName));
```

---

## 🔍 Erklärung

### 🎯 Ziel:
Zwei Arrays kombinieren – das eine liefert die **Schlüssel** (Wochentage), das andere die **Werte** (Zahlen).

### 🧠 Was passiert Schritt für Schritt?
1. `.reduce()` wird über das Array `array` (Wochentage) ausgeführt.
2. `accumulator` ist ein Objekt (`Record<string, number>`), das gesammelt wird.
3. `currentValue` ist jeweils ein Wochentag.
4. `index` gibt die aktuelle Position im Array an.
5. `num20[index]` greift auf den passenden Zahlenwert im `num20`-Array zu.
6. Die Bedingung `if (!accumulator[currentValue])` sorgt dafür, dass keine doppelten Schlüssel entstehen.
7. Das Ergebnis ist ein Objekt, in dem jedem Wochentag ein Zahlenwert zugewiesen ist.

---

## 📦 Ausgabe

```ts
{
  Monday: 1,
  Tuesday: 2,
  Wendsday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7
}
string
```

### Warum `typeof(anyName)`?  
- Gibt dir zur Laufzeit zurück, dass `anyName` ein Objekt ist (`"object"`). In TypeScript siehst du vorher schon den Typ (`Record<string, number>`), aber im echten JavaScript-Code brauchst du `typeof`.

---

## 🧠 Merksatz
> `.reduce()` ist dein Werkzeug, wenn du **aus vielen Werten einen Wert** machen willst – hier ein Objekt.

---

## 🧰 Verwendete Features

- `reduce()` – mächtige Array-Methode zur Aggregation
- `Record<string, number>` – vordefinierter Utility Type in TypeScript
- Zugriff mit Index über parallele Arrays

---

## 🧪 Bonus-Tipp
Statt `if (!accumulator[currentValue])` kann auch direkt zugewiesen werden, wenn du sicher bist, dass keine Duplikate vorkommen.

---

**✅ Sehr gute Anwendung von `reduce()` und parallel laufenden Arrays. Gut gemacht!**