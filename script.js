document.addEventListener("DOMContentLoaded", function () {
    let progress = document.querySelector("progress");
    let button = document.querySelector("#increaseProgress");

    button.addEventListener("click", function () {
        if (progress.value < 100) {
            progress.value += 10;
        } else {
            alert("You've completed the course!");
        }
    });
});
