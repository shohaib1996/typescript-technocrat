{

    // Spread Operator
    const brothers1: string[] = ["khan", "mel", "alex"];
    const brothers2: string[] = ["Rose", "Gibs", "Bill"];

    brothers1.push(...brothers2)

    const mentors1 = {
        typescript: "Mosh",
        redux: "Grace",

    }
    const mentors2 = {
        next: "mitul",
        graphQl: "sakil"
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    // Rest Operator

    const greetFriends = (...friends: string[]) => {

        friends.forEach((friend: string) => console.log(`Hi, ${friend}`) )
       
    }

    greetFriends("Alex", "Ron", "Harry")


    // Destructuring

}