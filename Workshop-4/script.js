const changeheadingButton = document.querySelector("#changeHeadingButton");
const taskOneheading = document.querySelector("#taskOneheading"); 

changeheadingButton .addEventListener("click", function() {
    taskOneheading.textContent = "Muokattu otsikko!";
    taskOneheading.style.color = "purple";
});