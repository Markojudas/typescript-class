import { describe, expect, test } from "vitest";

describe("Union Stuff", () => {
    test('literal unions', () => {
        type Handler = 'click' | 'hover' | 'scroll';

        const setHandler = (event: Handler, callback: () => void) => {
            // the code
            console.log(`${event}: ${callback}`)
        }

        setHandler('click', () => console.log('did it'));
    })

    test('Narrowing Unions', () => {
        type ApiResponse =
            | { data: string }
            | { error: string }

        function doApiCall(n: number): ApiResponse {
            return n % 2 === 0 ? {data: 'Good Stuff'} : {error: "that blew up"}
        }
        const result = doApiCall(2);

        if ('data' in result) {
            console.log(result.data)
        }
        if ('error' in result) {
            console.log(result.error)
        }
    })

    test('Narrowing with a function', () => {
        type Person = {name: string, age: number}
        const someJSON = '{"name": "Bob", "age": 35}'

        const obj = JSON.parse(someJSON);

        // expect(obj.name).toBe('Bob');
        // expect(obj.age).toBe(35);

        // tests whether the obj is a Person
        const hasAge = (value: unknown): value is Person => {
            return (typeof value === 'object' && value !== null && 'age' in value && typeof value.age === 'number' && 'name' in value && typeof value.name === 'string')
        }

        if(hasAge(obj)) {
            expect(obj.age).toBe(35);
            expect(obj.name).toBe('Bob');
        }
    });

    test('intro to discriminated unions', () => {
        type ApiResponse =
        | { kind: 'success', data: string }
        | { kind: 'error', error: string }

        function doApiCall(n: number): ApiResponse {
            return n % 2 === 0 ? { kind: 'success', data: 'Good Stuff' } : { kind: 'error', error: "that blew up" }
        }
        const result = doApiCall(2);

        switch (result.kind) {
            case `error`:
                console.log(result.error);
                break;
            case 'success':
                console.log(result.data);
                break;
        }
    })
})