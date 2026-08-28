/* =========================================================
   13. FIND STRONGEST SCORE
========================================================= */

function getHighestScore(keys) {

    let highestKey = keys[0];

    keys.forEach(key => {

        if (
            state.scores[key] >
            state.scores[highestKey]
        ) {
            highestKey = key;
        }

    });

    return highestKey;

}


/* =========================================================
   14. CALCULATE ARCHETYPE
========================================================= */

function calculateResults() {

    const relationship =
        getHighestScore([
            "L",
            "S",
            "H"
        ]);

    const ideal =
        getHighestScore([
            "P",
            "R",
            "A"
        ]);

    const behavior =
        getHighestScore([
            "E",
            "W",
            "D"
        ]);


    /*
        Example:

            L + P + D

        becomes:

            LPD
    */

    const archetypeCode =
        relationship +
        ideal +
        behavior;


    const archetype =
        archetypes[archetypeCode];


    renderArchetype(
        archetypeCode,
        archetype
    );


    renderDimensionResults();

    renderTraitResults();

    renderAllScores();

}


/* =========================================================
   15. RENDER ARCHETYPE
========================================================= */

function renderArchetype(
    code,
    archetype
) {

    document.getElementById(
        "archetypeCode"
    ).textContent = code;


    document.getElementById(
        "archetypeName"
    ).textContent =
        archetype
            ? archetype.name
            : "Your Unique Archetype";


    document.getElementById(
        "archetypeDescription"
    ).textContent =
        archetype
            ? archetype.description
            : "Your personality contains a unique combination of traits.";


    const image =
        document.getElementById(
            "archetypeImage"
        );


    if (archetype && archetype.image) {

        image.src =
            archetype.image;

        image.alt =
            archetype.name;

    } else {

        image.style.display = "none";

    }

}


/* =========================================================
   16. DIMENSION RESULTS
========================================================= */

function renderDimensionResults() {

    const relationship =
        getHighestScore([
            "L",
            "S",
            "H"
        ]);

    const ideal =
        getHighestScore([
            "P",
            "R",
            "A"
        ]);

    const behavior =
        getHighestScore([
            "E",
            "W",
            "D"
        ]);


    document.getElementById(
        "relationshipResult"
    ).textContent =
        scoreDefinitions[
            relationship
        ].name;


    document.getElementById(
        "idealResult"
    ).textContent =
        scoreDefinitions[
            ideal
        ].name;


    document.getElementById(
        "behaviorResult"
    ).textContent =
        scoreDefinitions[
            behavior
        ].name;


    createScoreBars(
        "relationshipBars",
        ["L", "S", "H"]
    );


    createScoreBars(
        "idealBars",
        ["P", "R", "A"]
    );


    createScoreBars(
        "behaviorBars",
        ["E", "W", "D"]
    );

}


/* =========================================================
   17. CREATE SCORE BARS
========================================================= */

function createScoreBars(
    containerId,
    keys
) {

    const container =
        document.getElementById(
            containerId
        );

    container.innerHTML = "";


    /*
        Calculate maximum so the largest
        score fills the bar.
    */

    const maxScore =
        Math.max(
            ...keys.map(
                key => state.scores[key]
            ),
            1
        );


    keys.forEach(key => {

        const row =
            document.createElement("div");

        row.className =
            "score-bar-row";


        const label =
            document.createElement("div");

        label.className =
            "score-bar-label";


        const name =
            document.createElement("span");

        name.textContent =
            scoreDefinitions[key].name;


        const value =
            document.createElement("span");

        value.textContent =
            state.scores[key];


        label.appendChild(name);
        label.appendChild(value);


        const track =
            document.createElement("div");

        track.className =
            "score-track";


        const fill =
            document.createElement("div");

        fill.className =
            "score-fill";


        const width =
            (state.scores[key] / maxScore) * 100;


        fill.style.width =
            `${width}%`;


        track.appendChild(fill);

        row.appendChild(label);
        row.appendChild(track);

        container.appendChild(row);

    });

}


/* =========================================================
   18. OTHER TRAITS
========================================================= */

function calculateMaximumScores() {

    const maximums = {};

    Object.keys(scoreDefinitions).forEach(key => {
        maximums[key] = 0;
    });

    questions.forEach(question => {

        question.answers.forEach(answer => {

            if (!answer.score) return;

            Object.entries(answer.score).forEach(
                ([key, points]) => {

                    if (maximums[key] === undefined) {
                        maximums[key] = 0;
                    }

                    /*
                        We use the largest number that a single
                        answer can contribute to this trait for
                        each question.
                    */

                    maximums[key] = Math.max(
                        maximums[key],
                        maximums[key] || 0
                    );

                }
            );

        });

    });

    /*
        The above alone isn't enough because we need to find
        the maximum contribution from EACH question.
    */

    Object.keys(maximums).forEach(key => {
        maximums[key] = 0;
    });


    questions.forEach(question => {

        let questionMaximum = {};

        question.answers.forEach(answer => {

            if (!answer.score) return;

            Object.entries(answer.score).forEach(
                ([key, points]) => {

                    if (
                        questionMaximum[key] === undefined ||
                        points > questionMaximum[key]
                    ) {
                        questionMaximum[key] = points;
                    }

                }
            );

        });

        Object.entries(questionMaximum).forEach(
            ([key, points]) => {

                maximums[key] += points;

            }
        );

    });

    return maximums;
}

function renderTraitResults() {

    const container =
        document.getElementById("traitCharts");

    container.innerHTML = "";


    const traitKeys =
        Object.keys(scoreDefinitions)
            .filter(key =>
                scoreDefinitions[key].category === "Other Traits"
            );


    /*
        Convert each raw score into a percentage.
    */
   maximums = calculateMaximumScores()

    const traits = traitKeys.map(key => {

        const definition =
            scoreDefinitions[key];

        const rawScore =
            state.scores[key] || 0;

        const maxScore =
            maximums[key]*.95 || 1;

        let rawPercentage = Math.round(
                (rawScore / maxScore) * 100
            );
        const percentage =
            rawPercentage > 100 ? 100 : rawPercentage;


        return {
            key,
            name: definition.name,
            rawScore,
            percentage
        };

    });


    /*
        Highest traits first.
    */

    traits.sort(
        (a, b) =>
            b.percentage - a.percentage
    );


    /*
        Generate the HTML.
    */

    traits.forEach(trait => {

        const card =
            document.createElement("div");

        card.className =
            "trait-card";


        const header =
            document.createElement("div");

        header.className =
            "trait-card-header";


        const name =
            document.createElement("span");

        name.className =
            "trait-name";

        name.textContent =
            trait.name;


        const score =
            document.createElement("span");

        score.className =
            "trait-score";

        score.textContent =
            `${trait.percentage}%`;


        header.appendChild(name);
        header.appendChild(score);


        const track =
            document.createElement("div");

        track.className =
            "score-track";


        const fill =
            document.createElement("div");

        fill.className =
            "score-fill";


        fill.style.width =
            `${trait.percentage}%`;


        track.appendChild(fill);


        card.appendChild(header);
        card.appendChild(track);


        container.appendChild(card);

    });

}


/* =========================================================
   19. COMPLETE SCORE BREAKDOWN
========================================================= */

function renderAllScores() {

    const container =
        document.getElementById(
            "allScores"
        );

    container.innerHTML = "";


    Object.entries(scoreDefinitions)
        .forEach(
            ([key, definition]) => {

                const card =
                    document.createElement("div");

                card.className =
                    "score-summary";


                const name =
                    document.createElement("div");

                name.className =
                    "score-summary-name";

                name.textContent =
                    definition.name;


                const value =
                    document.createElement("div");

                value.className =
                    "score-summary-value";

                value.textContent =
                    state.scores[key];


                card.appendChild(name);
                card.appendChild(value);

                container.appendChild(card);

            }
        );

}