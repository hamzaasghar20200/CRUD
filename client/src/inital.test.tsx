import { sum } from "./foo";

/**
 * Basic Example
 */
test("basic", () => {
    expect(sum()).toBe(0);
});

test("basic again", () => {
    expect(sum(1, 2)).toBe(3);
});

/**
 * Async Example
 *
 * Jest has built-in async/await support. e.g.
 */
test("basic async", async () => {
    expect(sum()).toBe(0);
});

test("basic async again", async () => {
    expect(sum(1, 2)).toBe(3);
});