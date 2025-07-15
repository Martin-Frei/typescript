
# README18.md – TypeScript: Omit & ReturnType

In dieser Lektion wurden zwei sehr nützliche Utility Types behandelt: `Omit<T, K>` und `ReturnType<T>`.

---

## ✂️ `Omit<T, K>` – Eigenschaften ausschließen

Mit `Omit` können bestimmte Eigenschaften aus einem Typ **entfernt** werden.

```ts
type customer = {
    email: string;
    adresse: string;
};

type newCustomer = Omit<customer, "email">;

const consumer: newCustomer = {
    adresse: "Rosenheim"
};
```

➡️ `email` wird ausgeschlossen – nur `adresse` bleibt übrig.

---

```ts
type blogPosts = {
    title: string;
    content: string;
    published: boolean;
    id: number;
    create_at: number;
};

type postInput = Omit<blogPosts, "id" | "create_at">;

const newPost: postInput = {
    title: "NewPosts",
    content: "This is a new Blog Post",
    published: false
};
```

➡️ Hilfreich z. B. beim Erstellen eines neuen Blogposts ohne automatisch generierte Felder (`id`, `create_at`).

---

## 🔁 `ReturnType<typeof func>` – Rückgabewert automatisch ableiten

Mit `ReturnType` wird automatisch der Typ abgeleitet, den eine Funktion zurückliefert.

```ts
function getUser() {
    return {
        id: 1,
        name: "frank",
        email: "fank@frank.de"
    };
}

type userReturn = ReturnType<typeof getUser>;

const result2: userReturn = {
    id: 1,
    name: "frank",
    email: "frank@frank.de"
};
```

➡️ Nützlich, wenn du mehrere Funktionen hast, die denselben Rückgabetyp verwenden sollen.

---

```ts
function getProduct() {
    return {
        name: "noodel",
        price: 12.99,
        describtion: "fast cooked noodle"
    };
}

type userProduct = ReturnType<typeof getProduct>;

const result3: userProduct = {
    name: "fish",
    price: 6.99,
    describtion: "for the fast cooked noodle"
};
```

---

✅ **Fazit**:  
Mit `Omit` kannst du gezielt Eigenschaften ausschließen – und mit `ReturnType` Typen aus Rückgabewerten automatisch ableiten. Das macht deinen Code flexibler und wiederverwendbarer.

