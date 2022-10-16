// function multiple(num, count) {
//     for (i = 1; i < count; i++) {
//         console.log(num * i);
//     }
// }

// multiple(5, 10)












function multiple(num, count) {
    var resultArray = [];
    for (i = 1; i <= count; i++) {
        var result = num * i;
        // console.log(result);
        resultArray[i - 1] = result;

    }
    console.log(resultArray)
}
multiple(5, 5)








