// Ask User for Name
const marqueeTitle = document.getElementById("marqueeTitle");
var userName = sessionStorage.getItem("username");

if (userName === null) {
    userName = prompt("Please Enter Your Name: ");
} 

if (userName !== null && userName !== "") {
    marqueeTitle.innerHTML = `Welcome, ${userName}!`;
    sessionStorage.setItem("username", userName);
}



// Delete Welcome Marquee Sign
const closeButton = document.getElementById("close");
const closeImage = document.getElementById("closeImage");
const welcomeSign = document.getElementById("marqueeWelcome");

function closeWelcomeSign() {
    welcomeSign.hidden = true;
    closeImage.src = "./media/tickButton.svg";
}

function openWelcomeSign() {
    welcomeSign.hidden = false;    
    closeImage.src = "./media/xButton.svg";
}

closeButton.addEventListener("click", () => {
    if (closeImage.getAttribute("src") === "./media/xButton.svg") {
        closeWelcomeSign();
    } else {
        openWelcomeSign();
    }
});


// Collapsible Paragraphs
function collapse(collNumber) {
    var article = document.querySelector(`.article${collNumber}`);
    var para = article.querySelector("p");
    if (para.style.display === "none") {
        para.style.display = "inline";
        para.style.marginTop = "-1px";
        article.style.border = "1px solid #00ADB5";
    } else {
        para.style.display = "none";
        article.style.border = "0";
    }
}