const numbers = [1, 2, 3];

// function double(...args) {
//     const [numX, numY, numZ] = numbers;
//     const [x, y, z] = args;

//     if (x === numX * 2) {
//         return [...args];
//     }

//     return double(x + numX, y + numY, z + numZ);
// }

function double([number, ...rest], result = []) {
    if (!number) {
        return result;
    }

    result.push(number * 2);
    return double([...rest], result);
}

console.log(double(numbers));
