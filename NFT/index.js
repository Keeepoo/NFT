document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('closeMenu');

    // Переменные для модального окна
    const modal = document.getElementById('myModal');
    const openModalBtn = document.getElementById('openModal'); // Кнопка "Начать зарабатывать на NFT"
    const closeModalBtn = document.getElementById('close-my-modal-btn');

    // Бургер меню
    burger.addEventListener('click', function () {
        menu.classList.toggle('active');
        burger.classList.toggle('hidden'); // Скрываем кнопку при открытии меню
    });

    closeMenu.addEventListener('click', function () {
        menu.classList.remove('active');
        burger.classList.remove('hidden'); // Показываем кнопку при закрытии меню
    });

    // Функция для открытия модального окна
    function openModal() {
        modal.style.display = "block";
        document.body.classList.add("no-scroll");
    }

    // Функция для закрытия модального окна
    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    // Открытие модального окна при клике на кнопку "Начать зарабатывать на NFT"
    openModalBtn.onclick = function(event) {
        event.preventDefault();
        openModal();
    }

    // Закрытие модального окна при клике на кнопку закрытия
    closeModalBtn.onclick = function() {
        closeModal();
    }

    // Закрытие модального окна при клике вне его области
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});
