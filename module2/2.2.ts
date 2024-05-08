{
    // Interface
    type User1 = {
        name: string;
        age: number;
    }

    // add another object to previous one 
    type UserWithRole1 = User1 & { role: string }

    const user: UserWithRole1 = {
        name: "shohaib",
        age: 27,
        role: "Web developer",
    }

    // add another object in interface
    // we can use type at interface by extends it vice versa
    interface UserWithRole2 extends User2 {
        role: string;
    }

    const intUser: UserWithRole2 = {
        name: "khan",
        age: 27,
        role: "Manager",
    }

    interface User2 {
        name: string;
        age: number;
    }

    // const user: User1 = {
    //     name: "shohaib",
    //     age: 27,
    // }

    // const intUser: User2 = {
    //     name: "khan",
    //     age: 27,
    // }

    // Interface only can do in object. On the other hand type alias can be used in primitive data type.

    // We can use interface in array also though it only supports in object

    type Roll1 = number[];

    // we can use interface by index number

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber2: Roll2 = [1, 2, 3]

    const rollNumber1: Roll1 = [1, 2, 3]

    type Add1 = (num1: number,num2:number)=> number

    interface Add2 {
       (num1: number, num2: number): number
    }

    const add1: Add1 = (num1 , num2 )=> num1+num2
    const add2: Add2 = (num1 , num2 )=> num1+num2

}