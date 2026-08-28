const saveResultsButton =
    document.getElementById("saveResultsButton");

const saveResultsModal =
    document.getElementById("saveResultsModal");

const closeSaveModal =
    document.getElementById("closeSaveModal");

const modalBackdrop =
    saveResultsModal?.querySelector(".modal-backdrop");


function openSaveResultsModal() {
    saveResultsModal.classList.add("open");
}


function closeSaveResultsModal() {
    saveResultsModal.classList.remove("open");
}


if (saveResultsButton) {
    saveResultsButton.addEventListener(
        "click",
        openSaveResultsModal
    );
}


if (closeSaveModal) {
    closeSaveModal.addEventListener(
        "click",
        closeSaveResultsModal
    );
}


if (modalBackdrop) {
    modalBackdrop.addEventListener(
        "click",
        closeSaveResultsModal
    );
}

function downloadResultsHTML() {

    const resultCode = document.getElementById("archetypeCode")?.textContent || "";

    const FullHTML = document.getElementById("resultsScreen")?.getHTML() || "";

    const html = `
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

<title>
    My Archetype - ${resultCode}
</title>

<style>

body {
    margin: 0;
    padding: 60px 25px;

    background: #f5f3ef;
    color: #242424;

    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
}

.result {
    max-width: 800px;
    margin: auto;

    text-align: center;
}

.primary-button {
    display: none;
}

.code {
    font-size: 100px;
    font-weight: 900;

    color: #7b5cff;
}

h1 {
    font-size: 42px;
}

.description {
    color: #777;
    line-height: 1.8;
}

.results-header {
    text-align: center;
}

.results-eyebrow {
    margin:
        0 0 10px;

    color:
        var(--accent);

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 3px;
}

.archetype-code {
    font-size:
        clamp(65px, 12vw, 120px);

    font-weight: 900;

    letter-spacing: -8px;

    background:
        linear-gradient(
            135deg,
            var(--accent),
            #b29eff
        );

    -webkit-background-clip: text;

    background-clip: text;

    color: transparent;
}

.results-header h1 {
    margin: 0;

    color:
        var(--text);

    font-size:
        clamp(32px, 6vw, 60px);

    letter-spacing: -2px;
}

.archetype-description {
    max-width: 700px;

    margin:
        20px auto;

    color:
        var(--text-secondary);

    font-size: 17px;

    line-height: 1.8;
}

.archetype-image-wrapper {
    max-width: 650px;

    margin:
        40px auto 70px;

    border-radius: 25px;

    overflow: hidden;

    box-shadow:
        var(--shadow);

    background:
        var(--surface);
}

.archetype-image-wrapper img {
    display: block;

    width: 100%;

    max-height: 450px;

    object-fit: cover;
}

.results-section {
    margin-bottom: 65px;
}

.results-section h2 {
    margin-bottom: 8px;

    color:
        var(--text);

    font-size: 30px;

    letter-spacing: -1px;
}

.section-description {
    margin:
        0 0 30px;

    color:
        var(--text-secondary);
}

.dimension-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 18px;
}

.dimension-card {
    padding: 25px;

    border:
        1px solid var(--border);

    border-radius: 20px;

    background:
        var(--surface);

    box-shadow:
        0 10px 30px
        rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] .dimension-card {
    box-shadow:
        0 10px 30px
        rgba(0, 0, 0, 0.15);
}

.dimension-label {
    display: block;

    margin-bottom: 10px;

    color:
        var(--text-muted);

    font-size: 12px;

    text-transform: uppercase;

    letter-spacing: 1px;
}

.dimension-card strong {
    display: block;

    margin-bottom: 20px;

    color:
        var(--text);

    font-size: 20px;
}

.score-bar-row {
    margin-bottom: 14px;
}

.score-bar-label {
    display: flex;

    justify-content: space-between;

    margin-bottom: 5px;

    color:
        var(--text);

    font-size: 12px;
}

.score-bar-label span:last-child {
    color:
        var(--text-muted);
}

.score-track {
    height: 8px;

    border-radius: 999px;

    background:
        var(--surface-alt);

    overflow: hidden;
}

.score-fill {
    height: 100%;

    border-radius: inherit;

    background:
        var(--accent);

    transition:
        width 0.7s ease;
}

.trait-charts {
    display: flex;
    flex-direction: column;

    gap: 14px;
}

.trait-card {
    padding:
        20px 24px;

    border:
        1px solid var(--border);

    border-radius: 16px;

    background:
        var(--surface);

    box-shadow:
        0 8px 25px
        rgba(0, 0, 0, 0.04);
}

[data-theme="dark"] .trait-card {
    box-shadow:
        0 8px 25px
        rgba(0, 0, 0, 0.14);
}

.trait-card-header {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 10px;
}

.trait-name {
    color:
        var(--text);

    font-size: 14px;

    font-weight: 700;
}

.trait-score {
    color:
        var(--accent);

    font-size: 14px;

    font-weight: 800;
}

.trait-card .score-track {
    height: 9px;
}

.all-scores {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 12px;
}

.score-summary {
    padding: 15px;

    border:
        1px solid var(--border);

    border-radius: 14px;

    background:
        var(--surface);
}

.score-summary-name {
    margin-bottom: 5px;

    color:
        var(--text-muted);

    font-size: 13px;
}

.score-summary-value {
    color:
        var(--text);

    font-size: 22px;

    font-weight: 800;
}

@media (max-width: 900px) {

    .sidebar {
        width: 220px;
    }

    .main-content {
        margin-left: 220px;

        padding:
            35px 25px;
    }

    .dimension-grid {
        grid-template-columns: 1fr;
    }

    .archetype-groups {
        grid-template-columns: 1fr;
    }
}


@media (max-width: 700px) {

    .sidebar {
        position: relative;

        width: 100%;

        height: auto;

        min-height: auto;

        padding:
            20px;

        border-right: none;

        border-bottom:
            1px solid var(--border);
    }

    .app {
        flex-direction: column;
    }

    .brand {
        padding-bottom: 20px;
    }

    .navigation {
        flex-direction: row;

        overflow-x: auto;
    }

    .nav-item {
        flex-shrink: 0;

        width: auto;
    }

    .sidebar-bottom {
        margin-top: 20px;
    }

    .main-content {
        margin-left: 0;

        padding:
            20px 15px;
    }

    .page-container {
        padding:
            30px 10px;
    }

    .page-header {
        margin-bottom: 35px;
    }

    .page-header h2,
    .welcome-container h2 {
        font-size:
            clamp(38px, 11vw, 55px);
    }

    .related-archetypes {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .category-preview {
        grid-template-columns: 1fr;
    }

    .start-card {
        padding:
            45px 25px;
    }

    .archetype-preview {
        flex-wrap: wrap;

        justify-content: center;
    }

    .question-card {
        padding:
            30px 22px;
    }

    .question-container {
        padding:
            30px 10px 60px;
    }

    .dimension-grid {
        grid-template-columns: 1fr;
    }

    .trait-charts {
        grid-template-columns: 1fr;
    }

    .all-scores {
        grid-template-columns:
            repeat(2, 1fr);
    }

    #resultsScreen {
        padding-left: 15px;

        padding-right: 15px;
    }
}


@media (max-width: 450px) {

    .all-scores {
        grid-template-columns: 1fr;
    }

    .related-archetypes {
        grid-template-columns: 1fr;
    }

    .dimension-header {
        padding:
            20px;
    }

    .dimension-content {
        padding:
            0 20px 20px;
    }

    .factor-content {
        padding-left: 10px;
    }

    .primary-button {
        width: 100%;
    }
}

</style>

</head>

<body>

${FullHTML}

</body>

</html>
`;

    const blob =
        new Blob(
            [html],
            { type: "text/html" }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        `27Archetypes-${resultCode}.html`;

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);
}


function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function downloadResultsJSON() {

    const jsonString = JSON.stringify(state, null, 2);
    
    const blob = new Blob([jsonString], { type: 'application/json' });
    
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = "27Archetypes-Scores.json"; 
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}