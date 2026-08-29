/* =========================================================
   3. QUESTIONS
========================================================= */

/*
    This is the main thing you will edit.

    Each answer can give points to ANY score.

    Example:

        score: {
            L: 2,
            R: 1,
            Empathy: 3
        }

    means selecting that answer gives:

        Lover +2
        Romantic +1
        Empathy +3
*/


const questions = [




    {
        id: "q1",
        text:
            "The King's emissary comes to your cottage door, announced by a tucket from a bugle. " 
             + "He declares that you are called to court at once to embark on a quest. What is your response?",
        image: "images/questions/serfs-cottage.jpg.avif",

        answers: [
            {
                text:
                    "Follow him immediately! This is a once in a lifetime oppurtunity",
                score: {
                    E: 3,
                    H: 2,
                    Inertia: -2
                }
            },
            {
                text:
                    "Start packing your bags. For King and Country!",
                score: {
                    E: 2,
                    W: 1,
                    S: 1,
                    Orderliness: 1,
                    Dutifulness: 2,
                    Obedience: 1,
                }
            },
            {
                text:
                    "Welcome him in for tea. No traveller should go without hospitality. The quest will come when it will",
                score: {
                    A: 3,
                    R: 1,
                    Peace: 1
                },
                followUp: "q1-tea"
            },
            {
                text:
                    "Ask about the quest. I have to know what this is all about before I embark",
                score: {
                    P: 3,
                    Prudence: 3,
                    Openness: -1
                },
                followUp: "q1-secret"
            },
            {
                text:
                    "Suspicion. I do not want to leave my cottage...",
                score: {
                    E: -2,
                    D: 1,
                    L: 1,
                    Inertia: 3
                },
                followUp: "q1-forced"
            }
        ]
    },

    {
        id: "q1-forced",
        text:
            "The emissary insists you obey the summons, and his armed guards put their hands on the hilts of their weapons in a very persuasive way. "
             + "You are forced to go, but in what way is up to you. Do you:",
        image: null,

        answers: [
            {
                text:
                    "Obey calmly with your head up. Cause no reason for conflict, but show them you aren't one to be trodden down",
                score: {
                    W: 2,
                    P: 1,
                    S: -1,
                    L: 1,
                    Courage: 1,
                    Dutifulness: 2,
                }
            },
            {
                text:
                    "Complain all the while about how they have inconvenienced you",
                score: {
                    L: -1,
                    A: -2,
                    Dutifulness: -1,
                    Inertia: 2,
                }
            },
            {
                text:
                    "Kick and Scream until they are forced to escort you themselves",
                score: {
                    A: -1,
                    E: 1,
                    W: -1,
                    Inertia: 2,
                    Dutifulness: -2
                }
            },
            {
                text:
                    "Feeze up in fear (be honest)",
                score: {
                    D: 1,
                    W: -1,
                    S: 1,
                    Prudence: 3,
                    Courage: -2
                }
            }
        ]
    },
     {
        id: "q1-secret",
        text:
            "The emissary answers none of your questions. Apparently, the object of the quest is a secret. You are forced to obey the summons. Do you:",
        image: null,

        answers: [
            {
                text:
                    "Glare suspiciously at the emissary, and maintain all caution on the journey. Trust no one",
                score: {
                    P: 1,
                    D: 1,
                    S: -1,
                    Openness: -2
                }
            },
            {
                text:
                    "Complain all the while about how they have inconvenienced you",
                score: {
                    L: -1,
                    A: -2,
                    Dutifulness: -1,
                    Inertia: 2,
                }
            },
            {
                text:
                    "Kick and Scream until they are forced to escort you themselves",
                score: {
                    A: -1,
                    E: 1,
                    W: -1,
                    Inertia: 2,
                    Dutifulness: -2
                }
            },
            {
                text:
                    "Proceed calmly. There is no use worrying about what is in store",
                score: {
                    P: 1,
                    W: 1,
                    L: 1,
                    Nueroticism: -3,
                    Openness: 1
                }
            }
        ]
    },
    {
        id: "q1-tea",
        text:
            "At tea, the emissary is polite enough, but answers none of your questions. Apparently, you are bound to obey the summons. Do you:",
        image: null,

        answers: [
            {
                text:
                    "Glare suspiciously at the emissary, and maintain all caution on the journey. Trust no one",
                score: {
                    P: 1,
                    D: 1,
                    S: -1,
                    Openness: -2
                }
            },
            {
                text:
                    "Complain all the while about how they have inconvenienced you",
                score: {
                    L: -1,
                    A: -2,
                    Dutifulness: -1,
                    Inertia: 2,
                }
            },
            {
                text:
                    "Kick and Scream until they are forced to escort you themselves",
                score: {
                    A: -1,
                    E: 1,
                    W: -1,
                    Inertia: 2,
                    Dutifulness: -2
                }
            },
            {
                text:
                    "Accept the duty, and calmly embark once you have cleaned for tea",
                score: {
                    P: 1,
                    W: 1,
                    L: 1,
                    Nueroticism: -1,
                    Openness: 1
                }
            }
        ]
    },


    /* =====================================================
       QUESTION WITH IMAGE
    ===================================================== */

    {
        id: "q2",

        category: "Ideals",

        text:
            "Which scene feels most compelling to you?",

        image:
            "images/question-landscape.jpg",

        answers: [

            {
                text:
                    "A quiet cabin where I can build a life according to my own values.",

                score: {
                    P: 2,
                    W: 2,
                    Independence: 2
                }
            },

            {
                text:
                    "A dramatic journey toward something I deeply believe in.",

                score: {
                    R: 3,
                    E: 2,
                    Courage: 1
                }
            },

            {
                text:
                    "A community where everyone has what they need.",

                score: {
                    A: 3,
                    Empathy: 3
                }
            }

        ]
    },


    /* =====================================================
       CONDITIONAL FOLLOW-UP EXAMPLE
    ===================================================== */

    {
        id: "q3",

        category: "Behaviors",

        text:
            "You suddenly have an entire week free with no obligations. What sounds best?",

        image: null,

        answers: [

            {
                text:
                    "Travel somewhere I've never been.",

                score: {
                    E: 3,
                    Openness: 2
                },

                /*
                    This causes q3-followup-adventure to
                    appear immediately after this question.
                */

                followUp: "q3-adventure"
            },

            {
                text:
                    "Stay home and work on a personal project.",

                score: {
                    D: 2,
                    Artfulness: 3
                }
            },

            {
                text:
                    "Take things one day at a time and see what happens.",

                score: {
                    W: 3,
                    Independence: 1
                },

                followUp: "q3-spontaneous"
            }

        ]
    },


    /* =====================================================
       FOLLOW-UP QUESTION
    ===================================================== */

    {
        id: "q3-adventure",

        type: "followup",

        category: "Follow-up",

        text:
            "You arrive somewhere completely unfamiliar. What do you do first?",

        image: null,

        answers: [

            {
                text:
                    "Start talking to locals and see where the day takes me.",

                score: {
                    E: 2,
                    Openness: 2,
                    Empathy: 1
                }
            },

            {
                text:
                    "Find a map and identify the most interesting places.",

                score: {
                    E: 2,
                    P: 1,
                    Openness: 2
                }
            },

            {
                text:
                    "Wander without a plan and follow whatever catches my attention.",

                score: {
                    W: 3,
                    Improvisation: 1
                }
            }

        ]
    },


    /* =====================================================
       ANOTHER FOLLOW-UP
    ===================================================== */

    {
        id: "q3-spontaneous",

        type: "followup",

        category: "Follow-up",

        text:
            "If the spontaneous plan goes badly, what are you most likely to do?",

        image: null,

        answers: [

            {
                text:
                    "Adapt and keep going.",

                score: {
                    W: 2,
                    Courage: 1,
                    Independence: 2
                }
            },

            {
                text:
                    "Stop and create a better plan.",

                score: {
                    P: 3,
                    Orderliness: 2
                }
            },

            {
                text:
                    "Look for the unexpected opportunity hidden inside the problem.",

                score: {
                    D: 2,
                    Innovation: 2
                }
            }

        ]
    },


    /* =====================================================
       MORE QUESTIONS
    ===================================================== */

    {
        id: "q4",

        category: "Relationships",

        text:
            "When someone you care about succeeds, what is your strongest reaction?",

        image: null,

        answers: [

            {
                text:
                    "I feel genuinely happy because their happiness matters to me.",

                score: {
                    L: 2,
                    A: 2,
                    Empathy: 3
                }
            },

            {
                text:
                    "I'm proud of them for putting in the work.",

                score: {
                    S: 2,
                    Orderliness: 2
                }
            },

            {
                text:
                    "It inspires me to pursue something bigger myself.",

                score: {
                    H: 3,
                    Courage: 1,
                    Independence: 1
                }
            }

        ]
    }
];