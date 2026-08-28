/* =========================================================
   20. RESTART
========================================================= */

function restartTest() {

    state.testStarted = false;

    initializeScores();

    state.currentQuestionIndex = 0;

    state.activeQuestions = [];

    state.answerHistory = {};

    showScreen(startScreen);

    setSidebarTestMode(false);

}


/* =========================================================
   21. EVENT LISTENERS
========================================================= */

startButton.addEventListener(
    "click",
    startTest
);


restartButton.addEventListener(
    "click",
    restartTest
);

backButton.addEventListener(
    "click",
    goBack
);

document
    .getElementById("downloadResultsButton")
    ?.addEventListener(
        "click",
        downloadResultsHTML
    );

document.getElementById("downloadJSONButton")
    ?.addEventListener(
        "click",
        downloadResultsJSON
    );


/* =========================================================
   22. INITIAL STATE
========================================================= */

initializeScores();