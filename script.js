
let div = document.querySelector("div");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);

    inp.value = "";
});


// EVENT DELEGATION
ul.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete")) {

        let listItem = event.target.parentElement;
        listItem.remove();
    }

});