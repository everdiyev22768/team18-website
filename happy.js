var pages = ["./team-members.html", "./hour-of-code.html", "./web-project.html", "./index.html", "./code-artist.html"];
const happyLink = document.getElementById("happyLink");

function getRandomPage() {
    randomIndex = Math.floor(Math.random() * pages.length);

    // Check if the current page is not selected
    while(pages[randomIndex] === sessionStorage.getItem("previousIndex")) {
        randomIndex = Math.floor(Math.random() * pages.length);
    }

    happyLink.href = pages[randomIndex];
    sessionStorage.setItem("previousIndex", happyLink.getAttribute("href")); // Store the value of the previous selection in storage
}