const { hello, even, isGreat, shoppingList, sum } = require("../index.js")

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('there is no I in team', () => {
    expect(hello).not.toMatch(/I/);
    expect(hello).toMatch(/hello world !!!/);
});

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(even).toBe(12);
    expect(even).toEqual(4);
});


test("is greate boolean value",() => {
    expect(isGreat).toBeTruthy()
})

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
  });

  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('func test', () => {
    
    expect(sum(2,2)).toEqual(4);
    //expect(sum(.1,"hello")).toThrow(TypeError);
  });



