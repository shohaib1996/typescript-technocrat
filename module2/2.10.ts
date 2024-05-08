{
    // mapped type

    const arrOfNumbers: number[] = [1, 4, 5];

    // const arrOfString: string[] = ['1', '4', '5']

    const arrOfString: string[] = arrOfNumbers.map((number) => number.toString())

    console.log(arrOfString);

    type AreaNumber = {
        height: number;
        width: number;
    };

    // type AreaString = {
    //   height: string;
    //   width: string
    // }

    // T => {height:string;width:number}
    // key => T["width"]

    type AreaString<T> = {
        // [key in keyof AreaNumber] : string
        [key in keyof T]: T[key]
    }

    const area1: AreaString<{ height: string; width: number }> = {
        height: "100",
        width: 50,
    };





    //
}