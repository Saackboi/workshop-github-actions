const {suma, multiplica} = require('../app');

test('suma 2 + 3 = 5', () => {
    expect(suma(2,3)).toBe(5);
});

test('multiplica 2 * 3 = 6', () => {
    expect(multiplica(2,3)).toBe(6);
});