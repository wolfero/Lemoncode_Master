const myArray = [1, 2, 3, 4];
// HEAD FUNCTION
const head = (array: number[]) => {
    const newArray = [...array];
    const [firstItem] = newArray;
    return firstItem;
};

const firstItem = head(myArray);
console.log(firstItem);

//TAIL FUNCTION
const tail = (array: number[]) => {
    const newArray = [...array];
    const [firstItem, ...rest] = newArray;
    return rest;
};

const tailArray = tail(myArray);
console.log(tailArray);

//INIT FUNCTION
const init = (array: number[]) => {
    const newArray = [...array];
    return newArray.splice(0, newArray.length - 1);
};

const InitArray = init(myArray);
console.log(InitArray);

//LAST FUNCTION
const last = (array: number[]) => {
    const newArray = [...array];
    return newArray.pop();
};

const lastArray = last(myArray);
console.log(lastArray);
