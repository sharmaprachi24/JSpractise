function arrayToString(arrayInput) {
    var outputString = "";
    var arrayLength = arrayInput.length;

    for (i = 0; i < arrayLength; i++) {
        if (i == arrayLength - 1) {
            outputString = outputString + arrayInput[i];
        }
        else {
            outputString = outputString + arrayInput[i] + ","
        }
    }




    console.log(outputString);
}


arrayToString([1, 2, 3, 4, "red"])