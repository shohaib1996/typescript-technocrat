{
    // Generic with interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartwatch: T;
        bike?: X;
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmilabWatch> = {         // null
        name: "shohaib",
        computer: {
            brand: "Asus",
            model: "Thinkpad",
            releaseYear: 2016
        },
        smartwatch: {
            brand: "Emilab",
            model: "Kw66",
            display: "OLED"
        }
    }
    interface AppleWatch {
        brand: string;
        model: string;
        hearTrack: boolean;
        sleepTrack: boolean;
    }

    interface YahamaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<AppleWatch, YahamaBike> = {
        name: "Rich Dev",
        computer: {
            brand: "Apple",
            model: "Thinkpad",
            releaseYear: 2016
        },
        smartwatch: {
            brand: "Apple",
            model: "Kw66",
            hearTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: "Yahama",
            engineCapacity: "100cc",
        }
    }

}