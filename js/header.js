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

    Courage: {
        name: "Courage",
        category: "Other Traits"
    },

    Chivalry: {
        name: "Chivalry",
        category: "Other Traits"
    },

    Honor: {
        name: "Honor",
        category: "Other Traits"
    },

};