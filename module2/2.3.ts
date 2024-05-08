{
    // Generics

    type GenericsArray<T> = Array<T>

    // const rollNumbers: number[] = [3, 6, 8];
    // const rollNumbers: Array<number> = [3, 6, 8];
    const rollNumbers: GenericsArray<number> = [3, 6, 8];


    // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
    // const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
    const mentors: GenericsArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

    // const boolArray: boolean[] = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
    const boolArray: GenericsArray<boolean> = [true, false, true];

    // const user: GenericsArray<{ name: string, age: number }> = [
    //     {
    //         name: "Mezba",
    //         age: 100,
    //     },
    //     {
    //         name: "Jhankar Mahbub",
    //         age: 110,
    //     },
    // ];

    interface User {
        name: string;
        age: number;
    }

    const user: GenericsArray<User> = [
        {
            name: "Mezba",
            age: 100,
        },
        {
            name: "Jhankar Mahbub",
            age: 110,
        },
    ];
    // generic tuple
    
    type GenericTuple<X, Y> = [X, Y];

    const human: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

    const UserWithID: GenericTuple<number, { name: string; email: string }> = [
        1234,
        { name: "persian", email: "a@gmail.com" },
    ];




}