import { describe, expect, test } from 'vitest';
import { add, sumThem, sumThemWithUnions } from './stuff/02.stuff';

describe('functions and arguments and stuff', () => {
    test('params need typing', () => {
        expect(add(2,2)).toBe(4);
    })

    test('first override', () => {
        expect(sumThem(2,3)).toBe(5);
        expect(sumThem('dog', 'cat')).toBe('dogcat');
        expect(sumThem([1,2,3], [1,2,3])).toBe(12);
    })

    test('union override', () => {
        expect(sumThemWithUnions(2,3)).toBe(5);
        expect(sumThemWithUnions('dog', 'cat')).toBe('dogcat');
        expect(sumThemWithUnions([1,2,3], [1,2,3])).toBe(12);
    })
})

describe('Object Literals and functions', () => {
   test('Arrays and Tuple Types', () => {
    const friends = ['Sean', 'Billy', 'Ed', 'Mo', 1138] as const;
    // with `as const` it makes friends type that value and that value only!
    // cannot be changed
    // ex: friends[0] = 'Jose' -> ERROr!

    // let myAssociates: Array<string | number>;
    let myAssociated: (string | number)[]; //same as above!

    expect(typeof friends[0]).toBe('string');
    expect(typeof friends[4]).toBe('number');

    type Entry = [number, string, string[]]; // tuple type

    const entry: Entry = [19, 'dog', ['birds']]; // order matters here for this type

   })
})