{
    // constraints


    const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course,
        };
    };

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 222,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });

    console.log(student1);


    const student2 = addCourseToStudent({
        id: 333,
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });

    const student3 = addCourseToStudent({
        id: 444,
        email: "z@gmail.com",
        name: "Mr. Z" ,
        emnei: "emnei"
    })







    //
}