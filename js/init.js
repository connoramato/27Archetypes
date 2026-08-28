/* =========================================================
   4. APPLICATION STATE
========================================================= */

let state = {

    currentQuestionIndex: 0,

    /*
        Stores scores such as:

        {
            L: 7,
            S: 4,
            H: 10,
            P: 5,
            ...
        }
    */

    scores: {},

    /*
        Keeps track of questions dynamically added
        as follow-ups.
    */

    activeQuestions: [],

    /*
        Stores the user's answer for every question.

        Example:

        {
            q1: {
                answerIndex: 0,
                answer: {...}
            },

            q2: {
                answerIndex: 2,
                answer: {...}
            }
        }
    */

    answerHistory: {},

    //sidebar disabled during testing
    testStarted: false

};


/* =========================================================
   5. DOM REFERENCES
========================================================= */

const startScreen =
    document.getElementById("startScreen");

const testScreen =
    document.getElementById("testScreen");

const resultsScreen =
    document.getElementById("resultsScreen");

const startButton =
    document.getElementById("startButton");

const restartButton =
    document.getElementById("restartButton");

const questionText =
    document.getElementById("questionText");

const questionCategory =
    document.getElementById("questionCategory");

const questionInstruction =
    document.getElementById("questionInstruction");

const answersContainer =
    document.getElementById("answersContainer");

const questionCounter =
    document.getElementById("questionCounter");

const progressPercent =
    document.getElementById("progressPercent");

const progressBar =
    document.getElementById("progressBar");

const questionImageContainer =
    document.getElementById("questionImageContainer");

const questionImage =
    document.getElementById("questionImage");

const backButton =
    document.getElementById("backButton");

const sidebar = document.querySelector(".sidebar");