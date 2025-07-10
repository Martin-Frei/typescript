// Write a custom type that removes readonly from all properties of a given type T


type readOnlyType = {
    readonly id:number;
            name:string
}
type mutable<T> = {
    -readonly [K in keyof T] : T[K]  // some as a loop
}
type editUser = mutable<readOnlyType>


let pers1:editUser = {
    id:1,
    name:"Martin"
}

pers1.id = 2


// Create a map where each day of the week has a string value

type weekMap = {
    day1:string;
    day2:string;
    day3:string;
    day4:string;
    day5:string;
    day6:string;
    day7:string
}

let weekObj:weekMap = {
    day1:"monday",
    day2:"tuesday",
    day3:"wednesday",
    day4:"thuersday",
    day5:"friday",
    day6:"satureday",
    day7:"sunday"
}

type WeekDays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

type Schedule = Record<WeekDays, string>;

const schedule: Schedule = {
Mon: "Math",
Tue: "Science",
Wed: "History",
Thu: "English",
Fri: "Art"
};