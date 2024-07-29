// Type Conversion and Type Assertion
// let unknownValue: unknown = "This is a string";
// let stringValue: string = unknownValue as string; // Type Assertion

// // Type Casting
// let numberValue: number = Number("123"); // Type Conversion

// // Classes, readonly, and Inheritance
// class Animal {
//     readonly species: string;

//     constructor(species: string) {
//         this.species = species;
//     }

//     makeSound(): string {
//         return "Some generic sound";
//     }
// }

// class Dog extends Animal {
//     constructor() {
//         super("Dog");
//     }

//     makeSound(): string {
//         return "Bark";
//     }
// }

// const myDog = new Dog();
// console.log(myDog.species); // Dog
// console.log(myDog.makeSound()); // Bark

// // Generics with infer and Conditional Types
// type ExtractArrayType<T> = T extends (infer U)[] ? U : never;

// type StringArray = ExtractArrayType<string[]>; // string
// type NumberArray = ExtractArrayType<number[]>; // number
// type NotArray = ExtractArrayType<string>; // never

// const fetchData = <TData>(url: string): Promise<TData> => {
//     return fetch(url)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json() as Promise<TData>;
//         });
// };

// Record
type User = {
    id: number;
    name: string;
};

const users: Record<number, User> = {
    1: { id: 1, name: "Alice" },
    2: { id: 2, name: "Bob" },
};

// Function returning a string
function greetUser(userId: number): string {
    const user = users[userId];
    return user ? `Hello, ${user.name}!` : "User not found.";
}

console.log(greetUser(1)); // Hello, Alice!
console.log(greetUser(3)); // User not found.
