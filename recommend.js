document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("collegeForm");
    const errorGpa = document.getElementById("errorGpa");
    const errorScore = document.getElementById("errorScore");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const gpa = parseFloat(document.getElementById("gpa").value);
        const scoreType = document.getElementById("scoreType").value;
        const score = parseInt(document.getElementById("score").value);
        const cost = parseFloat(document.getElementById("cost").value);

        // Validate GPA (should be between 0 and 4)
        if (gpa < 0 || gpa > 4 || isNaN(gpa)) {
            errorGpa.textContent = "Invalid GPA. Please enter a GPA between 0 and 4.";
            return;
        } else {
            errorGpa.textContent = "";
        }

        // Validate SAT score (should be between 0 and 1600)
        // Validate ACT score (should be between 0 and 36)
        if ((scoreType === "SAT" && (score < 0 || score > 1600)) ||
            (scoreType === "ACT" && (score < 0 || score > 36)) ||
            isNaN(score)) {
            errorScore.textContent = "Invalid score. Please enter a valid score.";
            return;
        } else {
            errorScore.textContent = "";
        }

        // You can proceed with saving the data or other actions if it's valid
        const userData = {
            gpa: gpa,
            scoreType: scoreType,
            score: score,
            cost: cost,
        };

        localStorage.setItem("userData", JSON.stringify(userData));

        // Optionally, you can send this data to a server for further processing
        console.log("User Data Saved:", userData);
    });

    // Prepopulate the form fields if data is saved in localStorage
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
        const userData = JSON.parse(savedUserData);
        document.getElementById("gpa").value = userData.gpa;
        document.getElementById("scoreType").value = userData.scoreType;
        document.getElementById("score").value = userData.score;
        document.getElementById("cost").value = userData.cost;
    }
});
