import cleanPhoneNumber from '../app';

test('cleanPhoneNumber - Российский номер', () => {
    const phoneNumber = '8 (927) 000-00-00';
    const expected = '+79270000000';
    expect(cleanPhoneNumber(phoneNumber)).toBe(expected);
});

test('cleanPhoneNumber - Российский номер с пробелами', () => {
    const phoneNumber = '+7 960 000 00 00';
    const expected = '+79600000000';
    expect(cleanPhoneNumber(phoneNumber)).toBe(expected);
});

test('cleanPhoneNumber - Китайский номер', () => {
    const phoneNumber = '+86 000 000 0000';
    const expected = '+860000000000';
    expect(cleanPhoneNumber(phoneNumber)).toBe(expected);
});