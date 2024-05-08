{
    // nullable type 

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching");
        } else {
            console.log("There is nothing to search");
        }
    };
    // searchName("Hello")
    searchName(null)


    // Unknown Type
    //In TypeScript, the unknown type represents a type-safe counterpart of the any type. While any allows you to opt out of static type checking and perform any operation on it, unknown is more restrictive. With unknown, you can't perform any operations on it until you first narrow its type through type assertions or control flow analysis.

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed.toFixed(2)} ms^-1`);
        } else if (typeof value === "string") {
            const result = parseFloat(value.split(" ")[0])
            const convertedSpeed = (result * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed.toFixed(2)} ms^-1`);

        } else {
            console.log("Wrong input");

        }
    }

    getSpeedInMeterPerSecond("1000 kmh^-1")

    // Never type (Never return any type)

    const throwError = (msg: string): never => {
        throw new Error(msg);
    }

    // throwError("Vhul hoye giyeche")




}