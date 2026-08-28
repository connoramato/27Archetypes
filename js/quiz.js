
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

    state.activeQuestions = [...questions];

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
        state.activeQuestions[
            state.currentQuestionIndex
        ];

    if (!question) {
        finishTest();
        return;
    }


    /* Counter */

    const displayNumber =
        state.currentQuestionIndex + 1;

    const total =
        state.activeQuestions.length;

    questionCounter.textContent =
        `Question ${displayNumber} of ${total}`;


    const percent =
        Math.round(
            (state.currentQuestionIndex / total) * 100
        );

    progressPercent.textContent =
        `${percent}%`;

    progressBar.style.width =
        `${percent}%`;


    /* Category */

    questionCategory.textContent =
        question.category;


    /* Text */

    questionText.textContent =
        question.text;


    /* Instruction */

    if (question.type === "followup") {

        questionInstruction.textContent =
            "A follow-up question based on your previous answer.";

    } else {

        questionInstruction.textContent =
            "Choose the answer that best describes you.";

    }


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
        state.activeQuestions[
            state.currentQuestionIndex
        ];


    /*
        Store the answer so we can reverse it later.
    */

    state.answerHistory[question.id] = {

        answerIndex: answerIndex,

        answer: answer

    };


    /*
        Add the answer's scores.
    */

    applyScore(answer, +1);


    /*
        Insert a conditional follow-up if necessary.
    */

    if (answer.followUp) {

        insertFollowUp(
            answer.followUp
        );

    }


    /*
        Move forward.
    */

    state.currentQuestionIndex++;


    setTimeout(() => {

        renderQuestion();

    }, 180);

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

    /*
        Can't go back from the first question.
    */

    if (state.currentQuestionIndex <= 0) {
        return;
    }


    /*
        The question we're currently viewing hasn't
        been answered yet.

        So move back to the question that produced it.
    */

    state.currentQuestionIndex--;


    const question =
        state.activeQuestions[
            state.currentQuestionIndex
        ];


    const history =
        state.answerHistory[
            question.id
        ];


    if (!history) {

        renderQuestion();

        return;

    }


    /*
        Reverse the score from the answer.
    */

    applyScore(
        history.answer,
        -1
    );


    /*
        If the answer created a follow-up,
        remove that follow-up.
    */

    if (history.answer.followUp) {

        removeFollowUp(
            history.answer.followUp
        );

    }


    /*
        Remove this answer from history.

        The user is now looking at the question
        as if they haven't answered it yet.
    */

    delete state.answerHistory[
        question.id
    ];


    renderQuestion();

}

function removeFollowUp(questionId) {

    const index =
        state.activeQuestions.findIndex(
            question =>
                question.id === questionId
        );


    if (index === -1) {
        return;
    }


    state.activeQuestions.splice(
        index,
        1
    );

}

/* =========================================================
   11. INSERT FOLLOW-UP
========================================================= */

function insertFollowUp(questionId) {

    /*
        Find the question definition.
    */

    const followUp =
        questions.find(
            question => question.id === questionId
        );

    if (!followUp) {

        console.warn(
            `Follow-up question "${questionId}" not found.`
        );

        return;
    }


    /*
        Prevent duplicate insertion.
    */

    const alreadyExists =
        state.activeQuestions.some(
            question => question.id === questionId
        );

    if (alreadyExists) {
        return;
    }


    /*
        Insert directly after the current question.
    */

    state.activeQuestions.splice(
        state.currentQuestionIndex + 1,
        0,
        followUp
    );

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