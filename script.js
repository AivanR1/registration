const countryButton = document.getElementById('countryButton');
const dropdownBlock = document.getElementById('dropdownBlock');

countryButton.addEventListener('click', function() {
    // Переключаем стиль display блока, чтобы показать или скрыть его
    if (dropdownBlock.style.display === 'none' || dropdownBlock.style.display === '') {
      dropdownBlock.style.display = 'block';
    } else {
      dropdownBlock.style.display = 'none';
    }
  });