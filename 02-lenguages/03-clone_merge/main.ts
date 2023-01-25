//CLONE
interface Pajaro {
    volar: boolean;
}

function clone(source: Pajaro | Person) {
    return { ...source };
}

const pato: Pajaro = { volar: true };
const aguila = clone(pato);
console.log(aguila); //expected -> {volar:true}

//MERGE
interface Person {
    name: string;
    age?: number;
    surname?: string;
    country?: string;
    married?: boolean;
}

const source: Person = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const target: Person = { name: 'Luisa', age: 31, married: true };

function merge(source: Person, target: Person) {
    return Object.assign(clone(target), source);
}

const result = merge(source, target);
console.log(result); //expected -> {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
