// Just a source code file that exports one or more things

const logIt = (msg: string) => console.log(msg);

let callCount = 0;

export const sumIt = (a: number, b: number) => add(a,b);

export function add(a: number, b: number) {
    const sum = a+b;
    logIt(sum.toString());
    return sum;
}

export const doubleAndSumit = (a: number, b: number) => {
    const result = sumIt(a+a, b+b);
    callCount++,
    logIt(`They did doubleAndSumIt ${result} (call count is ${callCount})`);
    return result;
}

// overrides!
export function sumThem(a: number, b: number): number;
export function sumThem(a: string, b: string): number;
export function sumThem(a: number[], b: number[]): number;
export function sumThem(a: unknown, b: unknown) {
    
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        return [...a, ...b].reduce((l, r) => l + r);
    }
}

// overrides using union types
type AcceptedTypesToSum = number | string | number[];
export function sumThemWithUnions(a: AcceptedTypesToSum, b: AcceptedTypesToSum) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        return [...a, ...b].reduce((l, r) => l + r);
    }
}

