{
    // Type alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string
    } 
    const student1: Student = {
        name: "shohaib",
        age: 27,
        gender: "Male",
        contactNo: "01300000000",
        address: "Dhaka"
    }

    const student2: Student = {
        name: "Khan",
        age: 24,
        gender: "Male",
        address: "Chittagong"
    }
    const student3: Student = {
        name: "Khan",
        age: 24,
        gender: "Male",
        address: "Chittagong"
    }

    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1 + num2
}