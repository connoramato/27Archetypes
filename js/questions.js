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
man_woman = "man"
formal = "sir"
pronoun = "he"
possesive = "his"
object_noun = "him"

const questions = [




    {
        id: `q1`,
        text:
            `The King's emissary comes to your cottage door, announced by a tucket from a bugle. ` 
             + `He declares that you are called to court at once to embark on a quest. What is your response?`,
        image: `images/questions/serfs-cottage.jpg.avif`,

        answers: [
            {
                text:
                    `Follow him immediately! This is a once in a lifetime oppurtunity`,
                score: {
                    E: 3,
                    H: 2,
                    Inertia: -2
                }
            },
            {
                text:
                    `Start packing your bags. For King and Country!`,
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
                    `Welcome him in for tea. No traveller should go without hospitality. The quest will come when it will`,
                score: {
                    A: 3,
                    R: 1,
                    Peace: 1
                },
                followUp: `q1-tea`
            },
            {
                text:
                    `Ask about the quest. I have to know what this is all about before I embark`,
                score: {
                    P: 3,
                    Prudence: 3,
                    Openness: -1
                },
                followUp: `q1-secret`
            },
            {
                text:
                    `Suspicion. I do not want to leave my cottage...`,
                score: {
                    E: -2,
                    D: 1,
                    L: 1,
                    Inertia: 3
                },
                followUp: `q1-forced`
            }
        ]
    },

    {
        id: `q1-forced`,
        text:
            `The emissary insists you obey the summons, and his armed guards put their hands on the hilts of their weapons in a very persuasive way. `
             + `You are forced to go, but in what way is up to you. Do you:`,
        image: `images/questions/serfs-cottage.jpg.avif`,

        type: `followup`,

        category: `Follow-up`,

        answers: [
            {
                text:
                    `Obey calmly with your head up. Cause no reason for conflict, but show them you aren't one to be trodden down`,
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
                    `Complain all the while about how they have inconvenienced you`,
                score: {
                    L: -1,
                    A: -2,
                    Dutifulness: -1,
                    Inertia: 2,
                }
            },
            {
                text:
                    `Kick and Scream until they are forced to escort you themselves`,
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
                    `Feeze up in fear (be honest)`,
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
        id: `q1-secret`,
        text:
            `The emissary answers none of your questions. Apparently, the object of the quest is a secret. You are forced to obey the summons. Do you:`,
        image: `images/questions/serfs-cottage.jpg.avif`,

        type: `followup`,

        category: `Follow-up`,

        answers: [
            {
                text:
                    `Glare suspiciously at the emissary, and maintain all caution on the journey. Trust no one`,
                score: {
                    P: 1,
                    D: 1,
                    S: -1,
                    Openness: -2
                }
            },
            {
                text:
                    `Complain all the while about how they have inconvenienced you`,
                score: {
                    L: -1,
                    A: -2,
                    Dutifulness: -1,
                    Inertia: 2,
                }
            },
            {
                text:
                    `Kick and Scream until they are forced to escort you themselves`,
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
                    `Proceed calmly. There is no use worrying about what is in store`,
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
        id: `q1-tea`,
        text:
            `At tea, the emissary is polite enough, but answers none of your questions. Apparently, you are bound to obey the summons. Do you:`,
        image: `images/questions/serfs-cottage.jpg.avif`,

        type: `followup`,

        category: `Follow-up`,

        answers: [
            {
                text:
                    `Glare suspiciously at the emissary, and maintain all caution on the journey. Trust no one`,
                score: {
                    P: 1,
                    D: 1,
                    S: -1,
                    Openness: -2
                }
            },
            {
                text:
                    `Complain all the while about how they have inconvenienced you`,
                score: {
                    L: -1,
                    A: -2,
                    Dutifulness: -1,
                    Inertia: 2,
                }
            },
            {
                text:
                    `Kick and Scream until they are forced to escort you themselves`,
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
                    `Accept the duty, and calmly embark once you have cleaned for tea`,
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
    {
        id: `q2`,
        text:
            `You are led into town and out on the highway to the city. ` 
             + `You can detect a hint of mocking as the emissary turns to you an asks "A question, good fellow: do you like long journeys?"`,
        image: `images/questions/highway.jpg.webp`,

        answers: [
            {
                text:
                    `Why yes! it could be quite the experience`,
                score: {
                    E: 2,
                    S: 2,
                    A: 1,
                    W: 1,
                    Optimism: 1,
                    Inertia: -2,
                }
            },
            {
                text:
                    `Not particularly, sir. I'd rather stay at home`,
                score: {
                    A: 1,
                    P: 1,
                    E: -1,
                    H: -1,
                }
            },
            {
                text:
                    `It depends, doesn't it, sir`,
                score: {
                    A: 1,
                    W: 1,
                    S: 1,
                    H: -1,
                    Peace: 1
                }
            },
            {
                text:
                    `*Defiant silence*`,
                score: {
                    A: -2,
                    H: 1,
                    W: -1,
                    E: 1,
                    Idealism: 1,
                }
            }
        ]
    },
    {
        id: `q3`,
        text:
            `You arrive to the capital city, entering throuhg looming gates and turning down bustling streets. How do you feel?`,
        image: `images/questions/bustling-medeival-street.jpg`,

        answers: [
            {
                text:
                    `Amazed! So many people and so much going on`,
                score: {
                    E: 1,
                    S: 2,
                    R: 1,
                    Extroversion: 2,
                }
            },
            {
                text:
                    `Uneasy. I prefer the countryside`,
                score: {
                    R: 2,
                    L: 1,
                    W: -1,
                    Inertia: 1,
                }
            },
            {
                text:
                    `Lost in thought. I am worried about what the king has summoned me for`,
                score: {
                    D: 2,
                    W: -1,
                    S: -1,
                    Peace: -1,
                    Nueroticism: 2,
                }
            }
        ]
    },
    {
        id: `q4`,
        text:
            `You arrive at the kings palace. The emissary goes in and tells you to wait in the plaza, where you see two people coming from the univeristy nearby. ` 
             + ` You gather from their conversation that one is a scholar and the other a philosopher. When they notice you, the scholar desperately seeks another opinion: `
             + `"Good ${formal}! You must help us settle this debate. I say that, given humans are inherently relational, the end of such sociability is comradery and mutual support. `
             + `My friend here disagrees, he says most social bonds are meaningless when compared to the knowledge shared only with those closest to us. What is your thought?"`,
        image: `images/questions/medival-marketplace.jpg`,

        answers: [
            {
                text:
                    `I suppose I agree with you. It is nice to have strong bonds, but I think the best thing for that is shared experience. `
                    + `To be together through it all, well that's life is it not?`,
                score: {
                    S: 4,
                    L: -1,
                    E: 1,
                    Empathy: 1,
                },
                followUp: `q4-scholar`
            },
            {
                text:
                    `I have to agree with your friend. To have your community around you is important, of course. But at least for myself, my greatest desire is to be known. `
                    + `I have much to share, and well everyone around us has much to share as well`,
                score: {
                    L: 4,
                    S: -1,
                    D: 1,
                    Idealism: 1,
                },
                followUp: `q4-philosopher`
            },
            {
                text:
                    `If I may, I would posit something else entirely. I think we need community, but to live well we need a community that shares values and goals. `
                    + `I think we need people to trust and close family, but it is best to grow with them to hte people we are meant to be.`,
                score: {
                    H: 4,
                    W: 1,
                    P: 1,
                    Idealism: 2
                },
                followUp: `q4-tie`
            },
            {
                text:
                    `I honestly can give no sure answer either way. It is, mayhaps, both in equal measure`,
                score: {
                    L: 1,
                    S: 1,
                    W: 1,
                    P: -1,
                    D: -1,
                    Peace: 1,
                    ProblemSolving: -1,
                },
                followUp: `q4-tie`
            }
        ]
    },
    {
        id: `q4-tie`,
        text:
            `They stand amazed. The scholar says "We are quite surprised by your words! I really just wanted the opinion of a commoner, but you have given us the answer of a learned ${man_woman}, though it doesn't help us settle our debate."`
            + ` The philosopher interjects "Indeed, there are many ponderous things in this city. In this world! Of course, the best way to seek truth is to ponder." The scholar quickly replies`
            + ` "Fool, the truth is not something that can be acheived in our minds alone! We must interact with the world to learn. We must study!" The philosopher says "Why don't we turn this debate as well to this learned stranger?"`
            + ` Who do you agree more with?`,
        image: `images/questions/serfs-cottage.jpg.avif`,

        type: `followup`,

        category: `Follow-up`,

        answers: [
            {
                text:
                    `The Philosopher`,
                score: {
                    P: 1,
                    D: 1,
                    L: 2,
                    Improvisation: 1,
                }
            },
            {
                text:
                    `The Scholar`,
                score: {
                    S: 2,
                    P: 1,
                    D: 1,
                    ProblemSolving: 1,
                }
            },
            {
                text:
                    `Neither. Though you appreciate seeking the truth, neither of them are fully correct`,
                score: {
                    P: 2,
                    W: 1,
                    Idealism: 1,
                }
            },
            {
                text:
                    `"Look guys... I'd love to stay and chat but I got this appointment with the king, so you know, don't wanna keep him waiting haha"`,
                score: {
                    P: -3,
                    D: -2,
                    Extroversion: -1,
                    Innovation: -1,
                    Artfulness: 1,
                }
            }
        ]
    },
    {
        id: `q4-scholar`,
        text:
            `The philosopher frowns. The scholar cheers "Ah, Victory! Though I must say we are quite surprised by your words! Though I really just wanted the opinion of a commoner, you have given us the answer of a learned ${man_woman}."`
            + ` The philosopher interjects "Indeed, there are many ponderous things in this city. In this world! Of course, the best way to seek truth is to ponder." The scholar quickly replies`
            + ` "Fool, the truth is not something that can be acheived in our minds alone! We must interact with the world to learn. We must study!" The philosopher says "Why don't we turn this debate as well to this learned stranger?"`
            + ` Who do you agree more with?`,
        image: `images/questions/serfs-cottage.jpg.avif`,

        type: `followup`,

        category: `Follow-up`,

        answers: [
            {
                text:
                    `The Philosopher`,
                score: {
                    P: 1,
                    D: 1,
                    L: 2,
                    Improvisation: 1,
                }
            },
            {
                text:
                    `The Scholar`,
                score: {
                    S: 2,
                    P: 1,
                    D: 1,
                    ProblemSolving: 1,
                }
            },
            {
                text:
                    `Neither. Though you appreciate seeking the truth, neither of them are fully correct`,
                score: {
                    P: 2,
                    W: 1,
                    Idealism: 1,
                }
            },
            {
                text:
                    `"Look guys... I'd love to stay and chat but I got this appointment with the king, so you know, don't wanna keep him waiting haha`,
                score: {
                    P: -3,
                    D: -2,
                    Extroversion: -1,
                    Innovation: -1,
                    Artfulness: 1,
                }
            }
        ]
    },
    {
        id: `q4-philosopher`,
        text:
            `The philosopher victoriously smirks as his companion "The truth will out, as they say". The scholar says "Alas! Though truly, we are quite surprised by your words! I really just wanted the opinion of a commoner, but you have given us the answer of a learned ${man_woman}."`
            + ` The philosopher interjects "Indeed, there are many ponderous things in this city. In this world! Of course, the best way to seek truth is to ponder." The scholar quickly replies`
            + ` "Fool, the truth is not something that can be acheived in our minds alone! We must interact with the world to learn. We must study!" The philosopher says "Why don't we turn this debate as well to this learned stranger?"`
            + ` Who do you agree more with?`,
        image: `images/questions/serfs-cottage.jpg.avif`,

        type: `followup`,

        category: `Follow-up`,

        answers: [
            {
                text:
                    `The Philosopher`,
                score: {
                    P: 1,
                    D: 1,
                    L: 2,
                    Improvisation: 1,
                }
            },
            {
                text:
                    `The Scholar`,
                score: {
                    S: 2,
                    P: 1,
                    D: 1,
                    ProblemSolving: 1,
                }
            },
            {
                text:
                    `Neither. Though you appreciate seeking the truth, neither of them are fully correct`,
                score: {
                    P: 2,
                    W: 1,
                    Idealism: 1,
                }
            },
            {
                text:
                    `"Look guys... I'd love to stay and chat but I got this appointment with the king, so you know, don't wanna keep him waiting haha`,
                score: {
                    P: -3,
                    D: -2,
                    Extroversion: -1,
                    Innovation: -1,
                    Artfulness: 1,
                }
            }
        ]
    },
    {
        id: `q5`,
        text:
            `At that moment, the courtyard gate opens, and an official leads you into the palace. As you walk through the courtyard, you begin eyeing an aged artist atop some scaffolding, sculpting the ornate edifice. `
            + `"Beauty is in the details, young ${formal}" he says, noticing your curiosity, "Are you a lover of art?"`,
        image: "images/questions/edifice.jpg",
        answers: [
            {
                text:
                    `Yes, it is beautiful to behold`,
                score: {
                    R: 4,
                    E: 3,
                    D: 1,
                }
            },
            {
                text:
                    `Yes, I appreciate the technique and skill especially`,
                score: {
                    R: 2,
                    H: 4,
                    P: 1,
                    Artfulness: 1,
                }
            },
            {
                text:
                    `Yes, good art is rich with meaning`,
                score: {
                    D: 1,
                    R: 2,
                    P: 4,
                    L: 1,
                }
            },
            {
                text:
                    `Yes, it is culture and people are edified by it`,
                score: {
                    E: 1,
                    H: 3,
                    S: 3,
                    P: 2,
                    A: 2,
                }
            },
            {
                text:
                    `I am human, am I not? Yes I love art in so far as I love the artist and what they have revealed`,
                score: {
                    D: 1,
                    L: 3,
                    R: 5,
                    P: 1,
                    Inertia: 1,
                }
            },
            {
                text:
                    `Well it depends - Sometimes I am not moved by it`,
                score: {
                    D: -1,
                    R: -3,
                    L: -2,
                    S: 1,
                    P: 1,
                }
            },
            {
                text:
                    `Eh..`,
                score: {
                    A: -1,
                    R: -5,
                    W: -1,
                }
            }
        ]
    },
    {
        id: "q6",
        text:
            `Leaving the courtyard, you enter a large atrium with a high ceiling. You are led down many passageways until you reach the great doors of the throne room. You enter and pay due homage. The king is regally dressed in gilded silk robes - a little shorter than you expected. `
            + `"Rise ${man_woman}" the king says jovially, "You are welcome! I hope our officials have treated you well." You reply cordially.\n`
            + `"Well now, let's not daddle; let's get straight to the point. You may be amazed to hear this, but we are in need of your help. `
            + `You see, it has come to my attention that you are related to the brigand known as The Rogue. It has been reported that he has been seen visiting your cottage on a number of occasians. `
            + `It is also claimed that if that dirty outlaw trusts anyone, it's you."\n Though you haven't seen your brother in a year, you have, of course, also heard (though whether you believe is another story) that your brother makes (or takes, more like) a fortune as a highwayman. `
            + `It is also true that before he dissapeared, he came by the cottage with strangely valuable gifts (making said rumors easier to believe). It is thirdly true that his whereabout were hardly known and life shrouded in mystery. `
            + `He isn't even your brother by blood. He was taken in, orphaned as he was, by your family when he was a boy. He has always felt like a real brother, since you were so young at the time. `
            + `Yes, he was distant at times and a whole lot of trouble on your mother, but he was a good brother... until he left one day, a man, sparsley returning home...\n`
            + `"All that so say" you are drawn back from your thoughts just in time to hear the king's conclusion "We are laying a trap for The Rogue, and you are going to lead him into it" `
            + `You stomach drops. You hope it didn't show on your face. "You will travel with a band of my best knights to his hideout. You will go in, and you must come out with him, alone, at any cost. `
            + `You see, it seems he is under the protection of a group of armed rebels in the north... the cost of sending an army all the way there is too steep for our coffers, young ${man_woman}. `
            + `Still, we need this problem gone. It is best if we can send a small party that can draw him out alone, finish the deal, and make their escape"\n`
            + `Before you can think of a way out of this, or even utter 'your grace', the king quickly sends you on your way. `
            + `"Our official will equip you for the journey. We thank you again, loyal subject, for your help in this most urgent matter" You are led away from the throne and out of the room. `
            + `As the door closes, you glimpse the king staring inquisitively at you. You are left standing at a great dark oak door thinking of how you might save your brother's life and, just as imperatively, save your own`,
        answers: [
            {
                text:
                    "What!?",
                score: {
                    A: 1,
                    W: -1,
                }
            },
            {
                text:
                    "Woah",
                score: {
                    H: 1,
                    L: 1,
                    D: 1,
                    Independence: 1
                }
            },
            {
                text:
                    "I see...",
                score: {
                    H: 1,
                    P: 1,
                    W: 1,
                    Peace: 1,
                }
            },
            {
                text:
                    "OK",
                score: {
                    S: 1,
                    W: 1,
                    Peace: 1
                }
            }
        ]
    },
    {
        id: "q7",
        text:
            `You are led to the palace stables to set off again. On your way you meet a couple arriving to the palace. The officials all greet them with a bow`
            + ` The gentleman greets you ponderously, then addresses the servants. "Go, prepare the wain. I'll have a word with this one" He turns to you. `
            + `"Good morrow, I expect your the one their sending up north?" You reply the affirmative. "Ah" He gives a look of pity. "I am sorry, you must feel great fear at what you have been compelled to do. However, I may have some helpful advice for you" `
            + `His lady chimes in "Oh, and it would be prudent to keep this information close to your chest" imploring caution with her eyes. The gentleman looks down the hall before continuing `
            + `"Not everyone in this land is loyal to the king. The rebels the king speaks of are more widespread than he cares to admit or wants to believe. As for ourselves, we think war is on our doorsteps" `
            + `The lady picks up the point "Fear not, young traveller. Though what lies in store will be difficult, you do not know when a friend may be around the corner." The gentleman adds `
            + `"Be on the look out for the right oppurunity. As for what we will do... we'll try our best here with the king in his court. We are not afraid of a little politicking. Be well."`
            + `The lady sends you on your way "Fare thee well!"`,
        image:"images/questions/lord.jpg",
        answers: [
            {
                text:
                    "How friendly! If I were not a commoner I would eagerly have their company",
                score: {
                    L: 1,
                    S: 4,
                    A: 1,
                    Extroversion: 2
                }
            },
            {
                text:
                    "How helpful! This information just might get me out of the trap",
                score: {
                    P: 3,
                    D: 1,
                    A: 1,
                    Innovation: 2
                }
            },
            {
                text:
                    "How kind! To offer advice to a commoner against their loyalty to the king...",
                score: {
                    A: 4,
                    H: 1,
                    E: 1,
                }
            },
            {
                text:
                    "Despite my impending journey, I feel warm! I wish I could be close to these two, there is just something about them",
                score: {
                    L: 4,
                    S: 1,
                    R: 1,
                    Extroversion: 2
                }
            },
            {
                text:
                    "What am I even supposed to do with that information?",
                score: {
                    L: -2,
                    P: -4,
                }
            }
        ]
    },


    /* =====================================================
       CONDITIONAL FOLLOW-UP EXAMPLE
    ===================================================== */

    {
        id: `q3`,

        category: `Behaviors`,

        text:
            `You suddenly have an entire week free with no obligations. What sounds best?`,

        image: null,

        answers: [

            {
                text:
                    `Travel somewhere I've never been.`,

                score: {
                    E: 3,
                    Openness: 2
                },

                /*
                    This causes q3-followup-adventure to
                    appear immediately after this question.
                */

                followUp: `q3-adventure`
            },

            {
                text:
                    `Stay home and work on a personal project.`,

                score: {
                    D: 2,
                    Artfulness: 3
                }
            },

            {
                text:
                    `Take things one day at a time and see what happens.`,

                score: {
                    W: 3,
                    Independence: 1
                },

                followUp: `q3-spontaneous`
            }

        ]
    },


    /* =====================================================
       FOLLOW-UP QUESTION
    ===================================================== */

    {
        id: `q3-adventure`,

        type: `followup`,

        category: `Follow-up`,

        text:
            `You arrive somewhere completely unfamiliar. What do you do first?`,

        image: null,

        answers: [

            {
                text:
                    `Start talking to locals and see where the day takes me.`,

                score: {
                    E: 2,
                    Openness: 2,
                    Empathy: 1
                }
            },

            {
                text:
                    `Find a map and identify the most interesting places.`,

                score: {
                    E: 2,
                    P: 1,
                    Openness: 2
                }
            },

            {
                text:
                    `Wander without a plan and follow whatever catches my attention.`,

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
        id: `q3-spontaneous`,

        type: `followup`,

        category: `Follow-up`,

        text:
            `If the spontaneous plan goes badly, what are you most likely to do?`,

        image: null,

        answers: [

            {
                text:
                    `Adapt and keep going.`,

                score: {
                    W: 2,
                    Courage: 1,
                    Independence: 2
                }
            },

            {
                text:
                    `Stop and create a better plan.`,

                score: {
                    P: 3,
                    Orderliness: 2
                }
            },

            {
                text:
                    `Look for the unexpected opportunity hidden inside the problem.`,

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
        id: `q4`,

        category: `Relationships`,

        text:
            `When someone you care about succeeds, what is your strongest reaction?`,

        image: null,

        answers: [

            {
                text:
                    `I feel genuinely happy because their happiness matters to me.`,

                score: {
                    L: 2,
                    A: 2,
                    Empathy: 3
                }
            },

            {
                text:
                    `I'm proud of them for putting in the work.`,

                score: {
                    S: 2,
                    Orderliness: 2
                }
            },

            {
                text:
                    `It inspires me to pursue something bigger myself.`,

                score: {
                    H: 3,
                    Courage: 1,
                    Independence: 1
                }
            }

        ]
    }
];