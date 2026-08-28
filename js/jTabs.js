const navItems =
    document.querySelectorAll(".nav-item");

const tabContents =
    document.querySelectorAll(".tab-content");


navItems.forEach(item => {

    item.addEventListener("click", () => {

        const tab =
            item.dataset.tab;


        /*
            Don't navigate away from the quiz
            accidentally.
        */

        if (
            typeof state !== "undefined" &&
            state.testStarted &&
            tab !== "begin"
        ) {

            const confirmed =
                confirm(
                    "Leave the test? Your current progress will be lost."
                );

            if (!confirmed) {
                return;
            }

        }


        navItems.forEach(nav =>
            nav.classList.remove("active")
        );


        item.classList.add("active");


        tabContents.forEach(content =>
            content.classList.remove("active")
        );


        const target =
            document.getElementById(
                `${tab}Tab`
            );


        if (target) {
            target.classList.add("active");
        }

    });

});

const themeToggle =
    document.getElementById("themeToggle");

const themeText =
    document.getElementById("themeText");

const themeIcon =
    document.getElementById("themeIcon");


function setTheme(theme) {

    document.documentElement
        .setAttribute(
            "data-theme",
            theme
        );


    const dark =
        theme === "dark";


    themeToggle.checked =
        dark;


    themeText.textContent =
        dark ? "Dark" : "Light";


    themeIcon.textContent =
        dark ? "☾" : "☀";


    localStorage.setItem(
        "personality-theme",
        theme
    );

}


const savedTheme =
    localStorage.getItem(
        "personality-theme"
    );


setTheme(
    savedTheme || "light"
);


themeToggle.addEventListener(
    "change",
    () => {

        setTheme(
            themeToggle.checked
                ? "dark"
                : "light"
        );

    }
);

document.querySelectorAll(".dimension-header")
    .forEach(button => {

        button.addEventListener("click", () => {

            const dimension =
                button.closest(".dimension");

            dimension.classList.toggle("open");

        });

    });


document.querySelectorAll(".factor-header")
    .forEach(button => {

        button.addEventListener("click", () => {

            const factor =
                button.closest(".factor");

            factor.classList.toggle("open");

        });

    });

    function setSidebarTestMode(testing) {

    const navItems =
        document.querySelectorAll(".nav-item");


    navItems.forEach(item => {

        item.disabled = testing;

    });


    document.querySelector(".sidebar")
        .classList.toggle(
            "test-active",
            testing
        );

}

/* =========================================================
   SIDEBAR TOGGLE
========================================================= */

const app = document.querySelector(".app");
const sidebarToggle =
    document.getElementById("sidebarToggle");


if (sidebarToggle) {

    sidebarToggle.addEventListener("click", () => {

        app.classList.toggle("sidebar-collapsed");

        const collapsed =
            app.classList.contains("sidebar-collapsed");

        sidebarToggle.setAttribute(
            "aria-label",
            collapsed
                ? "Expand sidebar"
                : "Collapse sidebar"
        );

        sidebarToggle.setAttribute(
            "title",
            collapsed
                ? "Expand sidebar"
                : "Collapse sidebar"
        );
    });
}
