const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
sessionStorage.setItem("memberCount", 0);
const memberOrder = ["Habib_Amiraslanov.jpg", "Elmar_Verdiyev.jpg", "Kamal_Mustafayev.jpg", "Rashid_Mustafazada.jpg"];
const nameOrder = ["Habib", "Elmar", "Kamal", "Rashid"];
const surnameOrder = ["Amiraslanov", "Verdiyev", "Mustafayev", "Mustafazada"];
const ageOrder = ["16", "17", "18", "17"];
const majorOrder = ["BSCS", "BSIT", "BSIT", "BSIT"];
const roleOrder = ["Programmer", "Team Leader", "Programmer", "Programmer"];
const workedOnOrder = ["Team Members", "Home Page, Code Artist", "Hour of Code", "Web Project"];


const habibMsg = `Habib Amiraslanov, born in 2008, is one of the members of Team 18 of the Principles of Info. Systems course at ADA University. Currently
he is studying Bachelor of Science in Computer Science. Habib has extensive experience with playing basketball, having trained for 4 years.
In his free time, Habib likes to listen to music and sketch various drawings. Moreover, he enjoys playing games and watching movies. As part
of the current project, Habib has been assigned to create the Team Members page of the "Kababchilar" website.`;


const elmarMsg = `Elmar Verdiyev, born in 2007, is the team leader of Team 18 of the Principles of Info. Systems course at ADA University.
Currently, he is studying Bachelor of Science in Information Technology. Elmar is passionate about both technical and humanities subjects.
Some of his most favourite subjects include: Maths, Physics, Economics, and Politics. Furthermore, Elmar enjoys playing games and enlightening
his knowledge. As part of the current project, Elmar has been assigned to create the Home page of the "Kababchilar" website and supervises the
consistency of it.`;


const kamalMsg = `Kamal Mustafayev, born in 2006, is one of the members of Team 18 of the Principles of Info. Systems course at ADA University.
Currently, he is studying Bachelor of Science in Information Technology. Previously, Kamal took part in football trainings for 5 years 
and basketball trainings for 2 years. Kamal enjoys playing chess and keeps up to date with movies and TV series. He has aided the team with video 
editing in the past projects. As part of the current project, Kamal has been assigned to create the Hour of Code web page of the "Kababchilar" website.`;


const rashidMsg = `Rashid Mustafazada, born in 2007, is one of the members of Team 18 of the Principles of Info. Systems course at ADA University.
Currently, he is studying Bachelor of Science in Information Technology. Rashid had 4 years of professional experience with volleyball. As a hobby,
Rashid enjoys learning abour different cars and doing photography. He also enjoys playing video games. As part of the current project, Rashid has been 
assigned to create the Web Project page of the "Kababchilar" website.`;

const msgOrder = [habibMsg, elmarMsg, kamalMsg, rashidMsg];

nextButton.addEventListener("click", () => {
    // Ensures that the next button does not go beyond the last element of each array
    if (parseInt(sessionStorage.getItem("memberCount")) < 3) {
        sessionStorage.setItem("memberCount", parseInt(sessionStorage.getItem("memberCount")) + 1);
        document.querySelector(".picZone").src = `./media/${memberOrder[sessionStorage.getItem("memberCount")]}`; 
        
        document.querySelector(".name").innerHTML = nameOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".surname").innerHTML = surnameOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".age").innerHTML = ageOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".major").innerHTML = majorOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".role").innerHTML = roleOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".workedOn").innerHTML = workedOnOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".detailed").innerHTML = msgOrder[parseInt(sessionStorage.getItem("memberCount"))];
    } 
});

prevButton.addEventListener("click", () => {
    // Ensures that the prev button does not go beyond the first element of each array
    if (parseInt(sessionStorage.getItem("memberCount")) > 0) {
        sessionStorage.setItem("memberCount", parseInt(sessionStorage.getItem("memberCount")) - 1);
        document.querySelector(".picZone").src = `./media/${memberOrder[sessionStorage.getItem("memberCount")]}`; 

        document.querySelector(".name").innerHTML = nameOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".surname").innerHTML = surnameOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".age").innerHTML = ageOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".major").innerHTML = majorOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".role").innerHTML = roleOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".workedOn").innerHTML = workedOnOrder[parseInt(sessionStorage.getItem("memberCount"))];
        document.querySelector(".detailed").innerHTML = msgOrder[parseInt(sessionStorage.getItem("memberCount"))];
    }
});