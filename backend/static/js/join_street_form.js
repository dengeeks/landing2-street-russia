document.addEventListener('DOMContentLoaded', function () {
    // Определяем поля формы для первого медиа-блока
    const formatTypeField = document.getElementById('id_format_type');
    const videoUrlField = document.querySelector('.form-row .field-video_url');
    const imageField = document.querySelector('.form-row .field-image');

    // Определяем поля формы для второго медиа-блока
    const formatType2Field = document.getElementById('id_format_type2');
    const videoUrl2Field = document.querySelector('.form-row .field-video_url2');
    const image2Field = document.querySelector('.form-row .field-image2');

    // Проверка, что все элементы существуют
    if (!formatTypeField || !videoUrlField || !imageField ||
        !formatType2Field || !videoUrl2Field || !image2Field) {
        console.error('Один или несколько элементов формы не найдены.');
        return;
    }

    // Скрыть элемент
    function hideElement(el) {
        el.style.display = 'none';
    }

    // Показать элемент
    function showElement(el) {
        el.style.display = '';
    }

    // Скрыть/показать поля в зависимости от выбранных format_type и format_type2
    function toggleFields() {
        // Первый медиа-блок
        const formatType = formatTypeField.value;
        hideElement(videoUrlField);
        hideElement(imageField);

        if (formatType === 'video_url') {
            showElement(videoUrlField);
        } else if (formatType === 'image') {
            showElement(imageField);
        }

        // Второй медиа-блок
        const formatType2 = formatType2Field.value;
        hideElement(videoUrl2Field);
        hideElement(image2Field);

        if (formatType2 === 'video_url') {
            showElement(videoUrl2Field);
        } else if (formatType2 === 'image') {
            showElement(image2Field);
        }
    }

    // Первоначальная проверка при загрузке страницы
    toggleFields();

    // Отслеживаем изменения в полях format_type и format_type2
    formatTypeField.addEventListener('change', toggleFields);
    formatType2Field.addEventListener('change', toggleFields);
});