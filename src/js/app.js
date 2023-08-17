export default function cleanPhoneNumber(phoneNumber) {
    // Очищаем номер от ненужных символов
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Проверяем длину номера
    if (cleanedNumber.length === 11 && cleanedNumber[0] === '8') {
        // Для российских номеров меняем восьмерку на +7
        return '+7' + cleanedNumber.slice(1);
    } else {
        // Для остальных номеров просто добавляем "+"
        return '+' + cleanedNumber;
    }
}