let pointsBalance = 0;

// Initialize the dashboard with stored balance and show the login reward popup
function initializeDashboard() {
    // Retrieve stored points balance from localStorage
    const storedBalance = localStorage.getItem("pointsBalance");
    pointsBalance = storedBalance ? parseInt(storedBalance) : 0;

    // Update the displayed points balance
    document.getElementById("points-balance").innerText = pointsBalance;

    // Display login reward popup if it's the first login of the day
    if (!localStorage.getItem("loginRewardClaimed")) {
        document.getElementById("login-reward-popup").style.display = "block";
    }
}

// Function to complete a task and update the points balance immediately
function completeTask(points) {
    //Add task reward points to balance
    const taskRewardPoints = 2000
    pointsBalance += points;
    updateBalance(); // Immediately update the balance on the dashboard
}

// Function to claim login reward
function claimLoginReward() {
    // Add login reward points to balance
    const loginRewardPoints = 3000;
    pointsBalance += loginRewardPoints;

    // Update and save the balance
    updateBalance();

    // Hide the popup and mark reward as claimed
    document.getElementById("login-reward-popup").style.display = "none";
    localStorage.setItem("loginRewardClaimed", "true");
}

// Function to copy the app link to clipboard
function copyAppLink() {
    const appLink = document.getElementById("app-link");
    appLink.select();
    appLink.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(appLink.value).then(() => {
        alert("Link copied to clipboard!");
    });
}

// Update the points balance display and save it to localStorage
function updateBalance() {
    document.getElementById("points-balance").innerText = pointsBalance;
    localStorage.setItem("pointsBalance", pointsBalance);
}
