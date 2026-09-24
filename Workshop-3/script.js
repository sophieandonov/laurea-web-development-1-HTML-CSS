document.addEventListener('DOMContentLoaded', function () {
    const animalButton = document.getElementById('animalButton');
    if (animalButton) {
        animalButton.addEventListener('click', function () {
            alert('Giraffes are the tallest animals in the world and can grow up to 5.5 meters tall!');
        });
    }

    const animalTitle = document.getElementById('animalTitle');
    if (animalTitle) {
        animalTitle.addEventListener('click', function () {
            animalTitle.textContent = 'Giraffes are amazing!';
            animalTitle.style.color = 'purple';
        });
    }

    const animalTableButton = document.getElementById('animalTableButton');
    const table = document.getElementById('example');

    if (animalTableButton && table) {
        animalTableButton.addEventListener('click', function () {
            const isVisible = table.style.display !== 'none';
            table.style.display = isVisible ? 'none' : 'table';
            animalTableButton.textContent = isVisible ? 'Show animal table' : 'Hide animal table';
        });
    }
});

