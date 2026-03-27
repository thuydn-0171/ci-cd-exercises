const { sayHello, add } = require('./app');

describe('sayHello', () => {
  test('returns hello message with name', () => {
    expect(sayHello('World')).toBe('Hello, World!');
  });

  test('returns hello message with another name', () => {
    expect(sayHello('MCThuy')).toBe('Hello, MCThuy!');
  });
});

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });
});

describe('Integration tests', () => {
  test('sayHello and add work together', () => {
    const greeting = sayHello('Integration');
    const sum = add(5, 10);
    expect(greeting).toBe('Hello, Integration!');
    expect(sum).toBe(15);
  });
});
