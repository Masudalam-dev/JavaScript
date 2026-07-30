// Naming of Constructor Function with Capital Letter
// Why do we use Constructor Function instead of Object? 👉 To avoid repetitiveness.

// Object 
const person1 = {
    name: "Masud",
    age: "23",
    skills: ["HTML", "CSS", "JS", "Python", "German"],
    hobbies: ["Swimming", "Cricket", "Reading"]
}

const person2 = {
    name: "Roman",
    age: 23,
    skill: "C++",
}

const person3 = {
    name: "Tom",
    age: 21,
    language: ["French", "Deutsch", "Spanish", "Hindi", "Englisch"]
}

// Instead of writing 3 different objects we can create a constructor function and just assign the values

function Employees(name, age, skill, hobbies, language) {
    this.name = name;
    this.age = age;
    this.skill = skill;
    this.hobby = hobbies;
    this.sprache = language;
}

const employee1 = new Employees("Masud", 23, ["HTML","CSS", "Js"], "Swimming", "German");
console.log(employee1);

const employee2 = new Employees("Roman", 20, "French");
console.log(employee2.age);


// We can also use call method inside constructor function.