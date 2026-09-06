```javascript
// ==============================
// 1. Welcome message
// ==============================

console.log("Welcome to Hassan's Website! 🚀");


// ==============================
// 2. Button click
// ==============================

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
    alert("Welcome to my website! 😎");
});


// ==============================
// 3. Change heading
// ==============================

const heading = document.querySelector(".home-content h1");

heading.addEventListener("click", function () {
    heading.innerHTML = "You're Learning JavaScript! 🔥";
});


// ==============================
// 4. Dark / Light Mode
// ==============================

const modeButton = document.createElement("button");

modeButton.innerText = "🌙 Change Mode";

modeButton.style.position = "fixed";
modeButton.style.bottom = "20px";
modeButton.style.right = "20px";
modeButton.style.padding = "12px 18px";
modeButton.style.border = "none";
modeButton.style.borderRadius = "8px";
modeButton.style.cursor = "pointer";

document.body.appendChild(modeButton);

modeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

});


// ==============================
// 5. Add Light Mode CSS
// ==============================

const style = document.createElement("style");

style.innerHTML = `
    .light-mode {
        background: #ffffff;
        color: #111111;
    }

    .light-mode header {
        background: #eeeeee;
    }

    .light-mode header a {
        color: #111111;
    }

    .light-mode .about,
    .light-mode .projects {
        background: #f5f5f5;
    }

    .light-mode .project {
        background: #ffffff;
    }

    .light-mode p {
        color: #444444;
    }
`;

document.head.appendChild(style);


// ==============================
// 6. Current year
// ==============================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Hassan. All Rights Reserved.` 