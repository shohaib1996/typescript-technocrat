{
    // Learning Function

// Normal Function
function add(num1: number, num2: number): number{
    return num1 + num2
}

add(2, 2)

// Arrow Function

const addArrow = (num1: number, num2: number):number => num1 + num2

// Object --> function --> Method

const poorUser = {
    name: "Shohaib",
    balance: 0,
    // addBalance(balance: number): number{
    //     return this.balance + balance
    // }
    addBalance(balance: number): string{
        return `My new balance is : ${this.balance + balance}`
    }
}

const arr: number[] = [1, 4, 10];

const newArr: number[] = arr.map((element: number) => element*element);

}