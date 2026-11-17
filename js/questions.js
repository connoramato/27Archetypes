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
            Courage: 3
        }

    means selecting that answer gives:

        Lover +2
        Romantic +1
        Courage +3
*/
let questions = [{
        id: `character`,
        text:
            `You lead the simple life of a serf. You live in a very small cottage in the countryside. Are you man or woman?`,

        answers: [
            {
                text:
                    `I am a man`,
                male: true
            },
            {
                text:
                    `I am a woman`,
                male: false
            }
        ]
    }
];

function calculateQuestionsTotal() {
    return questions.filter(val => val.type != "followup").length
}

function initQuestions(
    restored,
    man_woman = "man",
    sibling = "brother",
    child = "son"
) {
    questions = 
[
    {
        id: `q1`,
        text:
            `The King's emissary comes to your cottage door, announced by a tucket from a bugle. ` 
             + `He declares that you are called to court at once to embark on a quest. What is your response?`,
        image: `images/questions/cottage.jpg`,

        answers: [
            {
                text:
                    `Follow him immediately! This is a once in a lifetime oppurtunity`,
                score: {
                    E: 3,
                    H: 2,
                }
            },
            {
                text:
                    `Start packing your bags. For King and Country!`,
                score: {
                    E: 2,
                    W: 1,
                    S: 1,
                    Honor: 1,
                }
            },
            {
                text:
                    `Welcome him in for tea. No traveller should go without hospitality. The quest will come when it will`,
                score: {
                    A: 3,
                    R: 1,
                },
                followUp: `q1-tea`
            },
            {
                text:
                    `Ask about the quest. I have to know what this is all about before I embark`,
                score: {
                    P: 3,
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
        image: `images/questions/cottage.jpg`,

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
                    Honor: 1,
                }
            },
            {
                text:
                    `Complain all the while about how they have inconvenienced you`,
                score: {
                    L: -1,
                    A: -2,
                    Honor: -1,
                }
            },
            {
                text:
                    `Kick and Scream until they are forced to escort you themselves`,
                score: {
                    A: -1,
                    E: 1,
                    W: -1,
                    Honor: -1,
                }
            },
            {
                text:
                    `Feeze up in fear (be honest)`,
                score: {
                    D: 1,
                    W: -1,
                    S: 1,
                    Courage: -2
                }
            }
        ]
    },
     {
        id: `q1-secret`,
        text:
            `The emissary answers none of your questions. Apparently, the object of the quest is a secret. You are forced to obey the summons. Do you:`,
        image: `images/questions/cottage.jpg`,

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
                }
            },
            {
                text:
                    `Complain all the while about how they have inconvenienced you`,
                score: {
                    L: -1,
                    A: -2,
                    Honor: -1,
                }
            },
            {
                text:
                    `Kick and Scream until they are forced to escort you themselves`,
                score: {
                    A: -1,
                    E: 1,
                    W: -1,
                    Honor: -1,
                }
            },
            {
                text:
                    `Proceed calmly. There is no use worrying about what is in store`,
                score: {
                    P: 1,
                    W: 1,
                    L: 1,
                }
            }
        ]
    },
    {
        id: `q1-tea`,
        text:
            `At tea, the emissary is polite enough, but answers none of your questions. Apparently, you are bound to obey the summons. Do you:`,
        image: `images/questions/cottage.jpg`,

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
                }
            },
            {
                text:
                    `Complain all the while about how they have inconvenienced you`,
                score: {
                    L: -1,
                    A: -2,
                    Honor: -1,
                }
            },
            {
                text:
                    `Kick and Scream until they are forced to escort you themselves`,
                score: {
                    A: -1,
                    E: 1,
                    W: -1,
                    Honor: -1,
                }
            },
            {
                text:
                    `Accept the duty, and calmly embark once you have cleaned for tea`,
                score: {
                    P: 1,
                    W: 1,
                    L: 1,
                    Honor: 1,
                }
            }
        ]
    },
    {
        id: `q2`,
        text:
            `And so you embark! You travel with the emissary into town and out on the highway to the city. ` 
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
                }
            }
        ]
    },
    {
        id: `q3`,
        text:
            `You arrive to the capital city, entering through looming gates and turning down bustling streets. How do you feel?`,
        image: `images/questions/bustling-medieval-street.jpg`,

        answers: [
            {
                text:
                    `Amazed! So many people and so much going on`,
                score: {
                    E: 1,
                    S: 2,
                    R: 1,
                }
            },
            {
                text:
                    `Uneasy. I prefer the countryside`,
                score: {
                    R: 2,
                    L: 1,
                    W: -1,
                }
            },
            {
                text:
                    `Lost in thought. I am worried about what the king has summoned me for`,
                score: {
                    D: 2,
                    W: -1,
                    S: -1,
                }
            }
        ]
    },
    {
        id: `q4`,
        text:
            `You arrive at the kings palace. The emissary goes in and tells you to wait in the plaza, where you see two people coming from the univeristy nearby. ` 
             + ` You gather from their conversation that one is a scholar and the other a philosopher. When they notice you, the scholar desperately seeks another opinion: `
             + `"Excuse me, you there! You must help us settle this debate. I say that, given humans are inherently relational, the end of such sociability is comradery and mutual support. `
             + `My friend here disagrees, he says most social bonds are meaningless when compared to the knowledge shared only with those closest to us. What is your thought?"`,
        image: `images/questions/medieval-marketplace.jpg`,

        answers: [
            {
                text:
                    `I suppose I agree with you. It is nice to have strong bonds, but I think the best thing for that is shared experience. `
                    + `To be together through it all, well that's life is it not?`,
                score: {
                    S: 4,
                    L: -1,
                    E: 1,
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
        image: `images/questions/Disputation.jpg`,

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
                }
            },
            {
                text:
                    `The Scholar`,
                score: {
                    S: 2,
                    P: 1,
                    D: 1,
                }
            },
            {
                text:
                    `Neither. Though you appreciate seeking the truth, neither of them are fully correct`,
                score: {
                    P: 2,
                    W: 1,
                }
            },
            {
                text:
                    `"Look guys... I'd love to stay and chat but I got this appointment with the king, so you know, don't wanna keep him waiting haha"`,
                score: {
                    P: -3,
                    D: -2,
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
        image: `images/questions/Disputation.jpg`,

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
                }
            },
            {
                text:
                    `The Scholar`,
                score: {
                    S: 2,
                    P: 1,
                    D: 1,
                }
            },
            {
                text:
                    `Neither. Though you appreciate seeking the truth, neither of them are fully correct`,
                score: {
                    P: 2,
                    W: 1,
                }
            },
            {
                text:
                    `"Look guys... I'd love to stay and chat but I got this appointment with the king, so you know, don't wanna keep him waiting haha`,
                score: {
                    P: -3,
                    D: -2,
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
        image: `images/questions/Disputation.jpg`,

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
                }
            },
            {
                text:
                    `The Scholar`,
                score: {
                    S: 2,
                    P: 1,
                    D: 1,
                }
            },
            {
                text:
                    `Neither. Though you appreciate seeking the truth, neither of them are fully correct`,
                score: {
                    P: 2,
                    W: 1,
                }
            },
            {
                text:
                    `"Look guys... I'd love to stay and chat but I got this appointment with the king, so you know, don't wanna keep him waiting haha`,
                score: {
                    P: -3,
                    D: -2,
                }
            }
        ]
    },
    {
        id: `q5`,
        text:
            `At that moment, the courtyard gate opens, and an official appears. You say goodbye to your new friends and follow him into the palace. As you walk through the courtyard, you begin eyeing an aged artist atop some scaffolding, sculpting the ornate edifice. `
            + `"Beauty is in the details, youngling" he says, noticing your curiosity, "Are you a lover of art?"`,
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
            + `"Rise ${man_woman}" the king says jovially, "You are welcome! I hope our officials have treated you well." You reply cordially.\r\n`
            + `"Well now, let's not daddle; let's get straight to the point. You may be amazed to hear this, but we are in need of your help. `
            + `You see, it has come to my attention that you are related to the brigand known as The Rogue. It has been reported that he has been seen visiting your cottage on a number of occasians. `
            + `It is also claimed that if that dirty outlaw trusts anyone, it's you."\r\n Though you haven't seen your brother in a year, you have, of course, also heard (though whether you believe is another story) that your brother makes (or takes, more like) a fortune as a highwayman. `
            + `It is also true that before he dissapeared, he came by the cottage with strangely valuable gifts (making said rumors easier to believe). It is thirdly true that his whereabout were hardly known and life shrouded in mystery. `
            + `He isn't even your brother by blood. He was taken in, orphaned as he was, by your family when he was a boy. He has always felt like a real brother, since you were so young at the time. `
            + `Yes, he was distant at times and a whole lot of trouble on your mother, but he was a good brother... until he left one day, a man, sparsley returning home...\r\n`
            + `"All that so say" you are drawn back from your thoughts just in time to hear the king's conclusion "We are laying a trap for The Rogue, and you are going to lead him into it" `
            + `You stomach drops. You hope it didn't show on your face. "You will travel with a band of my best knights to his hideout. You will go in, and you must come out with him, alone, at any cost. `
            + `You see, it seems he is under the protection of a group of armed rebels in the north... the cost of sending an army all the way there is too steep for our coffers, young ${man_woman}. `
            + `Still, we need this problem gone. It is best if we can send a small party that can draw him out alone, finish the deal, and make their escape"\r\n`
            + `Before you can think of a way out of this, or even utter 'your grace', the king quickly sends you on your way. `
            + `"Our official will equip you for the journey. We thank you again, loyal subject, for your help in this most urgent matter" You are led away from the throne and out of the room. `
            + `As the door closes, you glimpse the king staring inquisitively at you. You are left standing at a great dark oak door thinking of how you might save your brother's life and, just as imperatively, save your own`,
        image: "images/questions/throne1.webp",
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
                }
            },
            {
                text:
                    "I see...",
                score: {
                    H: 1,
                    P: 1,
                    W: 1,
                }
            },
            {
                text:
                    "OK",
                score: {
                    S: 1,
                    W: 1,
                }
            }
        ]
    },
    {
        id: "q7",
        text:
            `After a restless night's sleep, you are led to the palace stables to begin the journey. On your way you meet a couple arriving to the palace. The officials all greet them with a bow`
            + ` The gentleman greets you ponderously, then addresses the servants. "Go, prepare the wain. I'll have a word with this one" He turns to you. `
            + `"Good morrow, I expect your the one their sending up north?" You reply the affirmative. "Ah" He gives a look of pity. "I am sorry, you must feel great fear at what you have been compelled to do. However, I may have some helpful advice for you" `
            + `His lady chimes in "Oh, and it would be prudent to keep this information close to your chest" imploring caution with her eyes. The gentleman looks down the hall before continuing `
            + `"Not everyone in this land is loyal to the king. The rebels the king speaks of are more widespread than he cares to admit or wants to believe. As for ourselves, we think war is on our doorsteps" `
            + `The lady picks up the point "Fear not, young traveller. Though what lies in store will be difficult, you do not know when a friend may be around the corner." The gentleman adds `
            + `"Be on the look out for the right oppurunity. As for what we will do... we'll try our best here with the king in his court. We are not afraid of a little politicking. Be well."`
            + `The lady sends you on your way "Fare thee well!"`,
        image:"images/questions/lord.png",
        answers: [
            {
                text:
                    "How friendly! If I were not a commoner I would eagerly have their company",
                score: {
                    L: 1,
                    S: 4,
                    A: 1,
                }
            },
            {
                text:
                    "How helpful! This information just might get me out of the trap",
                score: {
                    P: 3,
                    D: 1,
                    A: 1,
                }
            },
            {
                text:
                    "How kind! To offer advice to a commoner against their loyalty to the king...",
                score: {
                    A: 4,
                    H: 1,
                    E: 1,
                    Chivalry: 1,
                }
            },
            {
                text:
                    "Despite my impending journey, I feel warm! I wish I could be close to these two, there is just something about them",
                score: {
                    L: 4,
                    S: 1,
                    R: 1,
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
        {
            id: "q8",
            text: "Once the wagon and horses are ready, the wagoner beckons you, and you climb up. The party consisted of 3 knights and their squires on horseback, the wagoner and yourself on the wagon’s bench, and a young page in the wain with the armor. Before leaving the city, the group stops in the market district for the day’s supplies and maintenance on the wagon and gear. You climb down into the bazaar.",
            image: 'images/questions/bazaar.jpg',
            answers: [
                {
                    text: "I am immediately taking in all the different tents, carts, and storefronts. I start picking all the interesting people out of the crowd.",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 3, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I notice the commotion of the market, but my thoughts are dwelling on the preparations, journey, and decisions I will have to make",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 1, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I wonder at all the different types of people I could meet here",
                    score: {
                        H: 0, S: 3, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am overwhelmed by the commotion, let’s get this over with",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: -1, W: -1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I could probably make my escape through the crowd… become an outlaw",
                    score: {
                        H: 2, S: 0, L: 0, P: 1, R: 1, A: 0, E: 0, W: 1, D: 1, Courage: 0, Honor: -1, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q9",
            text: "The wagoner walks up to the tent of a wainwright silently occupied by some woodwork. He is jolted from his deep focus when the wagoner asks him to replace some spokes. While the artisan works on the wagon, you ask him how he is able to keep such focus while working. He explains his devotion to his craft, and that he enjoys the company of the fellow artisans (and of course the business) that comes from setting up shop in the bazaar.",
            image: 'images/questions/wainwright.jpg',
            answers: [
                {
                    text: "Couldn’t be me",
                    score: {
                        H: 0, S: -2, L: 0, P: 0, R: -1, A: 0, E: 1, W: 0, D: -1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I understand the devotion to a craft, but not the whole people thing",
                    score: {
                        H: 1, S: -1, L: 0, P: 0, R: 1, A: 0, E: -1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I understand wanting to be with your peers, but couldn’t devote myself to a craft like that",
                    score: {
                        H: -1, S: 2, L: 0, P: 0, R: -1, A: 0, E: 1, W: 0, D: -1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the artisan",
                    score: {
                        H: 0, S: 7, L: 0, P: 0, R: 7, A: 0, E: 0, W: 0, D: 7, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q10",
            text: "You follow the squires through a back alley to a quiet smithery, where they take out some armor which was being mended. As you are about to leave, the blacksmith calls you over. \r\n“These boys have been telling me about your journey. It’s dangerous country you’re going through” he adds the last words in a whisper \r\n“with all the unrest” he clambers around in a pile of old metalwork before drawing out a dirtied shortsword \r\n“it’s not much but I can’t have it on my conscious that one of youse is unarmed going up that a ways. Take it, on the house, for protection” After further insisting, you take the sword along with an old leather sheath. You give him great thanks and he implores caution as you leave.",
            image: 'images/questions/blacksmith.jpeg',
            answers: [
                {
                    text: "This could come in handy! Thanks!",
                    score: {
                        H: 0, S: 2, L: 0, P: 1, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Now smithing is more like it. I could work for that guy!",
                    score: {
                        H: 0, S: 3, L: 0, P: 0, R: 0, A: 3, E: 2, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Very nice guy, I’m good being a serf though",
                    score: {
                        H: 0, S: -1, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the blacksmith",
                    score: {
                        H: 0, S: 7, L: 0, P: 0, R: 0, A: 7, E: 0, W: 0, D: 7, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q11",
            text: "You conceal your new weapon and enter back into the busy market street. You see a baker’s storefront full of chattering neighbors. The baker turns wheat to loaves, catering to the people’s needs and feeding all his customers. You also see the fishmonger’s cart. The fishmonger spends most of his day in thought, patiently waiting for his lines to bite and nets to fill. Further along, you see a spice trader come in from the east. The spice trader makes profit on his merchandise through eloquent negotiation, astute resourcefulness, and keen knowledge of the routes. Finally, you see the fine clothes displayed in the weaver’s tent. The weaver has a taste for aesthetics, and works well with the loom. Whose shop do you enter?",
            image: 'images/questions/bazaar.jpg',
            answers: [
                {
                    text: "The baker. That’s where the people and food are",
                    score: {
                        H: 0, S: 4, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The fishmonger. Much more my speed",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The spice trader. I’m curious about the foreign spices and to hear of his journeys",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The weaver. I love looking at nice things even if I can’t afford them",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 3, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q12",
            text: "On the market street, you see more shops. You see a baker’s storefront full of chattering neighbors. The baker turns wheat to loaves, catering to the people’s needs and feeding all his customers. You also see the fishmonger’s cart. The fishmonger spends most of his day in thought, patiently waiting for his lines to bite and nets to fill. Further along, you see a spice trader come in from the east. The spice trader makes profit on his merchandise through eloquent negotiation, astute resourcefulness, and keen knowledge of the routes. Finally, you see the fine clothes displayed in the weaver’s tent. The weaver has a taste for aesthetics, and works well with the loom. If you were not a serf and had an ounce of social mobility, which of these businesses would you run?",
            image: 'images/questions/bazaar.jpg',
            answers: [
                {
                    text: "I’d be a baker. Baking is fun and feeding the people would be fulfilling. Everybody loves the baker",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 3, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I’d be the fishmonger. Long silent mornings in nature would be a good lifestyle for me",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 2, A: 0, E: 1, W: 0, D: 3, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I’d be the spice trader. I have a knack for the art of the deal and would like exploring the east.",
                    score: {
                        H: 3, S: 0, L: 0, P: 3, R: 0, A: 0, E: 3, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I’d be the weaver. Making something useful and pleasing to the eye would get me up in the morning.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 3, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q13",
            text: "After the morning’s errands, everything is ready for the journey. You slowly pass through decreasingly busy streets until finally you exit the city’s gates and drive through the ripe wheatfields under the high midday sun. The wagoner complains about the heat in the open fields. \r\n“Haymaking must be brutal on a day like today.” you respond in accordance. He asks \r\n“Do you like working the land?”",
            image: 'images/questions/wheat2.jpg',
            answers: [
                {
                    text: "Yes, it’s a very ordered life. The year is planned out for us, a season for everything.",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 1, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                },
                {
                    text: "I like working and living with the land. It’s a beautiful cycle, a seed grows into life to feed us, sped on by the rain and sun. Heavenly things outside of our dominion.",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 3, A: 0, E: 0, W: 1, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "It’s hard on the body, but we all get through it together. We have a great community and a simple life.",
                    score: {
                        H: 1, S: 2, L: 0, P: 0, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The conditions can be tough. Our local lord is good to us, but still we are a very poor community. We help each other out as much as we can.",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 3, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "No, I strive for something more. I am meant for greater things than serfdom.",
                    score: {
                        H: 3, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: -1, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q14",
            text: "You make some more conversation with the wagoner as the afternoon crawls by. You stop and set up camp for the knight. In the little interaction you’ve had with the knights and squires, they seem warlike and unfriendly, and they set up their tents and go off to sleep in a serious manner. One of the knights, who seems more understanding than the others, stays up with you, the page, and the wagoner. How do you hope to spend the night by the campfire?",
            image: 'images/questions/sunsetW.jpg',
            answers: [
                {
                    text: "Telling tales and laughing together",
                    score: {
                        H: 0, S: 4, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q14-tale"
                },
                {
                    text: "How about some campfire songs? Who has a lyre?",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 3, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q14-music"
                },
                {
                    text: "Having deep and personal conversations deep into the night",
                    score: {
                        H: 0, S: 0, L: 3, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q14-deep"
                },
                {
                    text: "Let’s talk politics. I am curious all this unrest, and the campfire is the best place to get people talking.",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q14-politics"
                },
                {
                    text: "I need an ally here. This is my chance to make friends and gage how things might go down.",
                    score: {
                        H: 3, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q14-ally"
                },
                {
                    text: "I’ll need some sleep before heading back on the road tomorrow. I’m turning in",
                    score: {
                        H: 0, S: -2, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q14-sleep"
                }
            ]
        },
        {
            id: "q14-deep",
            text: "The conversation slowly turns to the good stuff, and all the juicy personal feelings surface. The page is afraid underneath the bravery he wears on his face. The wagoner leads a simple life. The knight talks about how he strives to be virtuous in his knighthood, but admits he has become a little disillusioned by his service to the king. \r\n“A knight is supposed to live by a code. I’m afraid the chivalric code is hardly kept. . .” Then he asks you \r\n“do you keep a code?”",
            image: 'images/questions/campfire.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "My code is much like yours. Help who you can, bravely defend those in need. I value loyalty and kindness.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My code is more ideological. Uphold what is true, bravely stand up against evil. I value service and honesty.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My code is more abstract. Take care of what is around you, die for something worth living for. I value love and life.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My code is more personal. Stay faithful to God and be the best you can be. I value virtue and perseverance.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I have no code",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q14-tale",
            text: "You ask if anyone knows a good campfire story, and so the knight tells a story he heard from the knight who trained him about how he was ambushed by goblins in the woods. At the end of the exciting tale, the knight adds a disclaimer that he is not sure whether the events are true. Then you ask him if he has any stories, but he says he does not have any noteworthy ones. The conversation turns to knights in general. The knight talks about how he strives to be virtuous in his knighthood, but admits he has become a little disillusioned by his service to the king.\r\n“A knight is supposed to live by a code. I’m afraid the chivalric code is hardly kept. . .”\r\nThen he asks you “do you keep a code?”",
            image: 'images/questions/campfire.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "My code is much like yours. Help who you can, bravely defend those in need. I value loyalty and kindness.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 4, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 7
                    }
                },
                {
                    text: "My code is more ideological. Uphold what is true, bravely stand up against evil. I value service and honesty.",
                    score: {
                        H: 1, S: 0, L: 0, P: 4, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                },
                {
                    text: "My code is more abstract. Take care of what is around you, die for something worth living for. I value love and life.",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 3, A: 0, E: 0, W: 0, D: 1, Courage: 1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My code is more personal. Stay faithful to God and be the best you can be. I value virtue and perseverance.",
                    score: {
                        H: 4, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 1, Honor: 1, Chivalry: 1
                    }
                },
                {
                    text: "I have no code",
                    score: {
                        H: -1, S: 0, L: 0, P: -1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: -2
                    }
                }
            ]
        },
        {
            id: "q14-music",
            text: "Everyone is silent for a while, staring into the fire. Then, the knight begins to sing. He sings a sad melody about a long journey. At the end you praise the song. The knight says he learned it when he was a kid and it inspired him to train to become a knight, but admits he has become a little disillusioned by his service to the king.\r\n“A knight is supposed to live by a code. I’m afraid the chivalric code is hardly kept. . .”\r\nThen he asks you “do you keep a code?”",
            image: 'images/questions/campfire.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "My code is much like yours. Help who you can, bravely defend those in need. I value loyalty and kindness.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 4, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 7
                    }
                },
                {
                    text: "My code is more ideological. Uphold what is true, bravely stand up against evil. I value service and honesty.",
                    score: {
                        H: 1, S: 0, L: 0, P: 4, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                },
                {
                    text: "My code is more abstract. Take care of what is around you, die for something worth living for. I value love and life.",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 3, A: 0, E: 0, W: 0, D: 1, Courage: 1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My code is more personal. Stay faithful to God and be the best you can be. I value virtue and perseverance.",
                    score: {
                        H: 4, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 1, Honor: 1, Chivalry: 1
                    }
                },
                {
                    text: "I have no code",
                    score: {
                        H: -1, S: 0, L: 0, P: -1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: -2
                    }
                }
            ]
        },
        {
            id: "q14-politics",
            text: "The knight seems open and amiable, so you ask the knight about the unrest. He says there is much preparation among the knights and lords of the realm for conflict. As for the strength of the rebel forces, no one really knows. He admits he has become a little disillusioned by his service to the king. \r\n“A knight is supposed to live by a code. I’m afraid the chivalric code is hardly kept. . .” , then he asks you \r\n“do you have a code?”",
            image: 'images/questions/campfire.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "My code is much like yours. Help who you can, bravely defend those in need. I value loyalty and kindness.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 4, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 7
                    }
                },
                {
                    text: "My code is more ideological. Uphold what is true, bravely stand up against evil. I value service and honesty.",
                    score: {
                        H: 1, S: 0, L: 0, P: 4, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                },
                {
                    text: "My code is more abstract. Take care of what is around you, die for something worth living for. I value love and life.",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 3, A: 0, E: 0, W: 0, D: 1, Courage: 1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My code is more personal. Stay faithful to God and be the best you can be. I value virtue and perseverance.",
                    score: {
                        H: 4, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 1, Honor: 1, Chivalry: 1
                    }
                },
                {
                    text: "I have no code",
                    score: {
                        H: -1, S: 0, L: 0, P: -1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: -2
                    }
                }
            ]
        },
        {
            id: "q14-ally",
            text: "At the campfire, you gauge whether this knight might be a helpful friend. The verdict is yes, and his personality even grows on you. Eventually the conversation turns to his knighthood, and oaths. \r\n“A knight is supposed to live by a code. I’m afraid the chivalric code is hardly kept. . .” He turns to you \r\n“do you live by a code?”",
            image: 'images/questions/campfire.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "My code is much like yours. Help who you can, bravely defend those in need. I value loyalty and kindness.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 4, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 7
                    }
                },
                {
                    text: "My code is more ideological. Uphold what is true, bravely stand up against evil. I value service and honesty.",
                    score: {
                        H: 1, S: 0, L: 0, P: 4, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                },
                {
                    text: "My code is more abstract. Take care of what is around you, die for something worth living for. I value love and life.",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 3, A: 0, E: 0, W: 0, D: 1, Courage: 1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My code is more personal. Stay faithful to God and be the best you can be. I value virtue and perseverance.",
                    score: {
                        H: 4, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 1, Honor: 1, Chivalry: 1
                    }
                },
                {
                    text: "I have no code",
                    score: {
                        H: -1, S: 0, L: 0, P: -1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: -2
                    }
                }
            ]
        },
        {
            id: "q14-sleep",
            text: "You get up to turn in for the night, but the knight convinces you to stay up a little longer. The conversation quickly turns to knighthood. \r\n“A knight is supposed to live by a code. I’m afraid the chivalric code is hardly kept. . . \r\n“ He asks you \r\n“do you have a code?”",
            image: 'images/questions/campfire.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "My code is much like yours. Help who you can, bravely defend those in need. I value loyalty and kindness.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 4, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 7
                    }
                },
                {
                    text: "My code is more ideological. Uphold what is true, bravely stand up against evil. I value service and honesty.",
                    score: {
                        H: 1, S: 0, L: 0, P: 4, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                },
                {
                    text: "My code is more abstract. Take care of what is around you, die for something worth living for. I value love and life.",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 3, A: 0, E: 0, W: 0, D: 1, Courage: 1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My code is more personal. Stay faithful to God and be the best you can be. I value virtue and perseverance.",
                    score: {
                        H: 4, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 1, Honor: 1, Chivalry: 1
                    }
                },
                {
                    text: "I have no code",
                    score: {
                        H: -1, S: 0, L: 0, P: -1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: -2
                    }
                }
            ]
        },
        {
            id: "q15",
            text: "The next day’s travel is mostly uneventful, and in the evening you stop in a town for the night. In the tavern, you eavesdrop on some rumors about the escalating unrest in the north. The friendly knight, who you have warmed up to quite a bit, prevents a brawl from breaking out. A warm meal and a roof over your head do a good deal to rejuvenate your energy. What do you dream of?",
            image: 'images/questions/tavern.jpeg',
            answers: [
                {
                    text: "I dream of the cottage I left behind, my own cot, a small fire, and the ripe wheat fields waiting for harvest.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I dream mysterious visions of political intrigue, the king, the rebels.",
                    score: {
                        H: 3, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I dream outlandish dreams of fairytale creatures and far off lands full of magic and danger.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 3, A: 0, E: 0, W: 0, D: 3, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I dream of my brother, a half-remembered afternoon from our childhood.",
                    score: {
                        H: 0, S: 0, L: 3, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I dream hazily of a haphazard meeting between my friends back home, my travel companions, and the students, nobles, and artisans I met in the city.",
                    score: {
                        H: 0, S: 3, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I do not dream.",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: -1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q16",
            text: "On the third day, you stop in a village. One of the knights tells everyone this is the last stop before entering the borderlands, to stock up on food and feed, and to keep your wits about you from here on. The friendly knight gives you a smile and tells you not to worry. When you set out in the morning, a mist is eerily rolling over the countryside. The rising sun cuts the fog to reveal open wastes ahead and eventually giving way to a dense forest on the horizon.",
            image: 'images/questions/waste.jpg',
            answers: [
                {
                    text: "Jinkies!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Beautiful!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 3, A: 0, E: 0, W: 1, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Where are we?",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q17",
            text: "In mid afternoon you reach the tree line, and suddenly the bright sky turns into a gray-green canopy. Night and day cease to exist, and though moments ago you basked in the sun, you now drift through the cool, damp forest air losing all sense of time. The wildlife scrambles through thrush at every bend, surprised to meet travellers on the unkempt trail. What is your foremost emotion?",
            image: 'images/questions/forbidden.avif',
            answers: [
                {
                    text: "Wonder",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 2, A: 0, E: 0, W: 1, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Worry",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 2, W: -1, D: 0, Courage: -1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wary",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Weary",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wistful",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 3, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Woeful",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q18",
            text: "The wagon struggles through the unkempt trail and is torn again and again by hanging limbs. Caught on a large cluster of roots, the wagoner drives the horses and the cart tumbles over the obstacle with a loud crash. The wagon leans to the left, and the horses drag it along as a loose wheel rolls into a shrub. What do you do?",
            image: 'images/questions/canopy.jpg',
            answers: [
                {
                    text: "Immediately find the wheel and get to fixing the wagon. I can figure this out",
                    score: {
                        H: 1, S: 0, L: 0, P: 4, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 1, Honor: 1, Chivalry: 1
                    },
                    followUp: "q18-fix"
                },
                {
                    text: "I won’t take the lead but I can follow instructions. We can figure this out",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 1
                    },
                    followUp: "q18-fix"
                },
                {
                    text: "Sit and lose myself in my thoughts until all my problems go away.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 3, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q18-sit"
                },
                {
                    text: "This is probably a good time to go wander around looking for woodland creatures",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 3, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q18-wander"
                }
            ]
        },
        {
            id: "q18-fix",
            text: "You get to work, and after melting some lard from your rations, you are able to get the wheel back on the wagon and continue through the woods. Slowly the dim light loses all its green, and pockets of silver scatter through gaps in the canopy. The innocent sounds of the wildlife become the threats of stalking predators. Restlessness grows among the travellers. Pointed questions are thrown between the knights. \r\n“How did you lose track of time?! We won’t have any light to set up camp”\r\n“Well it was your idea to go through the forest anyway. Did you lead us in to get lost, eaten by some great beast as we sleep?!”",
            image: 'images/questions/night_camp.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Calm down y’all",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "He’s got a point, why are we going through the forest?",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: -1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "He’s got a point, why didn’t we stop when we were fixing the wheel?",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Don’t bicker, we need to stick together now!",
                    score: {
                        H: 1, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q18-sit",
            text: "A man’s voice shakes you from your daydream. The friendly knight calls you over for one final shove to get the wheel on the wagon. The journey begins again. Slowly the dim light loses all its green, and pockets of silver scatter through gaps in the canopy. The innocent sounds of the wildlife become the threats of stalking predators. Restlessness grows among the travellers. Pointed questions are thrown between the knights. \r\n“How did you lose track of time?! We won’t have any light to set up camp”\r\n“Well it was your idea to go through the forest anyway. Did you lead us in to get lost, eaten by some great beast as we sleep?!”",
            image: 'images/questions/night_camp.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Calm down y’all",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "He’s got a point, why are we going through the forest?",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: -1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "He’s got a point, why didn’t we stop when we were fixing the wheel?",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Don’t bicker, we need to stick together now!",
                    score: {
                        H: 1, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q18-wander",
            text: "You watch a chipmunk store an acorn in the stump of a fallen tree. It eyes you suspiciously, then runs as it hears the friendly knight calling your name. You follow the voice back to the wagon to find the wheel fixed, and the journey begins again. Slowly the dim light loses all its green, and pockets of silver scatter through gaps in the canopy. The innocent sounds of the wildlife become the threats of stalking predators. Restlessness grows among the travellers. Pointed questions are thrown between the knights. \r\n“How did you lose track of time?! We won’t have any light to set up camp”\r\n“Well it was your idea to go through the forest anyway. Did you lead us in just to get lost?!”",
            image: 'images/questions/night_camp.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Calm down y’all",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "He’s got a point, why are we going through the forest?",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: -1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "He’s got a point, why didn’t we stop when we were fixing the wheel?",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Don’t bicker, we need to stick together now!",
                    score: {
                        H: 1, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q19",
            text: "Setting up camp is difficult without light, but you manage by the little moonlight that makes it through a larger clearing in the forest’s canopy. A fire flickers in the middle of the clearing, and amongst all the thrush you see the dim yellow glow lurking eyes. You can feel the great unease of your companions, and, as no one dares fall asleep, the unease boils over into anger and the argument starts again. \r\n“I told you, our best course of action is to hug the border, that way we can pass through the garrison. If our plan fails,  the king’s forester may supply us reinforcements.”\r\n“At what cost? To die out here?!”\r\n“You coward, what are you afraid of?”\r\n“Not what, but who. We both know the danger of lighting a fire in this part of the country”\r\nAt that moment, the noises of the nightbirds and  lurking animals suddenly stop, leaving behind silence that can not be ignored. The embers of the fire barely reach past the tents, and the lack of sound seems to echo as you peer into the dark woods. The men slowly emerge from their tents and share worried glances. What do you do?",
            image: 'images/questions/silence.webp',
            answers: [
                {
                    text: "Sword at the ready! Who knows what danger draws near",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 2, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Slip away into the woods. At worst I’ll be caught by any attackers, at best I can watch the potential ambush from afar before making a move",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: -1, Chivalry: 0
                    }
                },
                {
                    text: "Find the friendly knight as ask him what to do",
                    score: {
                        H: -1, S: 1, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Sit still, stay calm",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 2, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Sit still, freak out",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q20",
            text: "The stillness is interrupted by the knights scrambling to arm themselves. Suddenly an arrow whistles past you and strikes the wagon. Men with swords rush in from the trees, camouflaged by their brown and green cloaks and only visible by the glint of chainmail in the darkness. The knights, halfway fastened in their armor, are unprepared for the attack. There is a great bustle and the wagoner knocks you down as he runs into the woods. Getting up, you can see the attackers scattering your companions into the woods. At the sound of a nearby yell, you turn around and flail your sword at the oncoming threat, a large man with a great beard. With almost a look of pity, he buffets you with his round shield, and darkness covers your eyes.",
            image: 'images/questions/ambush.jpg',
            answers: [
                {
                    text: "Oof",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Am I dead?",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Where did my friends go?",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wake up, kid",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 1, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q21",
            text: "You drift in and out of consciousness in the dark woods, being carried by some brute of a man. You finally come to your senses in the light of a small fire. A few of the cloak-garbed soldiers stand around, and a thinner man with a sharp face sits in front of you, peering thoughtfully. He asks you \r\n“What was your quest with those knights?”",
            image: 'images/questions/rebel.jpg',
            answers: [
                {
                    text: "Tell him everything.",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q21-tell"
                },
                {
                    text: "\r\n“Why don’t you tell me who you are first”",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q21-ask"
                },
                {
                    text: "Give a convoluted answer then pose your own question.",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q21-ask"
                },
                {
                    text: "Say nothing",
                    score: {
                        H: 1, S: 0, L: 1, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q21-nothing"
                }
            ]
        },
        {
            id: "q21-tell",
            text: "\r\n“Interesting… I don’t suppose you were ecstatic to follow the plan. Things are not all as they seem in this kingdom. Nor are things as they should. I lead these men in an effort to protect the people from the king. He is an usurper and a tyrant. The people are stirring. The kingdom itself is shaken, ripe for rebellion. It is closer than the king would have you believe.” The rebel walks over and unties your binds. \r\n“You are free to travel with us, or go where you please. For now, get some rest.” What do you plan to do in the morning",
            image: 'images/questions/rebel.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Join the ranks of the rebellion, I’ll follow this leader into battle!",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Travel with the rebels, but don’t get involved in the fighting or politics.",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I’m gonna go home, I’ve had enough of this",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Even though my travel companions have been scattered, I still feel the need to go find them somehow",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I must be on my way, I need to find my brother",
                    score: {
                        H: 1, S: 0, L: 1, P: 2, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the rebel",
                    score: {
                        H: 7, S: 0, L: 0, P: 0, R: 0, A: 7, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q21-ask",
            text: "\r\n“I am the leader of the rebellion. Things are not all as they seem in this kingdom. Nor are things as they should. I lead these men in an effort to protect the people from the king. He is an usurper and a tyrant. The people are stirring. The kingdom itself is shaken, ripe for rebellion. It is closer than the king would have you believe.” After this speech, the rebel convinces you to reveal the details of your quest. \r\n“Interesting… I don’t suppose you were ecstatic to follow the plan.” The rebel walks over and unties your binds. \r\n“You are free to travel with us, or go where you please. For now, get some rest.” What do you plan to do in the morning",
            image: 'images/questions/rebel.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Join the ranks of the rebellion, I’ll follow this leader into battle!",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Travel with the rebels, but don’t get involved in the fighting or politics.",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I’m gonna go home, I’ve had enough of this",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Even though my travel companions have been scattered, I still feel the need to go find them somehow",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I must be on my way, I need to find my brother",
                    score: {
                        H: 1, S: 0, L: 1, P: 2, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the rebel",
                    score: {
                        H: 7, S: 0, L: 0, P: 0, R: 0, A: 7, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q21-nothing",
            text: "\r\n“Fine, keep your secrets. You might be wondering who has captured you. We are rebels. Things are not all as they seem in this kingdom. Nor are things as they should. I lead these men in an effort to protect the people from the king. He is an usurper and a tyrant. The people are stirring. The kingdom itself is shaken, ripe for rebellion. It is closer than the king would have you believe.” After this speech, the rebel eventually convinces you to reveal the details of your quest. \r\n“Interesting… I don’t suppose you were ecstatic to follow the plan.” The rebel walks over and unties your binds. \r\n“You are free to travel with us, or go where you please. For now, get some rest.” What do you plan to do in the morning?",
            image: 'images/questions/rebel.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Join the ranks of the rebellion, I’ll follow this leader into battle!",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Travel with the rebels, but don’t get involved in the fighting or politics.",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I’m gonna go home, I’ve had enough of this",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Even though my travel companions have been scattered, I still feel the need to go find them somehow",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I must be on my way, I need to find my brother",
                    score: {
                        H: 1, S: 0, L: 1, P: 2, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the rebel",
                    score: {
                        H: 7, S: 0, L: 0, P: 0, R: 0, A: 7, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q22",
            text: "You wake up in the rebel camp, and do a little wandering before you enact your plans. The rebel soldiers form groups joking and smiling over foraged breakfasts. The rebel leader finds you to ask your decision, but before you can answer fully, the tucket of a bugler can be heard nearby through the trees. The rebels are suddenly at arms, but mounted men at arms had already charged through the camp, striking down some men. The leader tells you to stay close and follow him, and you soon wish you hadn’t as he leads you through the hazards of battle.",
            image: 'images/questions/ambush2.jpg',
            answers: [
                {
                    text: "Woah",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Yikes!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Charge!",
                    score: {
                        H: 1, S: 1, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 2, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I guess we’re doing this",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q23",
            text: "The rebels tactically retreat into the deeper forest, rendering the king’s soldiers useless to pursue. Instead, they attempt to burn out the rebels, and the fiery dawn sky is replaced by the great fires rising from the forest. As the rebels retreat further, you struggle to keep up. Suddenly a mounted knight charges right in front of you, cutting you off from the rebels. The rebel leader calls out to you \r\n“we will meet another day, my friend” and they escape into the woods. You look up at the knight, who removes his helmet to reveal the very same knight you took a liking to these past few days. \r\n“There you are! After the ambush, we made for the garrison where we gathered these reinforcements. I convinced the others we could not leave you prisoner. Come, let’s return to safety”",
            image: 'images/questions/forest_fire.png',
            answers: [
                {
                    text: "*facepalm*",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My hero!",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 1, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Good of you to show up",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Oh hey",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q24",
            text: "He helps you onto his lightly armored horse, and at a slow trot you meander in what you believe is a northward direction. Very quickly it becomes apparent that you are lost, and somehow the din of battle has become distant noises. The knight tries to correct his course to the sound, but it begins to rain and neither of you can hear anything. After a little more wandering, you decide to stay put until the rain passes. Looking around, you have the creeping suspicion that you are no longer in the same forest. The rain stops, but there is no sign nor sound of battle. Instead, you hear approaching steps. Great lumbering steps, and the cracking of saplings underfoot. And then you see it: a beast of a man standing 9 feet tall and holding a great club. Of course, this was no man, this was an ogre. He ogre spots you and stands still, as if deciding whether to kill its prey in one blow or deliver a slow and painful death. The knight steps in front of you \r\n“we’re making it out of this alive!”",
            image: 'images/questions/myhero.webp',
            answers: [
                {
                    text: "Jinkies!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "No we’re not",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I draw my sword. I’m fighting with you!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 1, D: 0, Courage: 2, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Maybe it’s beautiful on the inside…",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q25",
            text: "You may not be much help, but you draw you sword. The ogre moves surprisingly quickly and swings its club, swiping the knight as he dodges. As he scuttles up, you are left alone with the ogre, readying his second blow. Do you:",
            image: 'images/questions/ogre.jpeg',
            answers: [
                {
                    text: "Dive towards the ogre and slash!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 2, Honor: 0, Chivalry: 0
                    },
                    followUp: "q25-slash"
                },
                {
                    text: "Dodge to the side",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 1, Honor: 0, Chivalry: 0
                    },
                    followUp: "q25-dodge"
                },
                {
                    text: "Drop my sword and turn tail",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: -1, Honor: -1, Chivalry: 0
                    },
                    followUp: "q25-run"
                },
                {
                    text: "Stand my ground!",
                    score: {
                        H: 0, S: 0, L: 0, P: -2, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 3, Honor: 0, Chivalry: 0
                    },
                    followUp: "q25-dodge"
                }
            ]
        },
        {
            id: "q25-run",
            text: "You trip on a root as you flee. Looking back, you see the knight get up and slice the ogre’s arm with his sword. This only angers the beast, and it whacks the knight with its club. The knight slumps on the ground, dead or unconscious, you know not. Without knowing what you are doing, you rush to his aid, only to receive a backhand from the ogre, knocking you back and making you dizzy. You can barely stay awake as you watch the ogre start to drag off its prey, the creaking of a nearby tree startles it. Suddenly, the tree moves and the limbs reach out to grasp the ogre, and the branches scratch its flesh. Terrified, the ogre drops the knight, wrenches free, and runs off into the woods. The tree approaches you now, or is it a woman? Your sight fails as darkness covers your eyes, and you fall unconscious again.",
            image: 'images/questions/slash.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Well I must be hallucinating",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wonderful!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I’m so confused",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q25-dodge",
            text: "Your tactic fails, and you are flung a good way off. Feeling dizzy, you look back to see the knight get up and slice the ogre’s arm with his sword. This only angers the beast, and it whacks the knight with its club. The knight slumps on the ground, dead or unconscious, you know not. You can barely stay awake as you watch the ogre start to drag off its prey, the creaking of a nearby tree startles it. Suddenly, the tree moves and the limbs reach out to grasp the ogre, and the branches scratch its flesh. Terrified, the ogre drops the knight, wrenches free, and runs off into the woods. The tree approaches you now, or is it a woman? Your sight fails as darkness covers your eyes, and you fall unconscious again.",
            image: 'images/questions/slash.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Well I must be hallucinating",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wonderful!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I’m so confused",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q25-slash",
            text: "You manage to slice the ogre’s leg, but in a jerk reaction the ogre kicks you, and you are flung a good way off. Feeling dizzy, you look back to see the knight get up and slice the ogre’s arm with his sword. This only angers the beast, and it whacks the knight with its club. The knight slumps on the ground, dead or unconscious, you know not. You can barely stay awake as you watch the ogre start to drag off its prey, the creaking of a nearby tree startles it. Suddenly, the tree moves and the limbs reach out to grasp the ogre, and the branches scratch its flesh. Terrified, the ogre drops the knight, wrenches free, and runs off into the woods. The tree approaches you now, or is it a woman? Your sight fails as darkness covers your eyes, and you fall unconscious again.",
            image: 'images/questions/slash.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Well I must be hallucinating",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wonderful!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I’m so confused",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q26",
            text: "You wake up resting on the trunk of a tree, though it feels like you are being held by your mother. You look up to see a woman’s face. \r\n“Poor child, you have been asleep all day and all night” she tells you. You dazedly ask who she is, and only receive a kind laugh for an answer. \r\n“Now that you are well again, I must give you a quest” She returns your weary look as you think to yourself \r\n“not another one of these…” \r\n“You must go and see the oracle. A prophecy will be told on the fate of the kingdom, and you are to hear it. You must bear this prophecy to the King, young one.” At your refusal, the dryad assures you \r\n“there are many things you do not understand now, but they will all make sense soon. I will send you along with a guide to help you on your quest” Suddenly coming to your senses, you look around for the knight \r\n“his journey is not with you anymore, traveller”\r\nDespite all your dread, the embrace of the dryad makes your worry leave you. The dryad points northward \r\n“Your guide awaits you in yonder clearing. Fare thee well, child” Looking back, you no longer see a woman, but a tree where there was no tree before.",
            image: 'images/questions/dryad2.jpeg',
            answers: [
                {
                    text: "Magic!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "She was pretty",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 3, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "She was caring",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 3, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "What is this prophecy?",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the dryad",
                    score: {
                        H: 7, S: 0, L: 0, P: 0, R: 7, A: 0, E: 0, W: 0, D: 7, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q27",
            text: "In the clearing, you find a man sitting on a tree stump lost in thought. Drawing near, you hear him mumble to himself \r\n“ah but that was a long time ago…” Finally noticing you, he rises to greet you. \r\n“Seems I’ll be your guide. Quite a lady back there, huh? We were in love once, yes if you can believe it, but that was a long time ago…” You ask him who he is to drag him out of his thoughts once again. \r\n“Who am I? Well, I’m no one. Some half-remembered dream, I suppose. Would you like to hear a poem before we set out?” You reluctantly agree.\r\n“There once was a Lady wise and fair\r\nWith jade-green eyes and nut brown hair\r\nWith all the grace of the whitest swan \r\nAnd a voice as sweet as songbird’s song\r\nTill one day her Lord could take no more\r\nShe was too good for him he swore\r\nAnd since the Lord had set her free \r\nShe left and turned into a tree”",
            image: 'images/questions/poet.jpeg',
            answers: [
                {
                    text: "Uhh.. ok",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: -1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Beautiful!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 2, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "What a sad story",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The lord handled that situation poorly",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the poet",
                    score: {
                        H: 0, S: 0, L: 7, P: 0, R: 7, A: 0, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q28",
            text: "\r\n“Alright, let’s see that oracle then” the poet walks off, and noticing you have not moved, turns back and says \r\n“Don’t worry friend, I may not look it, but I am the best guide in these parts. You’ll be safe with me” with that he continues on, and being very lost, you have no choice but to follow. Reaching a denser line of trees, you notice a wide man-made path. The poet beckons you to cross to the other side, but then you hear the thundering of hooves and see a few mounted  men approaching. The leader of the pack wears the royal ensign over his mail, and speaks \r\n“What are you two travellers doing in the deep forest at the far edges of the kingdom?” Before you can answer, the poet chimes in \r\n“we’re making a pilgrimage, your grace, very penitential like” the King’s man replies\r\n“Is that so? Very curious. I must warn you that these are dangerous parts and this path marks the edge of the kingdom. I am the king’s forester, appointed to make garrison in these borderland woods. Even the forest I govern may be treacherous to any traveler unwary of wild beasts and other such things… but past here, you enter wild country.”",
            image: 'images/questions/forester.jpeg',
            answers: [
                {
                    text: "Good grief",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Ooh mysterious",
                    score: {
                        H: 0, S: 0, L: 2, P: 1, R: 1, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Well I think we’re already in wild country considering that ogre back there.",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Didn’t you just burn down the forest?",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 1, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q29",
            text: "After a silence the forster continues \r\n“Of course you must also he wary of other danger. In any other circumstance I wouldn’t let you two go on unchecked, but there has been insurgency in these parts. Even now my soldiers burn the woods against my command in pursuit of some rebels” He gazes to the south. \r\n“Yes, I must be on my way. I must implore caution, travellers. Farewell” \r\nAt that the horses turn and continue on at a greater speed down the path.",
            image: 'images/questions/forester.jpeg',
            answers: [
                {
                    text: "Phew",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Poor guy, his own men burn down his forest",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Into deeper forest!",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the forester",
                    score: {
                        H: 0, S: 7, L: 0, P: 0, R: 7, A: 0, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q30",
            text: "The poet leads you out of the kingdom and into the forbidden forest. Your sense of time left you when first entering the forest, your sense of direction left you after the ogre encounter, and now there was so much shadow, so few paths, and a hint of… magic, that you lose all sense of place as well. The poet often speaks to you, but you rarely hear. As you gather your thoughts, you realize you hardly know whether you’re heading north or south. You ask the poet if he knows the way, and the poet responds in turn \r\n“yes, we are good and lost now” at your exasperated look he adds \r\n“one has to be lost before he can be found”",
            image: 'images/questions/lost.png',
            answers: [
                {
                    text: "Isn’t that the stupidest thing I ever heard",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Hmm very true",
                    score: {
                        H: 0, S: 0, L: 2, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Deep. *snaps*",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 1, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Oh bother",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: -1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q31",
            text: "The poet looks around, waits a bit, then a look of disappointment washes over his face \r\n“well at least I thought we were” He plops down on a fell tree in frustration. Confused, you also sit down and:",
            image: 'images/questions/ponder_woods.jpeg',
            answers: [
                {
                    text: "Worry",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Ponder",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 1, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Think",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Muse",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Daydream",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Cry",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q32",
            text: "The forest is very dark, so you quickly notice when a dim yellow light grows near, dancing between trees. The light is accompanied by the quiet tinkle of bells. Gazing at the light, you call out \r\n“hello? who is there?” You hear only the sound of giggling in reply. You look at the poet, who has a dreamy look on his face. As the light comes out from behind a nearby tree, you notice a small girl in the light, with the wings of an insect. Halfway between fear and enchantment, you take a step forward, but the mysterious source of light darts back into the trees. You hesitate:",
            image: 'images/questions/dim_yellow.png',
            answers: [
                {
                    text: "Follow her!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 1, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wait, this could be a trap",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "A magic fairy!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "She must know the way, after her!",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Is she a friend or a foe?",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "She will help us",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q33",
            text: "No time for hesitation, at a quip from the poet, he leads you off. You finally catch up to her in a small clearing, glowing with dim yellow light. \r\n“Please miss, where are you leading us?” Again, she only laughs again and runs off into the forest. This time you’re ready, and you follow closely behind. Just as you nearly catch her, she turns on a dime. You are unable to stop your momentum and tumble over a tall root, landing on a soft bed of moss. Leaning back so as to see things upside-down, you see the poet leisurely walking up and the fairy laughing \r\n“thanks for playing my game” The poet joins in the laughter \r\n“anytime, dear. Now, would you kindly help us on our quest?” The Fairy is eager to help you, and after sharing a snack of mushrooms and berries, lights your path onward.",
            image: 'images/questions/fairy.jpeg',
            answers: [
                {
                    text: "That was fun!!",
                    score: {
                        H: 0, S: 3, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wow!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "That was magical!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "A bit of a waste of time, but thanks",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "We are indebted to the kind fairy",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                },
                {
                    text: "I am the fairy",
                    score: {
                        H: 0, S: 0, L: 7, P: 0, R: 0, A: 7, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q34",
            text: "She leads you to the forest’s northern edge. \r\n“To get to where you are going, you must pass through the rat’s den, then you will be free of the forest.” The poet turns pale \r\n“Oh.. you didn’t tell us that” The fairy smiles and says \r\n“If I had, you may not have had the courage to get this far” and as if having said something very thought provoking, flutters off into the woods. You turn and face an entrance to a cavernous den.",
            image: 'images/questions/den.jpg',
            answers: [
                {
                    text: "Only way’s through… courage, my heart!",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 1, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Whatever is in there is more afraid of us then we are of them. We’ll be fine",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I feel like there has to be a way around this den…",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Well we tried",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: -1, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q35",
            text: "Walking through, you see large rats running off, and hear scurrying around you and above you. At times you think you feel the pattering on the back of your neck. The poet in this moment does not live up to his role as guide: he keeps his eyes shut and clings to you to walk him through. Slowly making your way through, you spot a rat the size of a bear - something out of a nightmare - lurking in the recesses of the den. Spotting the light at the other side, you pick up your pace, but suddenly a cat sized beast lunges from above you and barely misses you. Drawing your sword, you slash it in half. Noticing that the general disapproval of your choice, you start sprinting for the exit, spurring the poet to open his eyes. Looking back once, you see the great beast of a rat lumber out of his hiding spot in pursuit. Out of breath, the adrenaline carries you on even faster as leagues of rats horde behind you. Tumbling out into the light of morning, you roll down a hill into some grass. Moving well away from the den, you both relish in deep breathes of relief, laying in a beautiful meadow.",
            image: 'images/questions/rats.webp',
            answers: [
                {
                    text: "Epic!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Phew…",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Exhilarating!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Ooo a meadow!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 2, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Where are we now?",
                    score: {
                        H: 1, S: 0, L: 0, P: 2, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Is the poet okay?",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 2, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q36",
            text: "After recovering your spirits, you spot a steeple on the horizon. You and the poet start walking with hopes to have some shelter for the night. A priest meets you in front of the small church. \r\n“Welcome travellers, from where do you come?\r\nThe poet explains your recent adventures and situation. \r\n“Well, after those travels you certainly could use some food and rest, come in, come in”\r\nThe priest leads you into the rectory and prepares supper. You say:",
            image: 'images/questions/chapel3.jpg',
            answers: [
                {
                    text: "Oh boy, it sure is nice to have a real meal and talk to a normal person again.",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 1, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "How did you end up all the way out here?",
                    score: {
                        H: 0, S: 1, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "What is this church, and who are the parishioners?",
                    score: {
                        H: 0, S: 2, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Who built this church? It is beautiful.",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 3, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "mhmmh *stuffs face*",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q37",
            text: "The priest tells you a little about himself and the church. \r\n“I was sent here to establish a mission for the native people, they are not subject to any king here. I built this church and preached to the villagers down the hill, many are now parishioners. You should meet them after mass tomorrow.” Despite your physical exhaustion, you linger a long while at the dinner table discussing faith and humanity with the missionary and the poet.",
            image: 'images/questions/meal.webp',
            answers: [
                {
                    text: "I enjoy the intellectual aspects of the conversation",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I enjoy the deep personal aspects of the conversations",
                    score: {
                        H: 0, S: 0, L: 3, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I just enjoy the shared company and fellowship",
                    score: {
                        H: 0, S: 3, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I appreciate how this conversation is edifying in important matters",
                    score: {
                        H: 3, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I wish we would talk on lighter subjects",
                    score: {
                        H: 0, S: 1, L: 0, P: -1, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the missionary",
                    score: {
                        H: 7, S: 0, L: 0, P: 7, R: 0, A: 0, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q38",
            text: "As the conversation dwindles, you get a chance to mention the oracle. \r\n“You mean the prophet? Yes he travels these lands often. I do not know where he comes from, or if his gifts are true. But the ruler of the village might know more” At that the missionary makes 2 pallets and you quickly fall into a deep sleep. After mass on the next day, the poet taps your shoulder and points to a sturdy man with a royal red beard. Giving thanks and saying goodbye to the missionary, you follow the bearded man down the hill into the village. The villagers look suspiciously at the travellers, and finally the man notices you. The poet bows deeply and makes a flowery introduction, asking \r\n“are we in the presence of the great chieftain of these parts?”. The bearded man looks slightly amused and slightly disgusted \r\n“Enough of this pomp, yes, I am the chieftain. Who are you two strangers? We don’t take kindly to emissaries from the king. We have our own ways out here, and we live free.”\r\n“We are but travellers, humbly passing through your great town. We seek out the prophet, and though you might know where to find him”\r\n“You mean the seer? Yes I know where you can find him. To the west there are great cliffs on the edge of the sea, only a day’s journey, there you will find him in his hermitage.”\r\nThe poet makes his gratitude very known, and the chieftain laughs at this and adds \r\n“and you are welcome to eat with us, today the village is preparing a communal meal.” The lunch of wild grain and gamey meat is wonderful, and dining with the village you can tell the great love the chieftain has for his people, and the great loyalty each villager has for their leader, from the women and children to the warriors.",
            image: 'images/questions/cheiftain.jpg',
            answers: [
                {
                    text: "This village is beautiful and seems the ideal place to live",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 2, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I would rather live back home on the farm then out here in the wild lands",
                    score: {
                        H: 0, S: 0, L: 1, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I would also fight for this man loyally!",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 1
                    }
                },
                {
                    text: "I am the chieftain",
                    score: {
                        H: 0, S: 7, L: 0, P: 0, R: 7, A: 0, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "No comment, let’s go find that seer.",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q39",
            text: "During the meal, the poet recounts an embellished story of the rat’s den. The chieftain remarks \r\n“ah yes those ruinous beasts. I’ve had my eye on the king rat, so we call him. But I haven’t had my chance to slay the monster.” In the early afternoon, you and the poet embark again. The chieftain gives you a warning about royal soldiers, as they have been seen encroaching north these days. Heading west, you can see the moonlight shining off the sea in the distance when you stop to camp. Early in the morning the sun rises bright and sharp.",
            image: 'images/questions/west.jpg',
            answers: [
                {
                    text: "The moon!",
                    score: {
                        H: 0, S: 0, L: 3, P: 0, R: 3, A: 0, E: 0, W: 0, D: 3, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The sun!",
                    score: {
                        H: 0, S: 0, L: 2, P: 0, R: 3, A: 0, E: 3, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The sea!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 2, A: 0, E: 3, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My heart!",
                    score: {
                        H: 0, S: 0, L: 3, P: 0, R: 0, A: 2, E: 0, W: 3, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Huh?",
                    score: {
                        H: 0, S: 1, L: 0, P: 2, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q40",
            text: "Making your way to the cliffs you pass through a wooded glen carved by a stream rushing to the sea. On the riverbed you spy a thin man in ragged clothes cheerfully gathering water. He turns at your approach and calls out \r\n“peace be with ye! Are you lost too?” The poet gladly exclaims \r\n“greetings pilgrim! Thanks be to God we know our path for once” You notice the scallop shell pinned to his tunic as the pilgrim responds \r\n“and praise His name! I have been travelling along the coastline here, and now I must finally arrive at the old mission they say is around these parts, to make a pilgrimage. Would you know the way?” You give the pilgrim directions and go your separate ways.",
            image: 'images/questions/pilgrim.webp',
            answers: [
                {
                    text: "What a nice man, that made my day!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 2, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "It isn’t far, maybe we should accompany the pilgrim until he knows the way for sure, besides he would make a good walking partner",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 4, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "It is admirable that he would travel so far from home all alone, but I could never do that.",
                    score: {
                        H: -1, S: 0, L: 1, P: 0, R: 0, A: 0, E: -1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the pilgrim",
                    score: {
                        H: 7, S: 0, L: 0, P: 0, R: 7, A: 0, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q41",
            text: "The poet muses as you walk on:\r\n“There are many who travel once a year\r\n to see distant family dear\r\nThere are some who travel in due season\r\nto sell their crop or for some other reason\r\nThere are few who travel just by choice to see a shrine’s tall dome\r\nStill even less travel all their life, and never make it home”",
            image: 'images/questions/glen.jpg',
            answers: [
                {
                    text: "Beautiful",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 4, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Sad",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 4, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "True",
                    score: {
                        H: 0, S: 0, L: 0, P: 4, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q42",
            text: "At high noon you stand on the edge of a cliff looking down at the vast sea. Heading northward along the coast, you at last sea the hermitage in a rocky cleft. No one is home, so you climb the further hill and come atop to find the tallest cliffs so far. At the edge, facing the water, you see a man leaning on his staff with his cloak billowing in the wind. Walking up behind him, the poet calls out in the wind \r\n“oh wise oracle, we come to hear the prophecy destined to fill our ears” The seer says nothing, but turns slightly and beckons you closer. \r\n“The gift of prophecy is a blessing and a curse. I know these things, but must reckon with them too. That is why I live out here. The sea, untameable, constantly changing, helps me think.”",
            image: 'images/questions/seer.jpg',
            answers: [
                {
                    text: "I agree, the sea helps me think",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 2, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I disagree, I would be a mess all alone here",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I would agree, but I prefer mountains more to think",
                    score: {
                        H: 0, S: 0, L: 2, P: 0, R: 2, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the seer",
                    score: {
                        H: 0, S: 0, L: 7, P: 7, R: 0, A: 0, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q43",
            text: "Astonished, you ask again about the prophecy. Without looking away from the sea, the seer recounts the prophecy: \r\n“The crown sits on an unknown head, and the sceptre is held by a stranger. The noise of war may stir the mind, and regalia remember an old friend.\r\nThe falcon shall lose his master,\r\nEnemies shall tend each others wounds,\r\nAnd true honor shall face itself in battle,\r\nBefore the king is king again”\r\nAnd he spoke no more. You look at the poet, who has a serious look on his face. Without saying a word, you both leave the seer on the cliff’s edge, and wander down the hill. \r\n“Well my friend, I was only meant to bring you thus far, but I will accompany you until all the seer spoke of  is to be fulfilled. Where to next is up to you. There is a small port town not too far south of here, where we can board a galley. Otherwise, it’s back to the village”",
            image: 'images/questions/seer.jpg',
            answers: [
                {
                    text: "Let’s sail back to the kingdom, I need to go home",
                    score: {
                        H: -1, S: 0, L: 1, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q44-sail"
                },
                {
                    text: "Let’s sail back to the kingdom, something about this prophecy…",
                    score: {
                        H: 1, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q44-kingdom"
                },
                {
                    text: "Let’s sail to the forest edge, I need to help my brother still",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 1, Honor: 0, Chivalry: 0
                    },
                    followUp: "q44-sail"
                },
                {
                    text: "Let’s head back to the village",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q44-village"
                },
                {
                    text: "Let’s stop at the village on our way back to the forest, I need to help my brother still",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 1, A: 2, E: 0, W: 0, D: 0, Courage: 1, Honor: 0, Chivalry: 0
                    },
                    followUp: "q44-village"
                },
                {
                    text: "Let’s head north and explore!",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 1, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q44-north"
                }
            ]
        },
        {
            id: "q44-kingdom",
            text: "You and the poet climb down a pass in the cliffs and follow the coast south until you reach the port town, a small trading stop with a few ships at the quay. You walk through the docks, passing broad men loading and unloading goods, and ask each captain where they are headed and if they can stow for a fare. All of the ships heading south have multiple stops before they reach the kingdom, or are wary of stowaways. Almost giving up, you are approached by a rugged man with sharp features \r\n“I can take you where you’re going” Thinking you had asked every ship’s captain, you ask him where his ship is. Embarrassed, he points behind a great trading vessel to a single-masted boat you had somehow overlooked. Seeing no other option, you agree and prepare to sail. His only crew is a young lad with high spirits. Early in the morning, you help untie and row the boat into open water.",
            image: 'images/questions/port.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "A pink sunrise, slight breeze, and open waters! All I need.",
                    score: {
                        H: 2, S: 0, L: 0, P: 0, R: 2, A: 0, E: 2, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "This is so sketchy… we’re all going to drown",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "It’s not much of a ship, but it’ll do. It’ll do",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 3, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "This man seems capable, I believe we can get there.",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q44-sail",
            text: "You and the poet climb down a pass in the cliffs and follow the coast south until you reach the port town, a small trading stop with a few ships at the quay. You walk through the docks, passing broad men loading and unloading goods, and ask each captain where they are headed and if they can stow for a fare. None of the captains can alter their course to get you near the forest garrison, or are wary of sailing so close to the borderlands. Almost giving up, you are approached by a rugged man with sharp features \r\n“I can take you where you’re going” Thinking you had asked every ship’s captain, you ask him where his ship is. Embarrassed, he points behind a great trading vessel to a single-masted boat you had somehow overlooked. Seeing no other option, you agree and prepare to sail. His only crew is a young lad with high spirits. Early in the morning, you help untie and row the boat into open water.",
            image: 'images/questions/port.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "A pink sunrise, slight breeze, and open waters! All I need.",
                    score: {
                        H: 2, S: 0, L: 0, P: 0, R: 2, A: 0, E: 2, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "This is so sketchy… we’re all going to drown",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "It’s not much of a ship, but it’ll do. It’ll do",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 3, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "This man seems capable, I believe we can get there.",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q44-village",
            text: "The poet agrees, and you head east towards the village. But, climbing up the glen on your way back, you see a company of soldiers marching ahead of you. With no way to overtake them and warn the villagers, you both decide it’s best to take the sea route. You turn around and head to the port town. You climb down a pass in the cliffs and follow the coast south until you see a small town with a few ships docked at the quay. You walk through the docks, passing broad men loading and unloading goods, and ask each captain where they are headed and if they can stow for a fare. None of the captains can alter their course to get you near the forest garrison, or are wary of sailing so close to the borderlands. Almost giving up, you are approached by a rugged man with sharp features \r\n“I can take you where you’re going” Thinking you had asked every ship’s captain, you ask him where his ship is. Embarrassed, he points behind a great trading vessel to a single-masted boat you had somehow overlooked. Seeing no other option, you agree and prepare to sail. His only crew is a young lad with high spirits. Early in the morning, you help untie and row the boat into open water.",
            image: 'images/questions/port.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "A pink sunrise, slight breeze, and open waters! All I need.",
                    score: {
                        H: 2, S: 0, L: 0, P: 0, R: 2, A: 0, E: 2, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "This is so sketchy… we’re all going to drown",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "It’s not much of a ship, but it’ll do. It’ll do",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 3, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "This man seems capable, I believe we can get there.",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q44-north",
            text: "The poet reluctantly agrees to head north, and you take a snowy pass through the northern ridge, but suddenly great avalanches and storms block your way, as if a mage cast a spell from the mountaintop. Freezing, you agree to the poet’s plea to return to the south and take the ferry, as there is plenty of sea to explore. You turn around, warm up by a fire, then head to the port town the next day. You climb down a pass in the cliffs and follow the coast south until you see a small town with a few ships docked at the quay. You walk through the docks, passing broad men loading and unloading goods, and ask each captain if they can stow for a fare, but each refuses. Almost giving up, you are approached by a rugged man with sharp features \r\n“I can take you where you’re going” Thinking you had asked every ship’s captain, you ask him where his ship is. Embarrassed, he points behind a great trading vessel to a single-masted boat you had somehow overlooked. Seeing no other option, you agree and prepare to sail. His only crew is a young lad with high spirits. Early in the morning, you help untie and row the boat into open water.",
            image: 'images/questions/port.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "A pink sunrise, slight breeze, and open waters! All I need.",
                    score: {
                        H: 2, S: 0, L: 0, P: 0, R: 2, A: 0, E: 2, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "This is so sketchy… we’re all going to drown",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "It’s not much of a ship, but it’ll do. It’ll do",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 3, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "This man seems capable, I believe we can get there.",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q45",
            text: "The morning passes with smooth sailing, and you are impressed by the captain’s ability to man his ship. His mate is also very effective for a sailor as young as he. In talking to the captain you find he is more of an adventurer than a commercial sailor. He recounts tales of his travels from long ago: \r\n“I was aboard a long galley, a military vessel, and pirates mistook us for a trading ship. They hawked us down and boarded us. There was a great battle, and our galley sunk. I and the few who made it out alive had to sail the pirate ship back to port. Imagine explaining that one!” A little later, the seafarer remarks \r\n“The sea, she speaks to me..” and asks \r\n“do you hear her calling?”",
            image: 'images/questions/sea.jpg',
            answers: [
                {
                    text: "Yes",
                    score: {
                        H: 2, S: 0, L: 2, P: 0, R: 2, A: 0, E: 3, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Sometimes",
                    score: {
                        H: 1, S: 1, L: 0, P: 0, R: 1, A: 0, E: 1, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "No",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: -1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "…. He’s crazy",
                    score: {
                        H: 0, S: 1, L: 0, P: 2, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the seafarer",
                    score: {
                        H: 7, S: 0, L: 0, P: 0, R: 7, A: 0, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q46",
            text: "Around noon, the heavy sun is smothered by low clouds, and a fog rolls over the sea. It is nice at first, but then becomes quite eerie as you silently pass jagged rock formations jutting out of the sea. Suddenly, there is a loud thud, and the ship grinds to a halt. The young shipmate groans and speculates \r\n“we’ve struck a shoal.” The captain, experienced seafarer as he was, stood frozen and pale \r\n“nay, it’s not a shoal”",
            image: 'images/questions/fog_sea.jpg',
            answers: [
                {
                    text: "Then.. what is it?!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Kraken!!! *abandons ship*",
                    score: {
                        H: 0, S: 0, L: 0, P: -1, R: 1, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Draw my sword, stand my ground",
                    score: {
                        H: 2, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 3, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Strategize, there must be a way we can escape this sea monster",
                    score: {
                        H: 0, S: 1, L: 0, P: 3, R: 0, A: 1, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Hey maybe it’s just some mermaids or something",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 1, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q47",
            text: "The young shipmate now mimics his captain’s paleness, and the poet, with a pensive look, is pacing back and forth on the deck. You move to the side of the boat and peer into the water. A long dark shadow lurks directly beneath the boat. You hear the boat creak as the shadow moves. Turning around to a scream from the young shipmate, you see all three men staring at a huge reptilian beast rising from the sea. The seafarer only musters two words: \r\n“The leviathan…” At once, the sea serpent dives into the water on the opposite side of the boat, encircling the entire vessel. Seizing this moment, you draw your sword and slash the scaly flesh, but your sword bounces off. The seafarer makes a more daring but effective attack by plunging a fishing spear deep into the underbelly. The leviathan makes a shrill roar, then whips its tail into the water, letting go of the ship and knocking the poet to the deck in the process.",
            image: 'images/questions/leviathan7.jpg',
            answers: [
                {
                    text: "I get it, the underbelly has no scales, that’s where we need to target!",
                    score: {
                        H: 1, S: 0, L: 0, P: 4, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q47-aha"
                },
                {
                    text: "Is the poet okay?!",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 4, E: 1, W: 1, D: 0, Courage: 1, Honor: 0, Chivalry: 0
                    },
                    followUp: "q47-poet"
                },
                {
                    text: "It may be trying to kill us, but the leviathan is a majestic beast",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 4, A: 0, E: 0, W: 1, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q47-action"
                },
                {
                    text: "*fetal position*",
                    score: {
                        H: 0, S: 1, L: 1, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: -1, Honor: 0, Chivalry: 0
                    },
                    followUp: "q47-action"
                }
            ]
        },
        {
            id: "q47-poet",
            text: "You run over to the poet, but he is out cold. The seafarer spurs you back to action \r\n“it’ll be back, let’s climb below deck this time and drive its soft underside with spears,” As the sea monster makes its second attempt, all three of you drive your spears. The beast is stuck over the ship, and you rise to the deck to face it head on. It strikes the ship with its head, forcing you to dive to the side. The deck gives way to the blow, and the serpent’s head is jammed in the ship. You take the moment to slice the neck, and make the fatal blow. With a final screech, the leviathan falls back to the sea, but not without crushing part of the ship’s hull.",
            image: 'images/questions/leviathan3.png',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Well that’s not good",
                    score: {
                        H: 1, S: 0, L: 0, P: 2, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I just killed the beast!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 1, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I knew I was gonna drown",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "We can swim it",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q47-action",
            text: "The seafarer spurs you back to action \r\n“it’ll be back, let’s climb below deck this time and drive its soft underside with spears” As the sea monster makes its second attempt, all three of you drive your spears. The beast is stuck over the ship, and you rise to the deck to face it head on. It strikes the ship with its head, forcing you to dive to the side. The deck gives way to the blow, and the serpent’s head is jammed in the ship. You take the moment to slice the neck, and make the fatal blow. With a final screech, the leviathan falls back to the sea, but not without crushing part of the ship’s hull.",
            image: 'images/questions/leviathan2.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Well that’s not good",
                    score: {
                        H: 1, S: 0, L: 0, P: 2, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I just killed the beast!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 1, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I knew I was gonna drown",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "We can swim it",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q47-aha",
            text: "The seafarer stares into the sea \r\n“it’ll be back”\r\nYou come up with a plan: climb below deck and drive its soft underside with spears when it comes again. You move quickly, and as the sea monster makes its second attempt, all three of you drive your spears. The beast is stuck over the ship, and you rise to the deck to face it head on. It strikes the ship with its head, forcing you to dive to the side. The deck gives way to the blow, and the serpent’s head is jammed in the ship. You take the moment to slice the neck, and make the fatal blow. With a final screech, the leviathan falls back to the sea, but not without crushing part of the ship’s hull.",
            image: 'images/questions/leviathan6.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Well that’s not good",
                    score: {
                        H: 1, S: 0, L: 0, P: 2, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I just killed the beast!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 1, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I knew I was gonna drown",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "We can swim it",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q48",
            text: "As the boat sinks, you spot one of the rock formations nearby rush to abandon ship. The seafarer helps you lower the poet into the sea, then you jump off, grab him, and start swimming. Turning back, you call out to the seafarer, who has stayed on the ship. He sternly responds \r\n“a captain goes down with his ship” The young shipmate seems to be similarly resolved, so you go on swimming to the rock, dragging the poet slowly. Finally making it to the shoal, you wade to a flat enclave in the formation and hoist the poet out of the water and onto his rocky bed. Utterly exhausted, you sprawl out next to him. Noticing a large splinter from the ship stabbed in your side like a dagger, you try to stay awake, but darkness covers your eyes.",
            image: 'images/questions/stranded.avif',
            answers: [
                {
                    text: "I’m gonna bleed out on this rock",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 1, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "We should have stayed on the ship, we’re stranded now",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Well at least I can lie down. We’ll figure it out when I wake up",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 2, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q49",
            text: "You wake up as the sun sets, making the formations that seemed dreary in the fog look magical in the golden light. Looking around, you see no sign of the ship, nor any hope of being saved from your watery grave. The poet is still breathing, but he is cold to the touch. Suddenly, you hear a woman’s voice singing beautifully. Enchanted, you peer to the direction of the song, but the voice seems to be coming from the open sea. Then, the water swirls and a woman emerges from the ocean. In the sunset, you almost cannot behold her beauty. She seems to wear the seawater, and the hem of this aquatic dress swirls into the water below.\r\n“Who are you?” She asks.\r\nStunned, you utter half-comprehensible pleas for help, pointing at the poet and your bloody wound. \r\nShe smiles warmly \r\n“I know what you need, and I intend to help you, but I was asking who you are”",
            image: 'images/questions/nymph2.jpeg',
            answers: [
                {
                    text: "I am a farmer",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q49-farmer"
                },
                {
                    text: "I am a traveller",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 1, A: 0, E: 2, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q49-traveller"
                },
                {
                    text: "I am the leviathan-slayer",
                    score: {
                        H: 1, S: 1, L: 0, P: -1, R: 2, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q49-slayer"
                },
                {
                    text: "I am nobody",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 1, E: 0, W: 1, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q49-idk"
                },
                {
                    text: "I don’t know…",
                    score: {
                        H: -1, S: 0, L: -1, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q49-idk"
                }
            ]
        },
        {
            id: "q49-idk",
            text: "\r\n“Ah, I see. Well I would love to get to know you more, but I do see there are urgent matters to attend to” \r\nShe pulls the splinter from your side, which causes immense pain. You flinch away when she reaches for your wound again. You reluctantly allow her to place her hand on your wound. You see her sea-colored eyes intent on her healing magic, and you realize who she is. When she removes her hand, no sign of the wound remains. Next, the nymph moves over to the poet, leans over, and kisses his head.\r\n“He will still need the rest of the night to sleep and recover. In the meantime, I must know more about you, for my magic to last. My healing powers only take hold as deep as my knowledge is of the person who is healed”",
            image: 'images/questions/nymph3.avif',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Yes I love this stuff, let’s dive right in",
                    score: {
                        H: 0, S: 1, L: 2, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wow what wonderful magic",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 2, A: 2, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Well that seems a ridiculous limitation for magic powers but ok",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Thank you for your help",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q49-slayer",
            text: "\r\n“Alright then, mighty leviathan slayer. I would love to get to know you more, but I do see there are urgent matters to attend to” \r\nShe pulls the splinter from your side, which causes immense pain. You flinch away when she reaches for your wound again. You reluctantly allow her to place her hand on your wound. You see her sea-colored eyes intent on her healing magic, and you realize who she is. When she removes her hand, no sign of the wound remains. Next, the nymph moves over to the poet, leans over, and kisses his head.\r\n“He will still need the rest of the night to sleep and recover. In the meantime, I must know more about you, for my magic to last. My healing powers only take hold as deep as my knowledge is of the person who is healed”",
            image: 'images/questions/nymph3.avif',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Yes I love this stuff, let’s dive right in",
                    score: {
                        H: 0, S: 1, L: 2, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wow what wonderful magic",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 2, A: 2, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Well that seems a ridiculous limitation for magic powers but ok",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Thank you for your help",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q49-farmer",
            text: "\r\n“You are much more than a farmer, though I can tell where your heart lies. Well I would love to get to know you more, but I do see there are urgent matters to attend to” \r\nShe pulls the splinter from your side, which causes immense pain. You flinch away when she reaches for your wound again. You reluctantly allow her to place her hand on your wound. You see her sea-colored eyes intent on her healing magic, and you realize who she is. When she removes her hand, no sign of the wound remains. Next, the nymph moves over to the poet, leans over, and kisses his head.\r\n“He will still need the rest of the night to sleep and recover. In the meantime, I must know more about you, for my magic to last. My healing powers only take hold as deep as my knowledge is of the person who is healed”",
            image: 'images/questions/nymph3.avif',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Yes I love this stuff, let’s dive right in",
                    score: {
                        H: 0, S: 1, L: 2, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wow what wonderful magic",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 2, A: 2, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Well that seems a ridiculous limitation for magic powers but ok",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Thank you for your help",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q49-traveller",
            text: "\r\n“I see, a great adventurer. Well I would love to get to know you more, but I do see there are urgent matters to attend to” \r\nShe pulls the splinter from your side, which causes immense pain. You flinch away when she reaches for your wound again. You reluctantly allow her to place her hand on your wound. You see her sea-colored eyes intent on her healing magic, and you realize who she is. When she removes her hand, no sign of the wound remains. Next, the nymph moves over to the poet, leans over, and kisses his head.\r\n“He will still need the rest of the night to sleep and recover. In the meantime, I must know more about you, for my magic to last. My healing powers only take hold as deep as my knowledge is of the person who is healed”",
            image: 'images/questions/nymph3.avif',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Yes I love this stuff, let’s dive right in",
                    score: {
                        H: 0, S: 1, L: 2, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wow what wonderful magic",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 2, A: 2, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Well that seems a ridiculous limitation for magic powers but ok",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Thank you for your help",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q50",
            text: "The Nymph uncovers your story, then begins asking you peculiar questions. \r\n“What do you value most in a friend: honesty, kindness, or appreciation?”",
            image: 'images/questions/nymph.jpg',
            answers: [
                {
                    text: "Honesty",
                    score: {
                        H: 0, S: 0, L: 3, P: 11, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Kindness",
                    score: {
                        H: 3, S: 0, L: 0, P: 0, R: 0, A: 11, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Appreciation",
                    score: {
                        H: 0, S: 3, L: 0, P: 0, R: 11, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q51",
            text: "She continues her questioning, one after the other. \r\n“And how are you processing all the things happening to you on your journey?”",
            image: 'images/questions/nymph3.avif',
            answers: [
                {
                    text: "At night, when it is quiet, I lay up thinking of these things. Or during uneventful walking, I go through it inwardly. It’s all interior",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 1, A: 0, E: 0, W: 0, D: 11, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "My response comes quickly, usually through what I do next. Or I talk about it with the poet, my guide. It’s all exterior",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 11, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Through thinking and talking. I think before I act, but when I have decided, I have decided.",
                    score: {
                        H: 1, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 7, D: 3, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I just keep on going. Never did bother me.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 11, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q52",
            text: "When the world comes down on you, how do you best deal with it?",
            image: 'images/questions/nymph.jpg',
            answers: [
                {
                    text: "By doing something about it. Take some action immediately",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 11, W: -1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "By processing it before I make any decisions",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 11, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Never stop moving forward, but take time to think as I go along",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 11, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wait it out",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 0, E: 0, W: 7, D: 3, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q53",
            text: "What do you desire most in your close relationships?",
            image: 'images/questions/midnight.jpeg',
            answers: [
                {
                    text: "Growing together",
                    score: {
                        H: 11, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Shared experiences",
                    score: {
                        H: 0, S: 11, L: 0, P: 0, R: 1, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Mutual Knowledge",
                    score: {
                        H: 0, S: 0, L: 11, P: 2, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q54",
            text: "What is most satisfying?",
            image: 'images/questions/midnight.jpeg',
            answers: [
                {
                    text: "An \r\n“aha!” moment. When something finally makes sense.",
                    score: {
                        H: 0, S: 0, L: 0, P: 11, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "A ”win-win” situation. When something unexpectedly turns out great for everyone",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 11, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "A \r\n“wow” sensation. When the sun is low in the sly, the trees are turning color, and the breeze is just right.",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 11, A: 0, E: 10, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q55",
            text: "What is a meadow for, primarily?",
            image: 'images/questions/potc.webp',
            answers: [
                {
                    text: "Frolicking",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 5, A: 0, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Daydreaming",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 2, A: 0, E: 0, W: 0, D: 7, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Running my hand through the wild grain and tall grass",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 7, A: 0, E: 0, W: 3, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Looking at",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 7, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "A home for critters and a place for wild herbs",
                    score: {
                        H: 0, S: 0, L: 3, P: 0, R: 0, A: 7, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Thinking",
                    score: {
                        H: 0, S: 0, L: 0, P: 7, R: 0, A: 0, E: 0, W: 0, D: 3, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q56",
            text: "Of these options, what type of relationship do you find easiest to maintain well?",
            image: 'images/questions/potc.webp',
            answers: [
                {
                    text: "The friend who has similar aspirations, and I can count on as an equal",
                    score: {
                        H: 11, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The friend who will never be a stranger, and I get along with the most",
                    score: {
                        H: 0, S: 11, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The friend who I end up talking until 2am about life with",
                    score: {
                        H: 0, S: 0, L: 11, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q57",
            text: "What word best describes the relationships in your life?",
            image: 'images/questions/midnight.jpeg',
            answers: [
                {
                    text: "Growth",
                    score: {
                        H: 11, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Breadth",
                    score: {
                        H: 0, S: 11, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Depth",
                    score: {
                        H: 0, S: 0, L: 11, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q58",
            text: "When you experience loss, how do you deal with it?",
            image: 'images/questions/twilight.webp',
            answers: [
                {
                    text: "I need support from those around me",
                    score: {
                        H: 0, S: 3, L: 0, P: 1, R: 0, A: 0, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I distract myself and take my time",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 0, E: 3, W: 5, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I must process the event for a while",
                    score: {
                        H: 2, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 9, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I have to feel all my emotions before I can move forward",
                    score: {
                        H: 1, S: 1, L: 1, P: 0, R: 1, A: 1, E: 1, W: 1, D: 7, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I take it as it comes and keep going",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I think and feel, keep doing things and being with people, and find a path forward",
                    score: {
                        H: 0, S: 3, L: 0, P: 0, R: 0, A: 0, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q59",
            text: "Of these options, what type of relationship do you find you maintain the most?",
            image: 'images/questions/twilight.webp',
            answers: [
                {
                    text: "The friend who makes time fly",
                    score: {
                        H: 0, S: 7, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The friend who I am most myself with",
                    score: {
                        H: 0, S: 0, L: 7, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The friend I know the best",
                    score: {
                        H: 1, S: 1, L: 2, P: 1, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The friend who draws me out of myself",
                    score: {
                        H: 7, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The friend who I have fun with",
                    score: {
                        H: 0, S: 7, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The friend who understands me",
                    score: {
                        H: 5, S: 0, L: 5, P: 1, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q60",
            text: "And your conversation with the nymph visited many other places through the night in a therapeutic haze. Eventually you fall asleep, and when you wake up, the poet is saying his farewells to the nymph. You ask why the poet’s healing will last, and the poet responds \r\n“oh we’ve known each other a long time now” and the poet gives a deep bow to the nymph, whose aquatic attire sparkles in the morning sun as she curtsies. You ask how you are going to get back to the land. \r\n“Do you think I have forgotten?” Asks the nymph, rhetorically, as she points to the open sea. As you look out, the ship emerges from the sea and crashes on the water’s surface, pitching to and fro, losing the seawater it gathered from the depths. Finally the ship regains its balance, and you see the seafarer and his mate waving to you from the deck. The nymph smiles at you and says \r\n“All I ask for in return is that you return to your brother at once. He is a friend of mine as well, and he needs your help”",
            image: 'images/questions/rise_again.jpg',
            answers: [
                {
                    text: "He does, then off we go",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 3, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Ok… I will go",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I give you my word",
                    score: {
                        H: 1, S: 0, L: 2, P: 2, R: 2, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 11, Chivalry: 3
                    }
                }
            ]
        },
        {
            id: "q61",
            text: "You say one last farewell to the nymph, then the seafarer sails you to the coast and up a wide river that leads into the forbidden forest. The ship takes you as far up river as it can go, and you disembark with the poet. With a knowing look, you and the poet enter once more into the forest, heading northeast to where your original quest was destined. This time the poet is a true guide, and your current path is far safer than your previous experience. Walking a long distance at one point, the poet begins\r\n\r\n“Once my heart was broken, it sunk into the sea\r\nNot a word was spoken, from any close to me\r\nAt last I had a helper\r\nin matters of heart she was adept\r\nShe healed me from my center\r\nand raised my heart from the depths”",
            image: 'images/questions/rise_again2.jpg',
            answers: [
                {
                    text: "A friend",
                    score: {
                        H: 5, S: 11, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "A lover",
                    score: {
                        H: 0, S: 5, L: 11, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "A soulmate",
                    score: {
                        H: 11, S: 0, L: 5, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q62",
            text: "Reaching the eastern edge of the forest, you come into a large plain with looming mountains to the north. As night falls, you notice a a large camp with a few fires in the distance. Unsure who it can be, but hopeful it is your brother, you and the poet quietly approach in the dark. Coming closer you realize your brother is certainly not among them; in fact, there are royal soldiers and knights around the fires. You turn to escape without being noticed, but it is too late, you step right into an unseen burrow, and fall to the ground with a thud.",
            image: 'images/questions/sneak.jpg',
            answers: [
                {
                    text: "Silly rabbit",
                    score: {
                        H: 0, S: 1, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "A temporary setback",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 4, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "*pretends to be asleep*",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "All part of the plan",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 6, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q63",
            text: "A yell from the camp  \r\n“Who goes there?!”\r\nAt once there are watchmen about you, then torches. You are seized and brought before the knights. You are shocked to find yourself face to face with the knights and squires with whom you journeyed out here. Scanning the group hopefully, you do not see the friendly knight, and the memory of the ogre encounter fills your mind with renewed grief.\r\n“What a happy accident! We had hoped to find you again, we had just received orders to march straight into the rogue’s keep, with our numbers a sure death to us all! But now we can continue with the original plan.”\r\nYou try to contrive a way out of this, but nothing comes to mind. In the meantime, the poet is persuasively selling why they simply must also take him along. You hardly have any choice but to go along with the company, given the strong implication of coercion. In the morning, company heads towards the looming mountains in the supposed direction of the rogue’s den.",
            image: 'images/questions/sneak.jpg',
            answers: [
                {
                    text: "Back to square one",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Wait, this might work out, I have a plan",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "At least I got the poet with me this time",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q64",
            text: "You march through a pass in the foothills of the great mountain range, and a falcon eyes you from its perch on a nearby crag. It soars into the sky as you pass, circles your company, then rises to the mountains. The pass turns into a thin canyon before it lets out into the eastern plain, but when you reach this point, a cloaked man stands in the middle of the way, leaning on a great staff. He wears a wide, pointed hat and has a long grey beard. The soldiers stop their march, and the lone man pronounces with a booming voice \r\n“I will let you pass if you can solve a riddle”\r\nThe leading knight calls out \r\n“what is this? in the name of the king step aside”\r\nAlmost ignoring him the stranger lays out his riddle\r\n“I do not change. Some say I am bright.\r\nSome claim it is for me that they do fight.\r\nSome spend their whole lives searching for me,\r\nyet most look away the moment we meet.\r\nWhat am I?”\r\nOne of the squires guesses \r\n“true love” as an answer, but is given a slow shake of the head in response.\r\nThe leading knight chimes in \r\n“Enough of this, step aside or we will make you” and he takes steps towards the old man. With a tap of his staff against the ground, a thunderbolt strikes the ground in front of the knight and he is thrown back, stunned. Everyone stands very still. From the ground, the leading knight orders the soldiers to attack. As they fearfully charge, the mage throws fireballs in their direction, blasting them off their feet. You and the poet hide behind a rock. The poet asks \r\n“Do you know the answer to the riddle?”",
            image: 'images/questions/pass2.jpeg',
            answers: [
                {
                    text: "Yes, it is the truth",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 1, Honor: 0, Chivalry: 0
                    },
                    followUp: "q64-yes"
                },
                {
                    text: "I thought something like that",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q64-yes"
                },
                {
                    text: "No, I did not know",
                    score: {
                        H: 0, S: 0, L: 0, P: -1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q64-no"
                }
            ]
        },
        {
            id: "q64-yes",
            text: "You say yes and run through the carnage to the mage, and as the mage holds another fireball above his head, you throw your arms up and say you know the answer. The mage looks wistfully at you, then smiles when you say \r\n“the truth”. He cheerfully proclaims \r\n“correct!” and with a tap of his staff, he disappears from sight. The company is still speechless, but they hurry out of the pass. Taking a look behind you, you see the mage atop the crag with the falcon on his arm, watching you leave.",
            image: 'images/questions/pass2.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Drama queen",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Spooky",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Weirdo",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Falcon punch!",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the mage",
                    score: {
                        H: 7, S: 0, L: 0, P: 7, R: 0, A: 0, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q64-no",
            text: "The poet says \r\n“well I know” and he runs through the carnage to the mage, and as the mage holds another fireball above his head, the poet throws his arms up and says he knows the answer. The mage looks wistfully at him, then smiles when the poet says \r\n“the truth”. He cheerfully proclaims \r\n“correct!” and with a tap of his staff, he disappears from sight. The company is still speechless, but they hurry out of the pass. Taking a look behind you, you see the mage atop the crag with the falcon on his arm, watching you leave.",
            image: 'images/questions/pass2.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Drama queen",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Spooky",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Weirdo",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Falcon punch!",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the mage",
                    score: {
                        H: 7, S: 0, L: 0, P: 7, R: 0, A: 0, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q65",
            text: "The company moves on through the plain and regains its morale. You stop behind a ridgeline and the company prepares for the ambush. You peek over the ridge and see a wooded natural fortress, with a rock formation acting as a castle wall. You only see one guard, a lone watchman on a high treehouse. Then any planning you’ve done goes to waste, as the lead knight sneaks up behind you and seizes you, pressing a dagger to your neck.\r\n“Did you really think we’d let you walk in there just to betray us? No, I am altering the plan”\r\nWith a few soldiers he leads you over the ridge and in front of the keep, yelling out\r\n“I have a message for the rogue! If he does not come out of the keep, alone and unarmed, I will kill his {sibling}”\r\nThe watchman disappears from his post, and a hooded man takes his place, then he also disappears. After a few long moments of silence, the hooded man appears from a secret gate and walks toward you with his hands up\r\n“Are you the rogue?” Asks the knight\r\nThe man responds \r\n“I am the one who you speak of, yes” and as he removes his hood you recognize your brother, but he looks sadder, as if the last few years have weathered his face beyond its years.\r\nThe knight speaks under his breath asking you to confirm if it is your brother.",
            image: 'images/questions/keep.jpg',
            answers: [
                {
                    text: "Never!",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 1, E: 2, W: 0, D: 0, Courage: 2, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Be silent",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 2, D: 2, Courage: 1, Honor: 1, Chivalry: 0
                    }
                },
                {
                    text: "Give in",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: -1, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q66",
            text: "He digs his knife into your neck until you finally say it is your brother. The knight now speaks louder so his soldiers can hear.\r\n“Unwise of you to step out here without aid”\r\nSuddenly an arrow flies past your brother, far off its mark, and there is a loud commotion back over the ridge as apparently the poet had resisted his confinement at the opportune moment to sabotage the assasination. Next cloaked woodsmen seem to apparate from the trees and come to your aid, letting you escape as the knight runs after the rogue. You free the bound poet with your sword, and, seeing no sign of your brother, the two of you flee into the woods. You run past the leading knight, who is now unarmed and fleeing, you share a glance and he only hesitates for a moment before continuing his flight. You keep moving in that direction until you find the rogue waiting for you. Your brother embraces you, then says we must hurry away, as the rangers will only be able to buy a little time before they retreat to the keep. You keep moving for a while until he says the coast is clear. What do you ask your brother first?",
            image: 'images/questions/keep3.png',
            answers: [
                {
                    text: "Where have you been?",
                    score: {
                        H: 2, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "How have you been?",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Who have you been?",
                    score: {
                        H: 0, S: 0, L: 2, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "What is that place?",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q67",
            text: "Your brother thinks for a second, then says\r\n“I guess I better tell you the whole story, huh? Well it seems I always had a star crossed fate. Even when we were young, I knew I would have to leave home and start all this. Since I left, I’ve become a ranger, roaming the wildlands. You see, I was meant to be the leader of the rangers from my birth, and that’s what I have been doing, though I visited you as often as I could. The keep back there is the ranger’s guild, our home. We keep the ranger’s code, like how a knight takes a vow of chivalry. Only we protect more than just the kingdom. There is a whole world across the border, with magic and creatures you wouldn’t believe. But now it seems my duty compels me to return to the kingdom”\r\nAt this point you remember the seer’s prophecy and the poet recites it to your brother, the ranger.\r\n“Is that so… I may have to return to the kingdom sooner than I thought. It may be time to gather all the friends I have made on my travels. And I’ll need to seek advice - the sage will be able to decipher this prophecy”",
            image: 'images/questions/reunion.jpg',
            answers: [
                {
                    text: "Was not expecting that",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "…cool!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I wish we could stay in the wild lands",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "To the kingdom!",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the rogue",
                    score: {
                        H: 7, S: 0, L: 0, P: 0, R: 0, A: 7, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q68",
            text: "As you turn in for the night, the poet recites a poem:\r\n“There is no greater cause of tears\r\nNor better sign of life after death\r\nNor casting off of all your fears\r\nNor room for words between each breath\r\nThan one embrace between two brothers\r\nWhose reunion has long been delayed\r\nMore thick than blood and close than lovers\r\nIs the bond which two brothers made”",
            image: 'images/questions/reunion.jpg',
            answers: [
                {
                    text: "True",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Beautiful",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 3, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Good",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 3, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q69",
            text: "In the morning, you begin heading south.\r\nYour brother stops everyone and warns.\r\n“I see poison nettle, stay behind me and don’t let it grab you”\r\nQuite familiar with sentient flora, you don’t question this, and watch the ground around you as you walk slowly on. You hear rustling above you, and look up to find tentacles of thorned vines reaching down from the trees. You can’t move in time, and you are ensnared. Your brother draws his sword and cuts you free, warding off the evil plant, then quickly helps you out of harm's way. You are already very weak, and feel as if your blood was thickening in your veins. The ranger quickly produces a remedy from his bag, but then mutters to himself concerningly.\r\n“Thankfully we are not too far from the apothecary. He will have what we need”\r\nUnable to stand, the poet helps your brother carry you miles eastward. You begin seeing purple lights and strange patterns.",
            image: 'images/questions/thorn.jpg',
            answers: [
                {
                    text: "Help",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I can take it",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q70",
            text: "You are aware of little until you are suddenly revived, lying on a table in a rustic shack. You see your brother and a wizened old man looking over you, holding a vial of green liquid.\r\n“Ah you’re awake!”\r\nYou are given some water and told to sit up. Looking around the shack, you see moss growing on the walls, many strange looking potted plants, and multi-colored tinctures on the many shelves. As you recover, the apothecary talks of his many recipies.\r\n“Of course I have perfected almost every antidote that can be brewed by men, but poison nettle is still a tricky one. Don’t worry, you’ll be ready to journey again by morning”\r\nYou thank him kindly, and so does your brother. When you leave in the morning, you are mesmerized by his large garden of many wondrous plants. Death chanced once again, you keep moving on.",
            image: 'images/questions/apothecary.jpg',
            answers: [
                {
                    text: "This can’t be good for my health",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "What a nice man!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 3, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Much thanks, but that place gave me the creeps",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the apothecary",
                    score: {
                        H: 7, S: 0, L: 0, P: 0, R: 0, A: 7, E: 0, W: 0, D: 7, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q71",
            text: "You approach a lone mountain in the eastern wastes. Atop one of the foothills is a gothic stone manor with a single tall parapet. As you approach, dark clouds roll over, the manor begins to take on a terrifying look. Lightning strikes in the distance, and you hurry to your destination before the storm comes. The poet raps the doorknocker on the cumbersome wooden doors. You are let in, and climb many stairs to reach the top floor of the tower. Inside, you face the back of a man looking through a thin window. There is another man sitting at a desk intent on his work. There is an intricate contraption of vials and tubes on the desk, and he is adding drops of a black liquid to an amber mixture. Your brother greets the man at the window and introduces him as the \r\n“wisest man he knows”. You ask who the man at the desk is and the sage responds \r\n“That is my friend, the alchemist, currently lost in foolish pursuits”\r\nSuddenly the man at the desk is aware of everyone, and responds\r\n“It is not foolish, the secrets of this world are meant to be unlocked”\r\nThe sage retorts \r\n“seeking knowledge for knowledge sake is unwise”\r\nThe alchemist has a comeback \r\n“eloquent words are apt to deceive. Wisdom is nothing if not applied”\r\nWho do you agree with?",
            image: 'images/questions/stormcastle.jpg',
            answers: [
                {
                    text: "The sage",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 1, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The alchemist",
                    score: {
                        H: 0, S: 0, L: 0, P: 4, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Both, knowledge and wisdom are both important to pursue",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 1, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Neither, both of them sound stuck up",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Above me",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q72",
            text: "With the argument paused for the moment, the alchemist, having lost focus on his work, draws a volume from the large bookshelf and begins reading in the thunderstorm.",
            image: 'images/questions/alchemist.jpg',
            answers: [
                {
                    text: "Very cozy. A good book and a good storm",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 2, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Ok",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: -1, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Nerd",
                    score: {
                        H: 0, S: 1, L: 0, P: -1, R: -1, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the alchemist",
                    score: {
                        H: 7, S: 0, L: 0, P: 7, R: 0, A: 0, E: 0, W: 0, D: 7, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q73",
            text: "Sitting by the fire, your brother consults with the sage. Upon hearing the prophecy, he mutters \r\n“yes, yes…”\r\nAnd after thinking a while finally says \r\n“indeed, the time is ripe”\r\nYou cannot tell whether your brother is saddened, scared, or emboldened by this response. \r\n“Then we shall delay no further”\r\nBefore you leave, the sage tells your brother he has something for him, and leads you all to a cellar in the bowels of the stone manor. Unlocking an old door, the sage removes an ancient sword from within. \r\n“The is the unbreakable sword, once wielded by the ancient kings. Take it, it will encourage you”\r\nYour brother takes it with honor.",
            image: 'images/questions/stormcastle.jpg',
            answers: [
                {
                    text: "Shiny!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 2, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Useful",
                    score: {
                        H: 0, S: 1, L: 0, P: 2, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Symbolic",
                    score: {
                        H: 0, S: 0, L: 2, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Eh, I’ve seen better",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q74",
            text: "You take your leave and begin your return to the kingdom for some ominous purpose. The sage calls out to you one last piece of advice\r\n“The greatest among us would be lowly if it weren’t for a handful of good friends”",
            image: 'images/questions/sagecastle.jpeg',
            answers: [
                {
                    text: "Very true",
                    score: {
                        H: 0, S: 2, L: 0, P: 2, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "That’s nice",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: -1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Great men trust no one",
                    score: {
                        H: 2, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the sage",
                    score: {
                        H: 0, S: 0, L: 7, P: 7, R: 0, A: 0, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q75",
            text: "At some point you cross back into the kingdom. Night encroaches on the stormy day, and your brother says he has an old friend who may offer a place to rest nearby. You make your way to some cleared land amongst the woods. You pass tilled plots full of crops near their time, which makes you will certainly miss harvest back home. Coming to a central, walled house, a guard lets you in the gate. Then, a man with a strong face and jovial smile  greets you outside \r\n“My old friend, you are welcome”\r\nYou all respond in thanks, and as you are each given beds, your brother stays up and quietly converses with the yeoman. In the morning, messengers on horseback are sent out in multiple directions. The yeoman pronounces a feast will be thrown for your brother tonight. A few cloaked soldiers arrive at the house throughout the day, possibly summoned by the messengers. They remind you of the rebels who once kidnapped you. When it is time for the feast the yeoman makes a hearty toast to your brother. Then, he makes a call to arms, which receives roaring approval. You are amazed at all this being done for him, and wonder at all his friends, and the apparent planned invasion.",
            image: 'images/questions/yeoman.jpeg',
            answers: [
                {
                    text: "The yeoman is right to support him",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The yeoman is being very hospitable",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The yeoman would make a good friend",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The yeoman is an interesting fellow",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 1, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the yeoman",
                    score: {
                        H: 0, S: 7, L: 0, P: 0, R: 0, A: 7, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q76",
            text: "As the feast continues, you sometimes spot a woman at another table who reminds you of the dryad, or another that reminds you of the nymph, or an old man that reminds you of the mage, but each time you are mistaken. When the guests have had their fill of food and wine, a slim man climbs on the central table with a six stringed lute. He begins to play a melancholic tune, and sing in majestic melodies of heroic stories. One song tells the story of a peasant boy who travels through the wildlands, making fantastical friends and fighting draconic foes, all so that he can return to his plot of land. The troubadour bows to much applause, then returns to the corner and quietly plucks his lute.",
            image: 'images/questions/yeoman_party.jpeg',
            answers: [
                {
                    text: "Epic!",
                    score: {
                        H: 2, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Beautiful!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 3, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Thought provoking",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Life imitates art",
                    score: {
                        H: 0, S: 0, L: 3, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the troubador",
                    score: {
                        H: 0, S: 0, L: 7, P: 0, R: 7, A: 0, E: 7, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q77",
            text: "In the morning, more cloaked rebels gather in the yeoman’s barracks. Through the day the yeoman plans the campaign over large maps. The poet pulls you aside. \r\n“Here our paths diverge. You are no longer in need of a guide. Your place is with your brother. As for me, I must return to the woods, that is my place. To know you is a pleasure, friend”\r\nAnd after a teary eyed farewell, he entreats you to visit again someday and gives you one last poem \r\n“Hearts grow near when tried together\r\nAt times so dear they link forever\r\nAnd times do come when two must part\r\nOh do not weep, my love linked heart”\r\nAt that he wanders off into the woods at sunset.",
            image: 'images/questions/poetL.jpg',
            answers: [
                {
                    text: "Farewell",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Be still, beating heart",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Beautiful",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 3, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "True",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I love you too",
                    score: {
                        H: 0, S: 0, L: 3, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the poet",
                    score: {
                        H: 0, S: 0, L: 7, P: 0, R: 7, A: 0, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q78",
            text: "The next day at dawn, the yeoman’s men-at-arms, along with the amassed rebels, set out in what is hardly a march, through the woods. You camp in the ruins of the forester’s garrison, who has been imprisoned by the rebels stationed there. He has since agreed to join the rebellion, citing some unsanctioned fire. The forester and his remaining soldiers join your march, and you camp again at the southernmost edge of the forest. The troubadour plays a jig, and you dream that night of dancing with the fairy around the campfire. Or is it a dream? Anyhow, the long walk south continues in the morning, with the first skirmish occurring in the flatlands. Handily defeating the patrol, you increase your travelling speed in response to a letter received from another army of rebels at battle nearby. Seeing the battle on the horizon, the mounted troops move ahead to provide much needed reinforcements. You eventually join the fray, led by your brother. The rebels win the day, bury the dead, and make camp a few miles south. At camp, you are reunited with the rebel leader who applauds your conviction.",
            image: 'images/questions/march.jpg',
            answers: [
                {
                    text: "Not my own countrymen!",
                    score: {
                        H: 0, S: 0, L: 1, P: 1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Freedom or death!",
                    score: {
                        H: 2, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Tend the wounded",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "War is bad",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q79",
            text: "The next day, you make your final march to the outskirts of the royal city. In good morale, the army makes camps and sleeps. When dawn’s rosy fingers shine once more, you awake and find your brother, the yeoman, and the rebel leader all looking concernedly toward the city. Still filing out of the city walls as you look, a massive army floods the horizon. You can taste the fear growing in the still-waking rebel camp. As the sun warms the dew laden plains, the rebels uneasily prepare for battle. A man on horseback trots from the king’s army to the rebel camp, bearing the royal standard. He asks where he might find the rogue. Your brother steps forward. \r\n“The King offers terms. If the rogue gives himself up, all insurgents will receive full pardon, and we may all leave this battlefield in peace and without bloodshed.”\r\nAt this, some of the rebels of less conviction perk their ears.  \r\n“If however, you decide to fight, you will face the royal army at its full strength, and perish either in battle or as punishment for your treason. What answer shall I return to the king?”\r\nThe gathering rebel army stirs as if waiting for the answer themselves.\r\nWhat would you do if you were your brother?",
            image: 'images/questions/montjoy.jpg',
            answers: [
                {
                    text: "I would fight, it is destiny",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Give myself up, I cannot live with the bloodshed on my hands",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Run, live to fight another day",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Rally the troops",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 1, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q80",
            text: "\r\n“Return this answer to the king: We will fight. If the king wishes to spare bloodshed then he should be the one to surrender. Better yet, he should never have waged war on the peoples of the wildlands. He should never have usurped the crown.”\r\nThe rogue turns to his army\r\n“Yes, as many of you already suspect, I am the rightful heir to the throne, cast out from my youth by the usurper. And I plan to return justice to the throne. But that is not why I ask you to fight with me. Not for my sake, but for the people of the wildlands, for the people of the kingdom, and to put an end to the warmongering and power hungry rule of the usurper. We may come from all over, but we are brothers in our way of life, in our spirit, in what we fight for and what we die for. So brothers, fight with me. Do not think this battle is a lost cause, for it is true what the people of the wildlands say: When you are most alone, you may yet find a friend. For behold, at this very hour I see people of the north marching to our aid! And to the east, are those not royal knights arrayed against our enemy? Indeed, brothers, when most needed, we find our friends! To battle!”\r\nThe rebels erupt in cheering. You look to the north and see many warriors marching, led by the chieftain of the northern village. And to the east there are knights and soldiers led by an armored man who must be a liege lord rebelling against his king. The mood in the rebel camp is reversed as the odds of war turn in your favour.",
            image: 'images/questions/henry.jpg',
            answers: [
                {
                    text: "*War cry*",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "We are back in business!",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "What a speech, bravo!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I knew he was the rightful heir!",
                    score: {
                        H: 0, S: 0, L: 1, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q81",
            text: "The herald chuckles and says \r\n“I think I have the gist of it, I will return your answer to the king. God be with you”, then he turns his horse and trots back, still bearing the standard.",
            image: 'images/questions/montjoy.jpg',
            answers: [
                {
                    text: "Chill dude",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "He’s too formal, loosen up a bit",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Bye",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the herald",
                    score: {
                        H: 0, S: 7, L: 0, P: 7, R: 0, A: 0, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q82",
            text: "The rebel army arrays itself for battle, with the yeoman’s archers behind, the lord’s army to the left, and the northern warriors to the left. There is a long and quiet standoff. The morning is peaceful, and there is not a cloud in the sky. Finally the king’s army begins its march, and your brother leads the foot soldiers forward to meet them. Drawing within a furlong of each other, loud shouts pierce the air and the armies break into a charge. What do you do?",
            image: 'images/questions/faceoff.jpg',
            answers: [
                {
                    text: "Charge!!!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 3, Honor: 0, Chivalry: 1
                    },
                    followUp: "q82-charge"
                },
                {
                    text: "Stay back, I am not a soldier, I will tend to the wounded",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 3, E: 0, W: 0, D: 0, Courage: 0, Honor: 2, Chivalry: 1
                    },
                    followUp: "q82-medic"
                },
                {
                    text: "Stay with the archers, I am better with a bow than with a sword",
                    score: {
                        H: 0, S: 0, L: 0, P: 2, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q82-archer"
                },
                {
                    text: "Stick with my brother through the battle",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 1, Honor: 1, Chivalry: 2
                    },
                    followUp: "q82-brother"
                },
                {
                    text: "I am not fit for war, I will stay back and watch",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q82-watch"
                }
            ]
        },
        {
            id: "q82-charge",
            text: "You rush forward to meet the king’s soldiers in battle. You collide with thunderous clashes and at once you are thrown into a blur. You barely know who you strike and who strikes at you. In the crowd you see your brother break through their ranks, and the battlefield opens up. An armored knight approaches you, but you roll to escape his sword, and slash behind the knee at the gap in his plating. The knight is forced to his knees but still buffets you from behind. Getting up and fleeing, you run straight into the grapple of another knight. You fight back but are soon forced to the ground, with the knight over you, sword at the ready. Before you meet your demise, an arrow sticks the knight straight through the visor of his helmet, and you are saved. Looking behind you, the yeoman gives you a nod before drawing his bow again. You turn back to the fight to see a knight grappling with a rebel soldier. You aid the rebel by disarming the knight, and your fellow soldier takes the chance to strike, knocking off the helmet of the knight. You freeze in your tracks, as you look the friendly knight in the face once again after all. You are only frozen for a second as he falls to the ground bleeding, your fellow soldier advances with the army, but you take the chance to drag the knight, heavy with his armor, to a safe spot. The yeoman fights off any remaining enemy soldiers to help you, but one straggler sneaks up behind him and stabs him, you ward the attacker off, but are now left with two injured friends in desperate need of medical attention.",
            image: 'images/questions/charge.webp',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Turnikit, pressure, I’ll do what I can",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "*starts crying*",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Surely there is a medic around",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I must return to battle",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q82-medic",
            text: "As the armies clash, you rush into the conflict, pulling disabled men back to safety and helping stop would-be fatal wounds. You see your brother break through the ranks, opening up the battlefield. In tending one injured man, an enemy knight approaches you ready to strike. Before you meet your demise, an arrow sticks the knight straight through the visor of his helmet, and you are saved. Looking behind you, the yeoman gives you a nod before drawing his bow again. Suddenly you see the yellow glow leaping across the battlefield, you realize it is the fairy, and following her, you find she has led you to the body of a downed enemy knight. She removes his helmet to reveal the friendly knight, wounded, but alive after all. She runs off to help some other victim. You slowly drag the knight, heavy with his armor, to a safe spot. The yeoman fights off any remaining enemy soldiers to help you, but one straggler sneaks up behind him and stabs him, you ward the attacker off, but are now left with two injured friends in desperate need of medical attention.",
            image: 'images/questions/medic.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Turnikit, pressure, I’ll do what I can",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 1
                    }
                },
                {
                    text: "*starts crying*",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Surely there is a medic around. Oh wait that’s me",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I must return to battle",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q82-archer",
            text: "You are equipped with a bow, and your aim is true. You and the yeoman’s archers control the battlefield, and you see your brother break through the enemy ranks, opening the battlefield. The archers begin their march, led by the yeoman, but alas, a company of flanking soldiers surprise your ranks. The yeoman makes his mark on two men who were rushing you with weapons drawn, saving you from certain death. Looking behind you, the yeoman gives you a nod before drawing his bow again. Some mounted warriors from the northern village help deal with the rest of the soldiers. But mounted enemy knights soon charge to meet them. In a valiant clash, the war horses mingle as their riders go blow to blow against each other. One valiant knight dismounts many a warrior, but the chieftain spurs his horse to meet him, and dismounts the brave knight, his helmet flying in the air as he lands. You freeze in your tracks, as you look upon the face of the friendly knight once again after all. You are only frozen for a second as more fighting draws near, so you rush to drag the knight, heavy with his armor, to a safe spot. The yeoman fights off enemies to help you, but one flanking soldier sneaks up behind him and stabs him, you ward the attacker off, but are now left with two injured friends in desperate need of medical attention.",
            image: 'images/questions/archers.jpg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Turnikit, pressure, I’ll do what I can",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 1
                    }
                },
                {
                    text: "*starts crying*",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Surely there is a medic around",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I must return to battle",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q82-brother",
            text: "You rush forward to meet the king’s soldiers in battle, side by side with your brother. The armies collide with thunderous clashes and at once you are thrown into a blur. You barely know who you strike and who strikes at you. Eventually, your brother breaks through their ranks, and the battlefield opens up. An armored knight approaches you, but you roll to escape his sword, and slash behind the knee at the gap in his plating. The knight is forced to his knees but still buffets you from behind. Getting up and fleeing, you run straight into the grapple of another knight. You fight back but are soon forced to the ground, with the knight over you, sword at the ready. Before you meet your demise, an arrow sticks the knight straight through the visor of his helmet, and you are saved. Looking behind you, the yeoman gives you a nod before drawing his bow again. You turn back to the fight to see a knight grappling with a rebel soldier. You aid the rebel by disarming the knight, and your fellow soldier takes the chance to strike, knocking off the helmet of the knight. You freeze in your tracks, as you look the friendly knight in the face once again after all. You are only frozen for a second as he falls to the ground bleeding, your fellow soldier advances with your brother, but you take the chance to drag the knight, heavy with his armor, to a safe spot. The yeoman fights off any remaining enemy soldiers to help you, but one straggler sneaks up behind him and stabs him, you ward the attacker off, but are now left with two injured friends in desperate need of medical attention.",
            image: 'images/questions/cruel.avif',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Turnikit, pressure, I’ll do what I can",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 1
                    }
                },
                {
                    text: "*starts crying*",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Surely there is a medic around",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I must return to battle",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q82-watch",
            text: "Wow, boring. Ok you watch the battle. The armies collide with thunderous clashes. The yeoman’s archers provide invaluable support as your brother breaks through the enemy ranks, opening up the battlefield. As they advance, mounted cavalry charge into the field. In a valiant clash, the war horses mingle as their riders go blow to blow against each other. One valiant knight dismounts many a warrior, but the chieftain spurs his horse to meet him, and dismounts the brave knight, his helmet flying in the air as he lands. You freeze as you realize it is the friendly knight. Spurned by a fierce movement in your heart, you rush into the field to his side. He is out cold, but alive. You drag the knight, heavy with his armor, to a safe spot. Defended by the shooting of the yeoman, who makes his mark on two soldiers rushing toward you. Looking back, the yeoman nods to you and draws his bow again, but as he prepares to shoot, a straggling soldier stabs him in the back. You finally draw your sword to ward the attacker off, and despite being successful, you are now left alone with two injured friends in desperate need of medical attention.",
            image: 'images/questions/watch.webp',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Turnikit, pressure, I’ll do what I can",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 1
                    }
                },
                {
                    text: "*starts crying*",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Surely there is a medic around",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I must join the battle",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 1, Honor: 1, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q83",
            text: "You do what you can, until the chieftain rides over to you\r\n“The day is ours! Here, help the yeoman onto my horse, I hear the king’s best physician is on the field”\r\nYou beg him to help bring the knight as well\r\n“Alright, {child}, if this man is worth saving”\r\nAnd he calls two other riders over to help\r\nThey bring the two wounded men and yourself to the enemy camp, at this time already overrun by rebels. You barely notice the prisoners being rounded up, or the rest of the rebel army marching onwards to the city.\r\nThe rebel leader pauses his orchestration of the prisoner round up to greet you when you dismount.\r\n“The day is ours! Is that the yeoman? Bring him quickly to the physician”\r\nYou plead he see the knight as well, and the rebel leader agrees and helps you and the warriors carry them to the infirmary tent. As there are surprisingly few casualties for such a battle, the physician is immediately able to see them.\r\n“Their injuries are grave… thank you for bringing these men in, and just in time for we may still be able to save then”",
            image: 'images/questions/cheiftain2.jpg',
            answers: [
                {
                    text: "\r\n“Do what you do best, doc”",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "\r\n“What can I do? Give me an occupation or I shall run mad”",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 1
                    }
                },
                {
                    text: "\r\n“It’s in the Lord’s hands”",
                    score: {
                        H: 0, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q84",
            text: "The physician gets to work, tenderly dressing wounds, carefully stopping blood, coolly remedying injuries, and reviving both the yeoman and the knight. Each patient shares their high gratitude to the physician and to you, his sometimes helper. The knight is bewildered at the difference between the current circumstances and those of your last meeting, but is greatly pleased to see you well. His sense of duty also compels him to submit to being taken prisoner, to which you laugh. The rebel leader interrupts the appointment to mention that your brother must have reached the city by now, and that he will be expected, and so will you. So you take your leave, thanking the physician again. He responds \r\n“it is my honor and my life’s work to care for the sick and dying” before going back to caring for the other wounded soldiers.",
            image: 'images/questions/doctor.jpg',
            answers: [
                {
                    text: "The knight is alive!",
                    score: {
                        H: 0, S: 0, L: 1, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The yeoman is alive!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The chieftain is awesome",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "The rebel is awesome",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the physician",
                    score: {
                        H: 0, S: 0, L: 7, P: 0, R: 0, A: 7, E: 0, W: 7, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q85",
            text: "The rebel leader leads you into the city, people line the streets. Some cower in fear of the rebels, but many cheer the victors as they pass through the streets. You pass the market street and give a nod to the artisan and the blacksmith, who go back to their work as if nothing happened. As you approach the royal palace, the scholar and philosopher look on from a window in the university, shouting political maxims. Your brother and some soldiers stand in the courtyard, in a standoff with the royal guards at the palace gate. He pleads with them to surrender, but they do not budge, though they give the impression of wavering. Finally, a nobleman on horseback rides down the streets and gives a sign to the guards, who upon the realization of the shift in power, give up their positions and open the gate. You realize this nobleman is not only the lord who fought with his knights on the side of the rebels, but also the same gentlemen who you met in the royal palace all those weeks ago. His lady now greets you as you enter the gate with your brother.",
            image: 'images/questions/city.webp',
            answers: [
                {
                    text: "They were right when they said I would find a friend",
                    score: {
                        H: 0, S: 1, L: 0, P: 1, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Now let’s depose the usurper!",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the gentleman",
                    score: {
                        H: 0, S: 3, L: 0, P: 2, R: 0, A: 1, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "I am the lady",
                    score: {
                        H: 0, S: 3, L: 0, P: 1, R: 0, A: 1, E: 0, W: 0, D: 1, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q86",
            text: "Your brother leads you down the halls of the royal palace, thinking at each turn as if recalling his childhood home. You are still astonished that the true king grew up in your family, without anyone knowing. At the doors of the throne room, the final two guards have one look at the two of you before dropping their spears and bolting. He swings the two large wooden doors open as if they were the barn stalls, and walks to the throne. The two kings face each other, and for a moment there is silence. \r\n“I have come to claim the throne”\r\n“So it would seem”\r\n“Your armies have surrendered, if you come easily your life will be spared”\r\n“No… no!”\r\nThe king springs from the throne, pulling a dagger from his cloak and leaping at your brother.",
            image: 'images/questions/throne.jpg',
            answers: [
                {
                    text: "I saw this coming, I step in to defend my brother",
                    score: {
                        H: 1, S: 0, L: 0, P: 1, R: 0, A: 1, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q86-a"
                },
                {
                    text: "I did not see this coming, I was processing all that is happening",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q86-b"
                },
                {
                    text: "I sneakily trip the king as he charges my brother",
                    score: {
                        H: 0, S: 1, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    },
                    followUp: "q86-c"
                },
                {
                    text: "I’ll let my brother deal with this, it’s only right",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 1, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 1, Chivalry: 0
                    },
                    followUp: "q86-b"
                }
            ]
        },
        {
            id: "q86-a",
            text: "Having expected this, you are quick to defend your brother, and the two of you rip the dagger from his hands and throw him to the ground. He whimpers and scurries away, but is caught at the door by the gentleman, who takes the crown from his head and hands him over to his men to be taken to prison. Your brother is crowned king outside of the palace in the presence of his army and the people. The kingdom and wildlands alike are restored to peace.",
            image: 'images/questions/crowning.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Huzzah!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Peace at last",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Time for a huge feast",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Phew now that that’s done I should get back to my land",
                    score: {
                        H: 0, S: 0, L: 1, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Good job everyone!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Woop!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q86-b",
            text: "Your brother easily defends himself from the attack, grabbing the king’s arm and ripping the dagger from his hands. He throws the king to the ground. The dethroned king whimpers and scurries away, but is caught at the door by the gentleman, who takes the crown from his head and hands him over to his men to be taken to prison. Your brother is crowned king outside of the palace in the presence of his army and the people. The kingdom and wildlands alike are restored to peace.",
            image: 'images/questions/crowning.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Huzzah!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Peace at last",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Time for a huge feast",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Phew now that that’s done I should get back to my land",
                    score: {
                        H: 0, S: 0, L: 1, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Good job everyone!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Woop!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q86-c",
            text: "Having expected this, you trip the king as he rushes your brother. He falls to the ground, and his dagger clatters on the stone floor. He whimpers and scurries away, but is caught at the door by the gentleman, who takes the crown from his head and hands him over to his men to be taken to prison. Your brother is crowned king outside of the palace in the presence of his army and the people. The kingdom and wildlands alike are restored to peace.",
            image: 'images/questions/crowning.jpeg',
            type: 'followup',
            category: 'Follow-up',
            answers: [
                {
                    text: "Huzzah!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 1, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Peace at last",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 2, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Time for a huge feast",
                    score: {
                        H: 0, S: 2, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Phew now that that’s done I should get back to my land",
                    score: {
                        H: 0, S: 0, L: 1, P: 1, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Good job everyone!",
                    score: {
                        H: 0, S: 1, L: 0, P: 0, R: 0, A: 1, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Woop!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 1, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q87",
            text: "The king has returned, and he gives you thanks for your hand in the matter, and offers you a choice. Which path do you take?",
            image: 'images/questions/ending.jpg',
            answers: [
                {
                    text: "Become a royal advisor to your brother to make the kingdom great again",
                    score: {
                        H: 0, S: 0, L: 0, P: 3, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Accept the office of royal steward and uphold peace and justice",
                    score: {
                        H: 2, S: 0, L: 0, P: 0, R: 0, A: 2, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Travel back to the wildlands and make a life among my new friends",
                    score: {
                        H: 0, S: 3, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Build a rustic cabin out in the scenic wildlands",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 3, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "There is a particular person from my journeys I would like to go find",
                    score: {
                        H: 0, S: 0, L: 3, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Become an explorer and traverse beyond the northern mountains",
                    score: {
                        H: 1, S: 0, L: 0, P: 0, R: 0, A: 0, E: 2, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Return to my cottage and the quiet life of a serf",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 3, Courage: 0, Honor: 0, Chivalry: 0
                    }
                },
                {
                    text: "Never can tell. A little here a little there, for now I’ll go back to my cottage and rest",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 3, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        },
        {
            id: "q88",
            text: "And they all lived happily ever after, or at least until the following Tuesday\r\nAs for you, dear reader, an archetype has been chosen for you based on your decisions on the adventure",
            image: 'images/questions/cottage.jpg',
            answers: [
                {
                    text: "Reveal my Archetype!",
                    score: {
                        H: 0, S: 0, L: 0, P: 0, R: 0, A: 0, E: 0, W: 0, D: 0, Courage: 0, Honor: 0, Chivalry: 0
                    }
                }
            ]
        }
    ];

    if (restored == false) {
        startTest();
    }
}