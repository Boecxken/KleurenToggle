
const toggleNavBar = function () {
    const showNavBar = document.querySelector(".nav-bar ul");

    if (showNavBar.style.visibility === "visible") {
        showNavBar.style.visibility = "hidden";
    } else {
        showNavBar.style.visibility = "visible";
    }
}

document.querySelector(".red").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    document.querySelector("input[value=red]").checked = true;
    document.querySelector(".text").innerHTML = "Red";
    toggleNavBar();
});

document.querySelector(".blue").addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
    document.querySelector("input[value=blue]").checked = true;
    document.querySelector(".text").innerHTML = "Blue";
    toggleNavBar();
});

document.querySelector(".yellow").addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow";
    document.querySelector("input[value=yellow]").checked = true;
    document.querySelector(".text").innerHTML = "Yellow";
    toggleNavBar();
});

document.querySelector(".green").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    document.querySelector("input[value=green]").checked = true;
    document.querySelector(".text").innerHTML = "Green";
    toggleNavBar();
});

document.querySelector(".purple").addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
    document.querySelector("input[value=purple]").checked = true;
    document.querySelector(".text").innerHTML = "Purple";
    toggleNavBar();
});



