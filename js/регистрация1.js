document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('registrationModal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block'; // Показываем модальное окно
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Скрываем модальное окно
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Закрыть модальное окно при клике вне его
        }
    });

    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        modal.style.display = 'none'; // Закрываем модальное окно
        window.location.href = 'главная.html';
    });
});