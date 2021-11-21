(function () {
    var russia = {
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
    };

    var china = {
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
    };

    var usa = {
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
    };

    var brazil = {
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
    };

    var countries = [russia, china, usa, brazil];
    console.log(countries);

    function getCountryWithMaxCitiesQuantity(countries) {
        var maxCitiesQuantity = 0;

        countries.forEach(function (country) {
            if (country.cities.length > maxCitiesQuantity) {
                maxCitiesQuantity = country.cities.length;
            }
        });

        return countries.filter(function (country) {
            return country.cities.length === maxCitiesQuantity;
        }).map(function (country) {
            return country.name;
        });
    }

    console.log("Страна с наибольшим количеством городов: " + getCountryWithMaxCitiesQuantity(countries));

    function getCountriesWithPopulationSum(countries) {
        var countriesWithPopulationSum = {};

        countries.forEach(function (country) {
            var countryName = country.name;

            countriesWithPopulationSum[countryName] = country.cities.reduce(function (populationSum, city) {
                return populationSum + city.population;
            }, 0);
        });

        return countriesWithPopulationSum;
    }

    console.log("Объект вида: ключ – название страны, значение – суммарная численность по стране: ");
    console.log(getCountriesWithPopulationSum(countries));
})();