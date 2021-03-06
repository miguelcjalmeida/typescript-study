﻿// Example 1
(function () {
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }

    let greeter = new Greeter("world");
})();

// Example 2
(function () {
    class Animal {
        public name: string;
        public constructor(theName: string) { this.name = theName; }
        public move(distanceInMeters: number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }

    class Horse extends Animal {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");

    sam.move();
    tom.move(34);
})();

// Example 3
(function () {
    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    class Rhino extends Animal {
        constructor() { super("Rhino"); }
    }

    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;
    //animal = employee; // Error: 'Animal' and 'Employee' are not compatible
})();

// Example 4
(function () {
    class Person {
        protected name: string;
        constructor(name: string) { this.name = name; }
    }

    class Employee extends Person {
        private department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    //console.log(howard.name); // error
})();

// Example 5
(function () {
    class Person {
        protected name: string;
        protected constructor(theName: string) { this.name = theName; }
    }

    // Employee can extend Person
    class Employee extends Person {
        private department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let howard = new Employee("Howard", "Sales");
    //let john = new Person("John"); // Error: The 'Person' constructor is protected
})();

(function () {
    console.log("Example 6: ");

    class Octopus {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor(theName: string) {
            this.name = theName;
        }
    }
    let dad = new Octopus("Man with the 8 strong legs");
    //dad.name = "Man with the 3-piece suit"; // error! name is readonly.
})();

(function () {
    console.log("Example 7: ");

    class Octopus {
        readonly numberOfLegs: number = 8;
        constructor(readonly name: string) {
        }
    }
})();
// Example 8
(function () {
    console.log("Example 8: ");
    class Employee {
        fullName: string;
    }

    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
})();
// Example 9
(function () {
    console.log("Example 9: ");
    let passcode = "secret passcode";

    class Employee {
        private _fullName: string;

        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }

    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
})();
// Example 10
(function () {
    console.log("Example 10: ");
    class Grid {
        static origin = { x: 0, y: 0 };
        calculateDistanceFromOrigin(point: { x: number; y: number; }) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor(public scale: number) { }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

})();

// Example 11
(function () {
    console.log("Example 11: ");
    abstract class Animal {
        abstract makeSound(): void;
        move(): void {
            console.log("roaming the earth...");
        }
    }
})();


// Example 12
(function () {
    console.log("Example 12: ");
    abstract class Department {

        constructor(public name: string) {
        }

        printName(): void {
            console.log("Department name: " + this.name);
        }

        abstract printMeeting(): void; // must be implemented in derived classes
    }

    class AccountingDepartment extends Department {

        constructor() {
            super("Accounting and Auditing"); // constructors in derived classes must call super()
        }

        printMeeting(): void {
            console.log("The Accounting Department meets each Monday at 10am.");
        }

        generateReports(): void {
            console.log("Generating accounting reports...");
        }
    }

    let department: Department; // ok to create a reference to an abstract type
    //department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    //department.generateReports(); // error: method doesn't exist on declared abstract type
})();

// Example 13
(function () {
    console.log("Example 13: ");
    class Greeter {
        static standardGreeting = "Hello, there";
        greeting: string;
        greet() {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        }
    }

    let greeter1: Greeter;
    greeter1 = new Greeter();
    console.log(greeter1.greet());

    let greeterMaker: typeof Greeter = Greeter;
    greeterMaker.standardGreeting = "Hey there!";

    let greeter2: Greeter = new greeterMaker();
    console.log(greeter2.greet());

    let greeter3: Greeter = new Greeter();
    console.log(greeter3.greet());
})();

// Example 14
(function () {
    console.log("Example 14: ");
    class Point {
        x: number;
        y: number;
    }

    interface Point3d extends Point {
        z: number;
    }

    let point3d: Point3d = { x: 1, y: 2, z: 3 };
})();
