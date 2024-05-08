{
    // Union types
    type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";

    const newDeveloper: FrontendDeveloper = "fakibazDeveloper";

    type User = {
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "O-";
    }

    const user1: User = {
        name: "Shohaib",
        gender: "male",
        bloodGroup: "O-"
    }

    // Intersection 

    type FrontDeveloper = {
        skills: string[];
        designation1: 'FrontendDeveloper';
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: "BackendDeveloper";
    }

    type FullstackDeveloper = FrontDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ["HTML", "CSS", "Express"],
        designation1: "FrontendDeveloper",
        designation2: "BackendDeveloper",
    }
}