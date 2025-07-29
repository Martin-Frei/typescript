
# 📘 TypeScript – Reduce Methoden und Array-Verarbeitung (README20)

## 🧠 Ziel
In dieser Lektion wurde der Umgang mit `.reduce()` in TypeScript vertieft, insbesondere für:
- Objektbildung aus Arrays
- Stringverkettung
- Berechnung von Maximum und Durchschnittswerten

---

## 🧪 Codebeispiele & Erklärungen

### 🔁 1. Mapping von Wochentagen auf Zahlen mit `reduce()`

```ts
let num20:number[] = [1, 2, 3, 4, 5, 6, 7];
let array:string[] = ["Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday", "Sunday"];

const anyName = array.reduce((accumulator, currentValue, index) => {
    if (!accumulator[currentValue])  {
        accumulator[currentValue] =  num20[index];
    }
    return accumulator;
},  {} as Record<string , number>);

console.log(anyName);
console.log(typeof(anyName));
```

📝 **Erklärung:** Wir erstellen ein Objekt mit Wochentagen als Schlüssel und den zugehörigen Zahlenwerten.  
Verwendet wird `reduce`, um aus zwei Arrays (`array` und `num20`) ein kombiniertes Objekt zu erstellen.

---

### 🧵 2. Verkettung aller Wochentage zu einem String

```ts
const anotherName = array.reduce((acc, curV) => {
    acc += curV + ",";
    return acc;
},"");

console.log(anotherName);
console.log(typeof(anotherName));
```

📝 **Erklärung:** Alle Wochentage werden zu einem einzigen String verbunden, getrennt durch Kommata.  
`.reduce()` startet mit einem leeren String als Anfangswert.

---

### 🔢 3. Das Maximum in einem Array finden

```ts
const maxNum = num20.reduce((acc, curV) => {
    if (!(acc > curV)) {
        acc = curV;
    }
    return acc;
}, 0);

console.log(maxNum);
```

📝 **Erklärung:** Es wird geprüft, ob `curV` größer ist als `acc`. Wenn ja, wird `acc` ersetzt.  
So bleibt am Ende der größte Wert übrig.

---

### 📊 4. Durchschnitt berechnen

```ts
const avgNum = num20.reduce((acc, curV) => {
    acc += curV;
    return acc;
}, 0);

console.log(avgNum / num20.length);
```

📝 **Erklärung:** Die Summe aller Zahlen wird berechnet und anschließend durch die Anzahl geteilt.  
Damit erhalten wir den Durchschnitt.

---

## 🧰 Gelernt

- Nutzung von `.reduce()` zur Umwandlung von Arrays in Objekte, Strings oder Werte
- Initialwerte bei `reduce()` sind entscheidend
- Datentypen wie `Record<string, number>` helfen, Ergebnisse typensicher zu gestalten

---

✅ **Tipp:** `reduce()` ist extrem mächtig, wenn man Transformationen oder Aggregationen in Arrays vornehmen will. Aber: Anfangswert und Datentypen sind entscheidend für korrektes Verhalten!
