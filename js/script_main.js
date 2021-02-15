let number_0 = document.getElementById("number_0");
let number_1 = document.getElementById("number_1");
let number_2 = document.getElementById("number_2");
let number_3 = document.getElementById("number_3");
let number_4 = document.getElementById("number_4");
let number_5 = document.getElementById("number_5");
let number_6 = document.getElementById("number_6");
let number_7 = document.getElementById("number_7");
let number_8 = document.getElementById("number_8");
let number_9 = document.getElementById("number_9");
let pi = document.getElementById("pi");
let input = document.getElementById("input");
let clean_all = document.getElementById("clean_all");
let clean_last = document.getElementById("clean_last");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let brackets = document.getElementById("brackets");
let point = document.getElementById("point");
let output = document.getElementById("output");
const π = 3.14; 
let time = 0;
let count = "";
let answer = 0;


output.onclick = function () {
    if (time == 1) {
        input.innerHTML = " You didn't close a bracket";
        time = 0;
    }

    answer = eval(count);

    if (answer == undefined) {
        answer = 0;
    }

    input.innerHTML += " = " + answer;
}

clean_all.onclick = function () {
    input.innerHTML = "";
    count = "";
    time = 0;
}

clean_last.onclick = function () {
    input.innerHTML =  count.substring(0, count.length - 1);
    count = count.substring(0, count.length - 1);
}

plus.onclick = function () {
    input.innerHTML += " + ";
    count += "+";
}

minus.onclick = function () {
    input.innerHTML += " - ";
    count += "-";
}

multiply.onclick = function () {
    input.innerHTML += " x ";
    count += "*";
}

divide.onclick = function () {
    input.innerHTML += " / ";
    count += "/";
}

brackets.onclick = function () {

    if (time == 0) {
        input.innerHTML += " ( ";
        count += "(";
        time = 1;
    }
    else {
        input.innerHTML += " ) ";
        count += ")";
        time = 0;
    }
}

pi.onclick = function () {
    input.innerHTML += " π ";
    count += "π";
}

point.onclick = function () {
    input.innerHTML += ".";
    count += ".";
}

number_0.onclick = function () {
    input.innerHTML += 0;
    count += "0";
}

number_1.onclick = function () {
    input.innerHTML += 1;
    count += "1";
}

number_2.onclick = function () {
    input.innerHTML += 2;
    count += "2";
}

number_3.onclick = function () {
    input.innerHTML += 3;
    count += "3";
}

number_4.onclick = function () {
    input.innerHTML += 4;
    count += "4";
}

number_5.onclick = function () {
    input.innerHTML += 5;
    count += "5";
}

number_6.onclick = function () {
    input.innerHTML += 6;
    count += "6";
}

number_7.onclick = function () {
    input.innerHTML += 7;
    count += "7";
}

number_8.onclick = function () {
    input.innerHTML += 8;
    count += "8";
}

number_9.onclick = function () {
    input.innerHTML += 9;
    count += "9";
}
