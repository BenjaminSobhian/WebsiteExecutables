function showButton(cardNumber) {
    var image = document.getElementById("img-" + cardNumber);
    image.classList.add("img-hover-zoom");

    if (window.innerWidth > 1360) {
        var body = document.getElementById("body-" + cardNumber);
        body.classList.add("move-card-body-up");

        var button = document.getElementById("button-" + cardNumber);
        button.classList.add("show-button");
    }
}

function hideButton(cardNumber) {
    var image = document.getElementById("img-" + cardNumber);
    image.classList.remove("img-hover-zoom");

    if (window.innerWidth > 1360) {
        var body = document.getElementById("body-" + cardNumber);
        body.classList.remove("move-card-body-up");
        body.classList.add("move-card-body-down");

        var button = document.getElementById("button-" + cardNumber);
        button.classList.remove("show-button");
        button.classList.add("hide-button");

        setTimeout(() => {
            body.classList.remove("move-card-body-down");
            button.classList.remove("hide-button");
        }, 100);
    }
}
