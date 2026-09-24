const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

if (changeHeadingButton && taskOneHeading) {
    changeHeadingButton.addEventListener("click", function () {
        taskOneHeading.textContent = "Muokattu otsikko!";
    });
}

if (changeStyleButton && taskOneHeading) {
    changeStyleButton.addEventListener("click", function () {
        taskOneHeading.classList.toggle("highlight");
    });
}

if (changeTextButton && animalText) {
    changeTextButton.addEventListener("click", function () {
        animalText.textContent = "Elefantit ovat erittäin älykkäitä ja sosiaalisia eläimiä.";
    });
}

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

if (animalButton && animalTable && animalText) {
    animalButton.addEventListener("click", function () {
        animalTable.hidden = !animalTable.hidden;
        animalText.hidden = animalTable.hidden;
    });
}

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

if (animalSelect && animalName && animalImage && animalDescription) {
    animalSelect.addEventListener("change", function () {
        const selectedAnimal = animalSelect.value;

        if (selectedAnimal === "elephant") {
            animalName.textContent = "Elefantti";
            animalImage.src = "images/elephant.png";
            animalImage.alt = "Elefantti";
            animalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
        } else if (selectedAnimal === "tiger") {
            animalName.textContent = "Tiikeri";
            animalImage.src = "images/tiger.png";
            animalImage.alt = "Tiikeri";
            animalDescription.textContent = "Tiikerit ovat raidallisia ja voimakkaita metsästäjiä.";
        } else if (selectedAnimal === "penguin") {
            animalName.textContent = "Pingviini";
            animalImage.src = "images/penguin.png";
            animalImage.alt = "Pingviini";
            animalDescription.textContent = "Pingviinit ovat hyvin sopeutuneita kylmään ympäristöön.";
        } else if (selectedAnimal === "panda") {
            animalName.textContent = "Panda";
            animalImage.src = "images/panda.png";
            animalImage.alt = "Panda";
            animalDescription.textContent = "Pandat elävät Kiinassa ja syövät pääasiassa bambua.";
        }
    });

    animalImage.addEventListener("mouseenter", function () {
        animalImage.classList.add("image-highlight");
    });

    animalImage.addEventListener("mouseleave", function () {
        animalImage.classList.remove("image-highlight");
    });
}