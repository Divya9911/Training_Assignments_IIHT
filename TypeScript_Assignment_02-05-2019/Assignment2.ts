"use strict";
exports.__esModule = true;
var readline = require("readline");
var valFromRuntime = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
valFromRuntime.question('Please enter a number', function (answer) {
    var n = parseInt(answer); //converting string into integer
    var sum = 0;
    for (var i = n; i < n + 100; i++) {
        sum = sum + i;
    }
    console.log(sum);
    valFromRuntime.close();
});
