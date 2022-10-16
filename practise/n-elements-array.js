function nElement(arrayInput, n) {
    var arrayLength = arrayInput.length;
    var firstElement = arrayInput[0]
    var arrayOutput = []
    if (n == null) {
        console.log(firstElement);
    }
    else {
        var loopvalue;
        if (n < arrayLength) {
            loopvalue = n
        } else {
            loopvalue = arrayLength;
        }
        for (i = 0; i < loopvalue; i++) {
            arrayOutput[i] = arrayInput[i];
        }
    }
    console.log(arrayOutput);

}


nElement([1, 2, 3, 4], 6)