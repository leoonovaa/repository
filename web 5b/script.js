function calculateAreaByHeron() {
    var a = parseFloat(document.getElementById('side1A').value);
    var b = parseFloat(document.getElementById('side1B').value);
    var c = parseFloat(document.getElementById('side1C').value);

    var p = (a + b + c) / 2;

    var area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    document.getElementById('areaByHeronResult').innerHTML = "Результат: " + area;
}





function calculateAreaByAngle() {
    var a = parseFloat(document.getElementById('side2A').value);
    var b = parseFloat(document.getElementById('side2B').value);
    var angle = parseFloat(document.getElementById('angle').value);

    var angleInRadians = (angle * Math.PI) / 180;
    var area = (1 / 2) * a * b * Math.sin(angleInRadians);

    document.getElementById('areaByAngleResult').innerHTML = "Результат: " + area;
}





function calculateAreaBySideAndHeight() {
    var side = parseFloat(document.getElementById('sidetriangle').value);
    var height = parseFloat(document.getElementById('heighttriangle').value);

    var area = (1 / 2) * side * height;

    document.getElementById('areaBySideAndHeightResult').innerHTML = "Результат: " + area;
}





function calculateAreaBySideAndRadius() {
    var a = parseFloat(document.getElementById('side3A').value);
    var b = parseFloat(document.getElementById('side3B').value);
    var c = parseFloat(document.getElementById('side3C').value);
    var radius = parseFloat(document.getElementById('radius').value);

    var area = (a * b * c) / (4 * radius);

    document.getElementById('areaBySideAndRadiusResult').innerHTML = "Результат: " + area;
}





function isPalindrome(num) {
    var numStr = num.toString();
    return numStr === numStr.split('').reverse().join('');
}

function checkNumberForPalindrome() {
    var number = document.getElementById("number").value;
    
    if (!isNaN(number)) {
        var result = isPalindrome(number) ? "Число є паліндромом" : "Число не є паліндромом";
        document.getElementById("numberForPalindromeResult").innerText = result;
    } else {
        document.getElementById("numberForPalindromeResult").innerText = "Введіть числове значення";
    }
}





function isAnagram(word1, word2) {
    var sortedWord1 = word1.toLowerCase().split('').sort().join('');
    var sortedWord2 = word2.toLowerCase().split('').sort().join('');
    
    return sortedWord1 === sortedWord2;
}

function checkWordForAnagram() {
    var inputWord1 = document.getElementById("inputWord1").value;
    var inputWord2 = document.getElementById("inputWord2").value;
    
    if (inputWord1 && inputWord2) {
        var result = isAnagram(inputWord1, inputWord2) ? "Анаграма" : "Не анаграма";
        document.getElementById("wordForAnagramResult").innerText = result;
    } else {
        document.getElementById("wordForAnagramResult").innerText = "Введіть два слова";
    }
}





function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
function getFibonacciNumber() {
    var index = parseInt(document.getElementById("fibIndex").value);

    if (!isNaN(index)) {
        var result = fibonacci(index);
        document.getElementById("fibonacciNumberResult").innerText = "Число у послідовності Фібоначі: " + result;
    } else {
        document.getElementById("fibonacciNumberResult").innerText = "Введіть числове значення";
    }
}





function isFibonacciNumber(num) {
    var a = 0, b = 1;
    while (b < num) {
        var temp = a + b;
        a = b;
        b = temp;
    }
    return b === num;
}

function checkFibonacci() {
    var checkNumber = parseInt(document.getElementById("checkFibNumber").value);

    if (!isNaN(checkNumber)) {
        var result = isFibonacciNumber(checkNumber) ? "Число належить до послідовності Фібоначі" : "Число не належить до послідовності Фібоначі";
        document.getElementById("fibonacciResult").innerText = result;
    } else {
        document.getElementById("fibonacciResult").innerText = "Введіть числове значення";
    }
}