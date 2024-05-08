{
    // Utility types 
    // pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    };

    type NameAge = Pick<Person, "name" | "age">

    //Omit

    type ContactInfo = Omit<Person, "name" | "age">

    // Required

    type PersonRequired = Required<Person>

    // Partial

    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>
    const person1: PersonReadonly = {
        name: "Shohaib",
        age: 27,
        contactNo: "01303429044"
    }

    // person1.name = "Mr.x"
     // Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

//   EmptyObj.name = "Shohaib"

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    // e: 6,
  };

    
}