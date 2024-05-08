{
    // Destructuring

    const userInfo = {
        id: 123,
        name: {
            firstName: "Shohaib",
            lastName: "Hossain",
        },
        contactNo: "01303429044",
        address: "Bangladesh",
    }

    const {
        contactNo,
        name: { lastName: lstName }
    } = userInfo

    // Array Destructuring

    const myFriends: string[] = ["Ross", "Rachel", "Mel", "Monica", "Pho"];

    // const [a, b, c] = myFriends
    const [, , bestFriend, ...restFriend] = myFriends
}