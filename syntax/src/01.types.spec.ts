import { describe, test, expect } from 'vitest';

describe("Opting in to Type Checking", () => {
    test('Uninitialized is Any', () => {
        let age;
        age = 13;

        // 3 hours later
        age = "old"
    });

    test("Initialize and the type is inferred", () => {
        let age = 13;

        age = 14;
        expect(typeof age).toBe("number");
        
        // @ts-expect-error
        age = "old"; // nope it was already initialized as number
        expect(typeof age).toBe("string");
    });

    test("unitialized should have an annotation", () => {
        let age: number;
        age = 13;

        // 3 Hours later
        // @ts-expect-error
        age = 'Old';
    });

    test("Union Type", () => {
        let age: number | string = 13;

        age = "old"; // NO ERROR!
    
    });
});