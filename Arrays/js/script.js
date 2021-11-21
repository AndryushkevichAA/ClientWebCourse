(function () {
    var numbersArray = [10, 4, 23, 43, 90, 1, 5, 67];
    console.log("Массив чисел: " + numbersArray);

    numbersArray.sort(function (e1, e2) {
        return e2 - e1;
    });
    console.log("Массив чисел отсортированный по убыванию: " + numbersArray);

    var firstFiveElementsArray = numbersArray.slice(0, 5);
    console.log("Подмассив из первых пяти элементов: " + firstFiveElementsArray);

    var lastFiveElementsArray = numbersArray.slice(numbersArray.length - 5);
    console.log("Подмассив из последних пяти элементов: " + lastFiveElementsArray);

    var arrayEvenElementsSum = numbersArray.reduce(function (sum, element) {
        if (element % 2 === 0) {
            return sum + element;
        }

        return sum;
    }, 0);
    console.log("Сумма четных чисел массива: " + arrayEvenElementsSum);
})();

(function () {
    function getOneHundredNumbersArray() {
        var array = [];

        for (var i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array;
    }

    var oneHundredNumbersArray = getOneHundredNumbersArray();
    console.log("Массив из чисел от 1 до 100: " + oneHundredNumbersArray);

    var evensSquaresArray = oneHundredNumbersArray.filter(function (number) {
        return number % 2 === 0;
    }).map(function (number) {
        return Math.pow(number, 2);
    });
    console.log("Список квадратов четных чисел: " + evensSquaresArray);
})();