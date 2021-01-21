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
