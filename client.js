function readMore(button) {
    let dots = document.querySelector(`.listDiscription[item="${button}"] .dots`);
    let moreText = document.querySelector(`.listDiscription[item="${button}"] .more`);
    let btnText = document.querySelector(`.listDiscription[item="${button}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}