//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight) + "px";
}

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
