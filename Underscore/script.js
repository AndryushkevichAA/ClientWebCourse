(function () {
    var people = [
        {
            name: "Ivan",
            age: 20
        },
        {
            name: "Anastasia",
            age: 29
        },
        {
            name: "Eva",
            age: 36
        },
        {
            name: "Aleksandr",
            age: 16
        },
        {
            name: "Oleg",
            age: 28
        },
        {
            name: "Svetlana",
            age: 30
        },
        {
            name: "Anastasia",
            age: 25
        },
        {
            name: "Oleg",
            age: 26
        },
        {
            name: "Petr",
            age: 39
        },
        {
            name: "Olga",
            age: 35
        }
    ];

    console.log(people);

    var averageAge = _.reduce(people, function (sum, person) {
        return sum + person.age;
    }, 0) / people.length;

    console.log("Average age = " + averageAge);

    var peopleBetween20And30 = _.chain(people)
        .filter(function (person) {
            return person.age >= 20 && person.age <= 30;
        })
        .sortBy("age")
        .value();

    console.log("People between 20 and 30: ");
    console.log(peopleBetween20And30);

    var peopleBetween20and30UniqNames = _.chain(people)
        .filter(function (person) {
            return person.age >= 20 && person.age <= 30;
        })
        .sortBy(function (person) {
            return -person.age;
        })
        .pluck("name")
        .uniq()
        .value();

    console.log("Uniq names of people between 20 and 30 in descending order:");
    console.log(peopleBetween20and30UniqNames);

    var namesWithNamesCounts = _.countBy(people, "name");

    console.log("Object of type \"name: count of people with this name\": ");
    console.log(namesWithNamesCounts);
})();