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
    const tableContainer = document.getElementById('tableContainer');

    if (animalTableButton && tableContainer) {
        animalTableButton.addEventListener('click', function () {
            const isVisible = tableContainer.style.display !== 'none';
            tableContainer.style.display = isVisible ? 'none' : 'block';
            animalTableButton.textContent = isVisible ? 'Show animal table' : 'Hide animal table';
        });
    }

    const h2Element = document.getElementById('harjoitus2');
    if (h2Element) {
        h2Element.addEventListener('mouseover', function() {
            console.log('Stepped over me with a mouse!');
        });
    }

    const h1Element = document.getElementById('harjoitus1');
    if (h1Element) {
        h1Element.addEventListener('click', function() {
            h1Element.style.color = 'red';
            h1Element.innerHTML = 'Bye bye mouse!';
        });
    }

    const feedbackField = document.getElementById('feedback');
    const statusEl = document.getElementById('status');
    const charCountEl = document.getElementById('charcount');
    const previewEl = document.getElementById('preview');
    const form = document.getElementById('feedbackForm');

    if (feedbackField) {
        feedbackField.addEventListener('focus', function() {
            statusEl.textContent = 'Kirjoita palautetta...';
            feedbackField.style.backgroundColor = '#f0f8ff';
        });

        feedbackField.addEventListener('blur', function() {
            statusEl.textContent = '';
            feedbackField.style.backgroundColor = '';
        });

        feedbackField.addEventListener('input', function() {
            const textLength = feedbackField.value.length;
            charCountEl.textContent = textLength + '/200';
            
            if (feedbackField.value.trim() === '') {
                previewEl.textContent = '(Esikatselu tulee tähän)';
            } else {
                previewEl.textContent = feedbackField.value;
            }
        });
    }

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const textLength = feedbackField.value.trim().length;
            
            if (textLength < 10 || textLength > 200) {
                statusEl.textContent = 'Palautteen täytyy olla 10–200 merkkiä pitkä!';
                statusEl.style.color = 'red';
            } else {
                statusEl.textContent = 'Thank you for your feedback!';
                statusEl.style.color = 'green';
                feedbackField.value = '';
                charCountEl.textContent = '0/200';
                previewEl.textContent = '(Esikatselu tulee tähän)';
            }
        });
    }

    const keyBox = document.getElementById('keybox');
    const keyInfo = document.getElementById('keyinfo');

    document.addEventListener('keydown', function(event) {
        console.log(event);
        if (keyInfo) {
            keyInfo.textContent = `Painettu näppäin (key): ${event.key} | Näppäinkoodi (code): ${event.code}`;
        }
        if (keyBox) {
            keyBox.textContent = event.key;
            keyBox.style.fontSize = '2.5em';
            keyBox.style.fontWeight = 'bold';
            keyBox.style.textAlign = 'center';
        }
    });
});