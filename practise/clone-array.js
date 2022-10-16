function cloneArray(arrayInput) {
    var arrayOutput = [];
    for (i = 0; i < arrayInput.length; i++) {
        arrayOutput[i] = arrayInput[i];
    }
    console.log(arrayOutput)
}
cloneArray([1, 2, 3, 4, 5, 6])
cloneArray(["Pr", "ad", "vf", "cd"])
cloneArray(["Pr", "ad", "vf", "cd", ["f", "huhu"]])

