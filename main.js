// function burgerMenu(icon) {
//     icon.classList.toggle("change");

//     var womenBlock = document.getElementById("women-block");
//     if (womenBlock.classList.contains("hidden")) {
//         womenBlock.classList.remove("hidden");
//     } else {
//         womenBlock.classList.add("hidden");
//         setTimeout(function () {
//             womenBlock.classList.remove("visible");
//         }, 500);
//     }
// }

function burgerMenu(icon) {
    icon.classList.toggle("change");

    var womenBlock = document.getElementById("women-block");
    if (womenBlock.classList.contains("hidden")) {
        womenBlock.classList.remove("hidden");
        womenBlock.classList.add("visible");
    } else {
        womenBlock.classList.add("hidden");
        womenBlock.classList.remove("visible");
    }
}
