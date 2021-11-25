(function () {
    var countries = [
        {
            name: "Россия",
            cities: [
                {
                    name: "Москва",
                    population: 12655050
                },
                {
                    name: "Санкт-Петербург",
                    population: 5384342
                },
                {
                    name: "Новосибирск",
                    population: 1620162
                },
                {
                    name: "Екатеринбург",
                    population: 1495066
                },
                {
                    name: "Казань",
                    population: 1257341
                },
                {
                    name: "Нижний Новгород",
                    population: 1263650
                }
            ]
        },
        {
            name: "Китай",
            cities: [
                {
                    name: "Шанхай",
                    population: 22315426
                },
                {
                    name: "Пекин",
                    population: 18827000
                },
                {
                    name: "Гуанчжоу",
                    population: 11070654
                },
                {
                    name: "Гонконг",
                    population: 7055071
                }
            ]
        },
        {
            name: "США",
            cities: [
                {
                    name: "Нью-Йорк",
                    population: 8491079
                },
                {
                    name: "Лос-Анджелес",
                    population: 3792621
                },
                {
                    name: "Чикаго",
                    population: 2695598
                },
                {
                    name: "Вашингтон",
                    population: 601723
                },
                {
                    name: "Лас-Вегас",
                    population: 623747
                }
            ]
        },
        {
            name: "Бразилия",
            cities: [
                {
                    name: "Рио-де-Жанейро",
                    population: 6023699
                },
                {
                    name: "Сан-Паулу",
                    population: 10021295
                },
                {
                    name: "Сальвадор",
                    population: 2711840
                }
            ]
        }
    ];

    console.log(countries);

    function getCountriesWithMaxCitiesQuantity(countries) {
        var maxCitiesQuantity = countries.reduce(function (currentMaxCitiesQuantity, country) {
            return Math.max(currentMaxCitiesQuantity, country.cities.length);
        }, 0);

        return countries.filter(function (country) {
            return country.cities.length === maxCitiesQuantity;
        });
    }

    console.log("Страны с наибольшим количеством городов: ");
    console.log(getCountriesWithMaxCitiesQuantity(countries));

    function getCountriesWithPopulationSum(countries) {
        var countriesWithPopulationSum = {};

        countries.forEach(function (country) {
            countriesWithPopulationSum[country.name] = country.cities.reduce(function (populationSum, city) {
                return populationSum + city.population;
            }, 0);
        });

        return countriesWithPopulationSum;
    }

    console.log("Объект вида: ключ – название страны, значение – суммарная численность по стране: ");
    console.log(getCountriesWithPopulationSum(countries));
})();