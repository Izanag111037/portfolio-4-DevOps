document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('action-btn');
    const message = document.getElementById('output-message');

    button.addEventListener('click', () => {
        message.textContent = 'Рабочая среда проекта настроена и работает отлично!';
        console.log('Кнопка была успешно нажата. Chrome DevTools фиксирует клик.');
    });
});