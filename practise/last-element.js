function lastElement(arrayInput, n) {
    var arrayLength = arrayInput.length;
    var lastElement = arrayInput[arrayLength - 1]
    var arrayOutput = []
    if (!n) {
        console.log(lastElement);
    }
    else {
        var loopvalue;
        if (n < arrayLength) {
            loopvalue = n
        } else {
            loopvalue = arrayLength;
        }
        for (i = arrayLength - 1; i >= (arrayLength - loopvalue); i--) {
            arrayOutput.push(arrayInput[i]);

        }
        console.log(arrayOutput);
    }
    //console.log(arrayLength);
    //console.log(arrayOutput);

}

lastElement([1, 2, 3, 4, 5, 6, 7], 9)


