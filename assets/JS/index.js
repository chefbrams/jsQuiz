

var startButton = document.getElementById("startButton")


var jsQuestions = [
    {
        q: "JavaScript one of the fundemental languages of the ___? ",
        a: ["web", "computer", "world", "TV"],
        c: "web"

    },
    {
        q: "JavaScript one of the fundemental languages of the ___? ",
        a: ["web", "computer", "world", "TV"],
        c: "web"

    },
    {
        q: "JavaScript one of the fundemental languages of the ___? ",
        a: ["web", "computer", "world", "TV"],
        c: "web"

    },
    {
        q: "JavaScript one of the fundemental languages of the ___? ",
        a: ["web", "computer", "world", "TV"],
        c: "web"
    },
    {
        q: "JavaScript one of the fundemental languages of the ___? ",
        a: ["web", "computer", "world", "TV"],
        c: "web"
    }
    // question counter, div to put questions, render questions with possible answers to drop point, create event listner for available options to click
    // check button against correct answer with additional event listner, create timeer
];



startButton.addEventListener("click", function (event) {
    console.log("click")
    console.log(event)
    startButton.style.display = "none"

})

