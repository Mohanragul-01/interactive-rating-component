let ratings = document.querySelectorAll(".btn");
let submit = document.querySelector(".btn-submit");
let rated = document.querySelector("#rated");
let rating = document.querySelector(".rating-section");
let thank = document.querySelector(".thank-section");

let rate = 0;

ratings.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let clicked = document.querySelector(".clicked");
        if (clicked) clicked.classList.remove("clicked");
        e.target.classList.add("clicked");
        rate = e.target.textContent;
    });
});

submit.addEventListener("click", () => {
    rating.classList.add("hidden");
    thank.classList.remove("hidden");
    rated.textContent = rate;
})
