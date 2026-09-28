
/* =========================================================
   6. INITIALIZE SCORE OBJECT
========================================================= */

function initializeScores() {

    state.scores = {};

    Object.keys(scoreDefinitions).forEach(key => {
        state.scores[key] = 0;
    });

}


/* =========================================================
   7. START TEST
========================================================= */

function startTest() {

    state.testStarted = true;

    initializeScores();

    state.currentQuestionIndex = 0;

    state.questionQueue = [questions[0]]

    state.total = calculateQuestionsTotal();

    state.answerHistory = {};

    if (!app.classList.contains("sidebar-collapsed")) {
        sidebarToggle.click()
    }

    setSidebarTestMode(true);

    showScreen(testScreen);

    renderQuestion();

}


/* =========================================================
   8. SHOW SCREEN
========================================================= */

function showScreen(screen) {

    document.querySelectorAll(".screen")
        .forEach(element => {
            element.classList.remove("active");
        });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =========================================================
   9. RENDER QUESTION
========================================================= */

function renderQuestion() {

    const question =
        state.questionQueue[state.questionQueue.length - 1]

    if (!question) {
        finishTest();
        return;
    }

    const displayNumber = state.questionQueue.length;

    questionCounter.textContent =
        `Question ${displayNumber} of ${state.total}`;


    const percent =
        Math.round(
            ((displayNumber-1) / state.total) * 100
        );

    progressPercent.textContent =
        `${percent}%`;

    progressBar.style.width =
        `${percent}%`;


    /* Text */

    questionText.textContent =
        question.text;


    /* Image */

    if (question.image) {

        questionImage.src =
            question.image;

        questionImage.alt =
            "Question image";

        questionImageContainer.classList.add("visible");

    } else {

        questionImageContainer.classList.remove("visible");

        questionImage.src = "";

    }

    /* Answers */

    answersContainer.innerHTML = "";

    if (question.id == "character"){
        const button = document.createElement("button");
        button.className = "answer-button";
        button.textContent = question.answers[0].text;
        button.addEventListener(
            "click",
            () => initQuestions(man_woman = "man",
                                pronoun = "he",
                                possesive = "his",
                                object_noun = "him")
        );
        const button2 = document.createElement("button");
        button2.className = "answer-button";
        button2.textContent = question.answers[1].text;
        button2.addEventListener(
            "click",
            () => initQuestions(man_woman = "woman",
                                pronoun = "she",
                                possesive = "hers",
                                object_noun = "her")
        );
        answersContainer.appendChild(button);
        answersContainer.appendChild(button2);
    } else {
        question.answers.forEach(
            (answer, answerIndex) => {

                const button =
                    document.createElement("button");

                button.className =
                    "answer-button";

                button.textContent =
                    answer.text;
                
                button.addEventListener(
                    "click",
                    () => selectAnswer(
                        answer,
                        answerIndex
                    )
                );

                answersContainer.appendChild(button);

            }
        );
    }

    backButton.disabled =
        state.currentQuestionIndex === 0;

    /* Re-trigger animation */

    const card =
        document.getElementById("questionCard");

    card.style.animation = "none";

    void card.offsetWidth;

    card.style.animation =
        "questionIn 0.35s ease";

}


/* =========================================================
   10. SELECT ANSWER
========================================================= */

function selectAnswer(
    answer,
    answerIndex
) {
    const question =
        state.questionQueue[state.questionQueue.length - 1]

    state.answerHistory[question.id] = { //Store the answer so we can reverse it later.
        answerIndex: answerIndex,
        answer: answer
    };

    applyScore(answer, +1); //Add the answer's scores.

    if (answer.followUp) {
        state.total++;
        while (questions[state.currentQuestionIndex++].id != answer.followUp);
        state.questionQueue.push(questions[state.currentQuestionIndex-1]);
    } else {
        while (questions[state.currentQuestionIndex++].type == "followup");
        state.questionQueue.push(questions[state.currentQuestionIndex]);
    }


    setTimeout(() => {

        renderQuestion();

    }, 120);

}

/* =========================================================
   10b. BACK BUTTON
========================================================= */

function applyScore(
    answer,
    multiplier
) {

    if (!answer.score) {
        return;
    }


    Object.entries(answer.score)
        .forEach(
            ([scoreName, points]) => {

                if (
                    typeof state.scores[scoreName]
                    !== "number"
                ) {
                    state.scores[scoreName] = 0;
                }


                state.scores[scoreName] +=
                    points * multiplier;

            }
        );

}

function goBack() {

    if (state.currentQuestionIndex <= 0) {
        return;
    }

    const question = state.questionQueue.pop(); //remove!

    const prevID = state.questionQueue[state.questionQueue.length - 1].id; 
    while (questions[--state.currentQuestionIndex].id != prevID); //rewind index

    const history =
        state.answerHistory[
            question.id
        ];

    if (question.type == "followup") state.total--;

    if (!history) {
        renderQuestion();
        return;
    }

    applyScore(
        history.answer,
        -1
    ); // Reverse the score from the answer.

    delete state.answerHistory[
        question.id
    ];

    renderQuestion();
}


/* =========================================================
   12. FINISH TEST
========================================================= */

function finishTest() {

    state.testStarted = false;

    progressBar.style.width = "100%";
    progressPercent.textContent = "100%";

    calculateResults();

    setSidebarTestMode(false);

    showScreen(resultsScreen);

}