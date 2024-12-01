const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

sessionStorage.setItem("picCount", 0);

const picOrder = ["HOC1.jpg", "HOC2.jpg", "HOC3.jpg", "HOC4.jpg", "HOC5.jpg"];

nextButton.addEventListener("click", () => {
    // Does not allow going beyond the last picture
    if (parseInt(sessionStorage.getItem("picCount")) < 4) {
        sessionStorage.setItem("picCount", parseInt(sessionStorage.getItem("picCount")) + 1);
        document.querySelector("#groupPhoto").src = `./media/hour-of-code-pics/${picOrder[sessionStorage.getItem("picCount")]}`; 
    } 
});

prevButton.addEventListener("click", () => {
    // Does not allow going beyond the first picture
    if (parseInt(sessionStorage.getItem("picCount")) > 0) {
        sessionStorage.setItem("picCount", parseInt(sessionStorage.getItem("picCount")) - 1);
        document.querySelector("#groupPhoto").src = `./media/hour-of-code-pics/${picOrder[sessionStorage.getItem("picCount")]}`; 
    }
});
