<<<<<<< HEAD
var likeButtons = document.getElementsByClassName("btn btn-outline-warning btn-sm bi bi-suit-heart");

var joinButtons = document.getElementsByClassName("btn btn-outline-warning me-md-2 btn-sm mx-2");
// for (let i = 0; i < likeButtons.length; i++) {
//     likeButtons[i].isLiked = false;
// }

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].isLiked = false;
    likeButtons[i].counter = 0;
    likeButtons[i].addEventListener("click", function () {
        if (likeButtons[i].isLiked == false) {
            likeButtons[i].style.backgroundColor = "#FFCF3E";
            likeButtons[i].isLiked = true;
            likeButtons[i].counter += 1;
            let currentLikes = likeButtons[i].counter;
            console.log(currentLikes);
        }
        else {
            likeButtons[i].style.backgroundColor = "white";
            likeButtons[i].isLiked = false;
            likeButtons[i].counter -= 1;
            let currentLikes = likeButtons[i].counter;
            console.log(currentLikes);
        }
    })
}


// likeButtons[2].addEventListener("click", function () {
//     if (isLiked = false) {
//         likeButtons[2].style.backgroundColor = "#FFCF3E";
//         likeButtons[2].isLiked = true;
//     }
//     else {
//         likeButtons[2].style.backgroundColor = "white";
//         likeButtons[2].isLiked = false;
//     }
// })


//concept for the endlessly expanding feed:
//-create List of entrys
//-loop trough the list and create a card for each entry
//-make ajax request when nearing the end of the page to add further entrys to the list
//-maybe use infinite scroll
=======
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

const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}
>>>>>>> origin/Sandhya
