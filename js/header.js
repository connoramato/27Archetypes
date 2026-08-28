/* =========================================================
   2. SCORE DEFINITIONS
========================================================= */

/*
    Every score is stored independently.

    This means you can have:

        Lover
        Soldier
        Hero

    AND:

        Courage
        Empathy
        Curiosity
        Independence

    etc.

    without the two systems interfering with one another.
*/

/* =========================================================
   SCORE DICTIONARY
========================================================= */

const scoreDefinitions = {

    /* =====================================================
       RELATIONSHIPS
    ===================================================== */

    L: {
        name: "Lover",
        category: "Relationships"
    },

    S: {
        name: "Soldier",
        category: "Relationships"
    },

    H: {
        name: "Hero",
        category: "Relationships"
    },


    /* =====================================================
       IDEALS
    ===================================================== */

    P: {
        name: "Pragmatist",
        category: "Ideals"
    },

    R: {
        name: "Romantic",
        category: "Ideals"
    },

    A: {
        name: "Altruist",
        category: "Ideals"
    },


    /* =====================================================
       BEHAVIORS
    ===================================================== */

    E: {
        name: "Explorer",
        category: "Behaviors"
    },

    W: {
        name: "Wayfarer",
        category: "Behaviors"
    },

    D: {
        name: "Dreamer",
        category: "Behaviors"
    },


    /* =====================================================
       ADDITIONAL TRAITS
    ===================================================== */

    Extroversion: {
        name: "Extroversion",
        category: "Other Traits"
    },

    Idealism: {
        name: "Idealism",
        category: "Other Traits"
    },

    Inertia: {
        name: "Inertia",
        category: "Other Traits"
    },

    Obedience: {
        name: "Obedience",
        category: "Other Traits"
    },

    Dutifulness: {
        name: "Dutifulness",
        category: "Other Traits"
    },

    Openness: {
        name: "Openness",
        category: "Other Traits"
    },

    Independence: {
        name: "Independence",
        category: "Other Traits"
    },

    Neuroticism: {
        name: "Neuroticism",
        category: "Other Traits"
    },

    Improvisation: {
        name: "Improvisation",
        category: "Other Traits"
    },

    Optimism: {
        name: "Optimism",
        category: "Other Traits"
    },

    Innovation: {
        name: "Innovation",
        category: "Other Traits"
    },

    Artfulness: {
        name: "Artfulness",
        category: "Other Traits"
    },

    ProblemSolving: {
        name: "Problem Solving",
        category: "Other Traits"
    },

    Empathy: {
        name: "Empathy",
        category: "Other Traits"
    },

    Peace: {
        name: "Peace",
        category: "Other Traits"
    },

    Awareness: {
        name: "Awareness",
        category: "Other Traits"
    },

    Ambition: {
        name: "Ambition",
        category: "Other Traits"
    },

    Orderliness: {
        name: "Orderliness",
        category: "Other Traits"
    },

    Courage: {
        name: "Courage",
        category: "Other Traits"
    }

};