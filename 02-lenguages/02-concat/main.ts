const concat = (a: number[], b: number[]) => {
    const newA = [...a];
    const newB = [...b];
    return [...newA, ...newB];
};

const arrayA = [1, 2];
const arrayB = [3, 4];
const result = concat(arrayA, arrayB);
console.log(result); // expected -> [1,2,3,4]

//OPTIONAL CONCAT
const optionalConcat = (...arg: number[][]) => {
    const [a, b, ...rest] = [...arg];
    return [...a, ...b].concat(...rest);
};

const optionalArrayA = [1, 2];
const optionalArrayB = [3, 4];
const optionalArrayC = [5, 6];
const optionalArrayD = [7, 8];
const optionalResult = optionalConcat(
    optionalArrayA,
    optionalArrayB,
    optionalArrayC,
    optionalArrayD
);
console.log(optionalResult); // expected -> [1,2,3,4,5,6,7,8]
