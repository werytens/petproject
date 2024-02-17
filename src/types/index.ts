// // Awaited<T> - это специальный тип, который может быть использован для обозначения типа, который будет возвращен из асинхронной функции.
// async function getData(): Promise<string> {
//   return "hello";
// }

// let awaitedData: Awaited<ReturnType<typeof getData>>;

// interface Person {
//   name: string;
//   age: number;
// }

// // Partial<T> - делает все свойства объекта типа T необязательными.
// let partialPerson: Partial<Person>;

// // Required<T> - делает все свойства объекта типа T обязательными.

// // interface Person {
// //   name?: string;
// //   age?: number;
// // }

// let requiredPerson: Required<Person>;
// // теперь requiredPerson может быть { name: string; age: number; }

// // Readonly<T> - делает все свойства объекта типа T доступными только для чтения.
// interface Point {
//   x: number;
//   y: number;
// }
// let readonlyPoint: Readonly<Point>;
// // теперь readonlyPoint может быть { readonly x: number; readonly y: number; }

// // Record<Keys, Type> - создает тип, который является записью с ключами, определенными в первом параметре, и значениями типа, определенного во втором параметре.

// type Keys = 'a' | 'b' | 'c';
// type RecordType = Record<Keys, number>;

// let record: RecordType;
// // теперь record может быть { a: number, b: number, c: number }

// // Pick<T, K extends keyof T> - выбирает свойства объекта типа T с ключами, указанными в K.

// interface Person {
//   name: string;
//   age: number;
// }

// let pickedPerson: Pick<Person, 'name'>;
// // теперь pickedPerson может быть { name: string; }

// // Omit<T, K extends keyof T> - выбирает свойства объекта типа T, исключая те, которые указаны в K

// interface Person {
//   name: string;
//   age: number;
// }

// let omittedPerson: Omit<Person, 'age'>;
// // теперь omittedPerson может быть { name: string; }

// // Exclude<UnionType, ExcludedMembers> - исключает определенные типы из объединенного типа.

// type A = 'a' | 'b' | 'c';
// type B = Exclude<A, 'a' | 'b'>;
// // теперь B это 'c'

// // Extract<Type, Union> - извлекает из типа Type только те типы, которые присутствуют в Union.

// type A = 'a' | 'b' | 'c';
// type B = 'a' | 'b';
// type C = Extract<A, B>;
// // теперь C это 'a' | 'b'

// // NonNullable<Type> - извлекает тип из Type, исключая null и undefined.

// let value: string | null | undefined;
// let nonNullableValue: NonNullable<typeof value>;
// // теперь nonNullableValue это string

// // Parameters<Type> - извлекает типы аргументов функции Type.

// function foo(a: string, b: number) {}
// type FooParameters = Parameters<typeof foo>;
// // теперь FooParameters это [string, number]

// // ConstructorParameters<Type> - извлекает типы аргументов конструктора Type.

// class Foo {
//     constructor(a: string, b: number) {}
// }
// type FooConstructorParameters = ConstructorParameters<typeof Foo>;
// // теперь FooConstructorParameters это [string, number]

// // ReturnType<Type> - извлекает тип возвращаемого значения функции Type.

// function foo(): string { return 'hello'; }
// type FooReturnType = ReturnType<typeof foo>;
// // теперь FooReturnType это string

// // InstanceType<Type> - извлекает тип экземпляра класса Type.

// class Foo { x: number }
// type FooInstance = InstanceType<typeof Foo>;
// // теперь FooInstance это { x: number }

// // ThisParameterType<Type> - извлекает тип this из функции Type.

// class Foo {
//     x: number;
//     method(this: this): void { }
// }
// type ThisType = ThisParameterType<Foo["method"]>;
// // теперь ThisType это Foo

// // OmitThisParameter<Type> - определяет функцию без типа this.

// class Foo {
//     x: number;
//     method(this: this): void { }
// }
// type MethodType = OmitThisParameter<Foo["method"]>;
// // теперь MethodType это () => void

// // ThisType<Type> - добавляет тип this к функции Type.

// class Foo {
//     x: number;
//     method(): void { }
// }
// type MethodType = ThisType<Foo["method"]>;
// // теперь MethodType это (this: Foo) => void

// // Uppercase<StringType>, Lowercase<StringType>, Capitalize<StringType>, Uncapitalize<StringType> - это утилитные типы для манипуляции строками, которые изменяют регистр строки в соответствии с их именем.

// type Uppercased = Uppercase<'hello'>; // 'HELLO'
// type Lowercased = Lowercase<'Hello'>; // 'hello'
// type Capitalized = Capitalize<'hello'>; // 'Hello'
// type Uncapitalized = Uncapitalize<'Hello'>; // 'hello'


export type Test = 'test';