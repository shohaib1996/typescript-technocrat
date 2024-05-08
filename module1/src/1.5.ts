// Reference Type --> Object

const user: {
    //company: "TS4U"; // type --> literal types
    readonly company: string;
    firstName: string;
    middleName?: string; // optional type (?)
    lastName: string;
    isMarried: boolean
} = {
    company: "TS4U",
    firstName: "Shohaib",
    // middleName: "Hossain",
    lastName: "khan",
    isMarried: false
}
