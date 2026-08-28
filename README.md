## Project Structure

archetype-test/
│
├── index.html
├── styles.css
├── script.js
│
└── images/
    ├── question-01.jpg
    ├── question-02.jpg
    ├── question-03.jpg
    │
    ├── LPE.jpg
    ├── LPW.jpg
    ├── LPD.jpg
    ├── LRE.jpg
    ├── LRW.jpg
    ├── LRD.jpg
    ├── LAE.jpg
    ├── LAW.jpg
    ├── LAD.jpg
    │
    ├── SPE.jpg
    ├── SPW.jpg
    └── ...


## Quesations
```
{
    id: "q8",

    category: "Relationships",

    text:
        "When you disagree with someone important to you, what do you do?",

    image: null,

    answers: [

        {
            text: "Try to understand why they feel the way they do.",

            score: {
                L: 2,
                A: 2,
                Empathy: 3
            }
        },

        {
            text: "Focus on finding the objectively best solution.",

            score: {
                S: 2,
                P: 3,
                Discipline: 1
            }
        },

        {
            text: "Stand up for what I believe is right.",

            score: {
                H: 3,
                Courage: 3
            }
        }

    ]
}
```

## Follow Ups
```
{
    id: "q20",

    text: "Your friend asks you for advice. What do you do?",

    answers: [

        {
            text: "Tell them what I honestly think.",

            score: {
                S: 2,
                Courage: 2
            },

            followUp: "q20-honest"
        },

        {
            text: "Ask them what they really want first.",

            score: {
                L: 2,
                Empathy: 3
            },

            followUp: "q20-empathy"
        }

    ]
}
```

```
{
    id: "q20-honest",

    type: "followup",

    category: "Follow-up",

    text:
        "If your honest advice upsets them, what do you do?",

    answers: [

        {
            text: "Stick to my position.",

            score: {
                H: 2,
                Courage: 2
            }
        },

        {
            text: "Try to explain myself differently.",

            score: {
                L: 1,
                Empathy: 2
            }
        }

    ]
}
```


## Adding an independent trait
Suppose you want to measure Leadership, but you don't want Leadership to affect the 27 archetypes.
Add it here:
Leadership: {
    name: "Leadership",
    category: "Other Traits"
}
Then give answers Leadership points:
score: {
    H: 2,
    Leadership: 3
}
It will automatically appear in the Other Traits results.
You could consequently have a result like:
Archetype: HRW

Courage:       87
Empathy:       72
Curiosity:     91
Independence:  84
Creativity:    76
Leadership:    93
without Leadership influencing whether the person is H, L, S, etc.