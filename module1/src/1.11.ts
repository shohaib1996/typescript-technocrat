{
    // ternary operator

    let age = 18
    const isAdult = age >= 18 ? "Adult" : "Not Adult"
    console.log(isAdult);

    // nullish coalesce 
    // null / undefined ==> decision making 

    // let someValue: string | null = null;
    let someValue: string | undefined = undefined;
    let result = someValue ?? "default";
    console.log(result); // Output: default

    someValue = "some non-null value";
    result = someValue ?? "default";
    console.log(result); // Output: some non-null value

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }


    const user: User = {
        name: "Shohaib",
        address: {
            city: "Dhaka",
            road: "Kalshi Road",
            presentAddress: "Mirpur 12"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "Not have permanent address"

    console.log(permanentAddress);
    

}