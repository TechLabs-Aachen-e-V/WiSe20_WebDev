var likeButtons = document.getElementsByClassName("btn btn-outline-warning btn-sm bi bi-suit-heart");


for (var i = 0; i < likeButtons.length; i++) {
    likeButtons[i].isLiked = false;
}

for (var i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", function () {
        if (isLiked = false) {
            likeButtons[i].style.backgroundColor = "#FFCF3E";
            likeButtons[i].isLiked = true;
        }
        else {
            likeButtons[i].style.backgroundColor = "white";
            likeButtons[i].isLiked = false;
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
