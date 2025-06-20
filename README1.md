# typescript
# TypeScript1.ts – Zusammenfassung der ersten Stunde 

## 🧩 Type Annotations
Mit Typ-Annotationen wird explizit festgelegt, welchen Typ eine Variable haben soll (z. B. `string`, `number`, `boolean`, `string[]`). Das erhöht die Lesbarkeit und reduziert Laufzeitfehler.

## 🧠 Type Inference
TypeScript erkennt den Typ automatisch beim Zuweisen eines Werts. Beispiel: `let city = "Legos"` erzeugt automatisch den Typ `string`. Eine spätere Zuweisung eines anderen Typs führt zu einem Fehler.

## 🔀 Union Types
Mit dem `|`-Operator können Variablen mehrere erlaubte Typen bekommen, z. B. `string | number | boolean`. Nützlich, wenn z. B. IDs als Zahl oder String vorkommen.

## 🔗 Intersection Types
Mehrere Typdefinitionen können mit `&` kombiniert werden. So entsteht ein neuer Typ, der **alle Eigenschaften** der beteiligten Typen vereint – z. B. ein `Staff`, der sowohl `Person` als auch `Employee` ist.

## ⚙️ Funktionen mit Typen
Funktionen erhalten klare Eingabe- und Rückgabe-Typen. Das sorgt für Typensicherheit bei der Verwendung und macht die Funktion leichter nachvollziehbar und wartbar.

function add(a:number, b:number) {
    return a + b
}
console.log(add(3,5))  


