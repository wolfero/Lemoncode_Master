const myArray = [1, 2, 3, 4];
// HEAD FUNCTION
const head = (array: number[]) => {
    const [firstItem] = array;
    return firstItem;
};

const firstItem = head(myArray);
console.log(firstItem);

//TAIL FUNCTION
const tail = (array: number[]) => {
    const [firstItem, ...rest] = array;
    return rest;
};

const tailArray = tail(myArray);
console.log(tailArray);

//INIT FUNCTION
const init = (array: number[]) => {
    return array.slice(0,-1,);
};

const InitArray = init(myArray);
console.log(InitArray);

//LAST FUNCTION
const last = (array: number[]) => {
    return array[array.length - 1];
};

const lastArray = last(myArray);
console.log(lastArray);
