
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

    state.currentQuestionIndex = 1;

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

    const displayNumber = state.questionQueue.length + 1;

    questionCounter.textContent =
        `Question ${displayNumber} of 100`;


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
            () => initQuestions(restored = false,
                                man_woman = "man",
                                sibling = "brother",
                                child = "son")
        );
        const button2 = document.createElement("button");
        button2.className = "answer-button";
        button2.textContent = question.answers[1].text;
        button2.addEventListener(
            "click",
            () => initQuestions(restored = false, 
                                man_woman = "woman",
                                sibling = "sister",
                                child = "daughter")
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
        state.questionQueue.length <= 1;

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

function saveDictionary(key, dict) {
  try {
    const serialized = JSON.stringify(dict);
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error("Failed to save dictionary to localStorage:", error);
    return false;
  }
}

/*function selectAnswer(
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
        while (questions[state.currentQuestionIndex].id != answer.followUp) {
            state.currentQuestionIndex++;
        }
        state.questionQueue.push(questions[state.currentQuestionIndex]);
        state.currentQuestionIndex++;
    } else {
        while (questions[state.currentQuestionIndex].type == "followup") {
            state.currentQuestionIndex++;
        }
        state.questionQueue.push(questions[state.currentQuestionIndex]);
        state.currentQuestionIndex++;
    }

    saveDictionary("progress",state)

    setTimeout(() => {

        renderQuestion();

    }, 120);

}*/

function selectAnswer(answer, answerIndex) {

    const question =
        state.questionQueue[state.questionQueue.length - 1];

    // Save the index before processing the answer.
    const previousIndex = state.currentQuestionIndex;

    state.answerHistory[question.id] = {
        answerIndex: answerIndex,
        answer: answer,
        previousIndex: previousIndex
    };

    applyScore(answer, +1);

    // Find the end of the consecutive followup block.
    let blockEnd = previousIndex;

    while (
        blockEnd < questions.length &&
        questions[blockEnd].type === "followup"
    ) {
        blockEnd++;
    }

    // CASE 1: The answer selects a followup.
    if (answer.followUp) {

        // Search ONLY within this parent's followup block.
        let followUpIndex = -1;

        for (let i = previousIndex; i < blockEnd; i++) {

            if (questions[i].id === answer.followUp) {
                followUpIndex = i;
                break;
            }

        }

        if (followUpIndex === -1) {

            console.error(
                "Followup not found in expected block:",
                answer.followUp,
                question.id
            );

            applyScore(answer, -1);
            delete state.answerHistory[question.id];

            return;
        }

        // Count the selected followup.
        state.total++;

        // Add the selected followup to the queue.
        state.questionQueue.push(questions[followUpIndex]);

        // Skip the REST of the followup block.
        state.currentQuestionIndex = blockEnd;

    }

    // CASE 2: No followup selected.
    else {

        // Skip the entire followup block.
        const nextIndex = blockEnd;

        if (nextIndex >= questions.length) {

            state.currentQuestionIndex = nextIndex;

            saveDictionary("progress", state);

            setTimeout(() => finishTest(), 120);

            return;
        }

        // Add the next regular question.
        state.questionQueue.push(questions[nextIndex]);

        state.currentQuestionIndex = nextIndex + 1;

    }

    saveDictionary("progress", state);

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

/*function goBack() {

    if (state.questionQueue.length <= 1) {
        return;
    }

    // Remove the currently displayed question.
    const removedQuestion = state.questionQueue.pop();

    // The previous question is now active again.
    const previousQuestion =
        state.questionQueue[state.questionQueue.length - 1];

    // Retrieve the answer that led away from that question.
    const history =
        state.answerHistory[previousQuestion.id];

    if (history) {

        // Reverse its score.
        applyScore(history.answer, -1);

        // Restore the index from before that answer.
        state.currentQuestionIndex = history.previousIndex;

        // Remove the old answer.
        delete state.answerHistory[previousQuestion.id];

    }

    // If the removed question was a followup,
    // remove it from the total question count.
    if (removedQuestion.type === "followup") {
        state.total--;
    }

    saveDictionary("progress", state);

    renderQuestion();

}*/

function goBack() {

    if (state.questionQueue.length <= 1) {
        return;
    }

    // Remove current question.
    const removedQuestion = state.questionQueue.pop();

    // Get the previous question.
    const previousQuestion =
        state.questionQueue[state.questionQueue.length - 1];

    // Retrieve the answer that led away from it.
    const history =
        state.answerHistory[previousQuestion.id];

    if (history) {

        // Reverse the previous answer's scores.
        applyScore(history.answer, -1);

        // Restore the exact original index.
        state.currentQuestionIndex = history.previousIndex;

        // Remove its answer history.
        delete state.answerHistory[previousQuestion.id];

    }

    // Remove followup from the total if necessary.
    if (removedQuestion.type === "followup") {
        state.total--;
    }

    saveDictionary("progress", state);

    renderQuestion();

}


function restoreSession() {

    try {

        const savedProgress = localStorage.getItem("progress");

        if (!savedProgress) {
            return;
        }

        const savedState = JSON.parse(savedProgress);

        // Restore all saved state properties
        Object.assign(state, savedState);

        // Make sure the quiz is marked as active
        state.testStarted = true;

        // Restore the quiz interface
        setSidebarTestMode(true);

        showScreen(testScreen);

        initQuestions(restored=true);

        renderQuestion();

    } catch (error) {

        console.error("Failed to restore quiz session:", error);

        alert("Could not restore your previous session.");

    }

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