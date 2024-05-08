{
    // Type assertion
    //In TypeScript, a type assertion is a way to tell the compiler "trust me, I know what I'm doing with this type". It's like a type cast in other languages, but it doesn't perform any special checking or restructuring of data at runtime – it's purely a compile-time construct to satisfy the compiler.

    // It's important to note that type assertions do not change the underlying object – they only affect how TypeScript treats the value's type in the code. If the value is not actually of the asserted type at runtime, you might encounter runtime errors. Therefore, it's recommended to use type assertions carefully and only when you are certain about the type of the value.

    let someValue1: any = "this is a string";
    let strLength1: number = (<string>someValue1).length;

    let someValue2: any = "this is a string";
    let strLength2: number = (someValue2 as string).length;


    const kgToGm = (value: string | number): string | number | undefined => {
        if(typeof value === "string"){
            const convertedValue = parseFloat(value) *1000
            return `The converted value is : ${convertedValue}`
        }else if(typeof value === "number"){
            return value * 1000
        }
    }

    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm('1000') as string;

    type CustomError = {
        message: string;
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
    }



}