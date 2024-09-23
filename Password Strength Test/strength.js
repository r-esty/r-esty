const passwordInput = document.getElementById("password");
const strengthMessage = document.getElementById("strengthMessage");
const tipsMessage = document.getElementById("tips");

passwordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    let strengthText = "Password strength: ";
    let strengthClass = "";
    const hasNumbers = /[0-9]/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSpecialChars = /[!\"£$%^&*()_+@:~<>?\\|`.,/[\]{}-]/.test(password);
    let tips = [];

    if (password.length === 0) {
        strengthText += "Not evaluated";
    } else if (password.length < 6 || (!hasNumbers && !hasLetter)) {
        strengthText += "Very weak";
        strengthClass = "veryweak";
        tips.push("Use at least 6 characters ideally more");
        tips.push("Include both letters and numbers");
    } else if (password.length <= 8 && hasNumbers && hasLetter) {
        strengthText += "Weak";
        strengthClass = "weak";
        tips.push("Add special characters for better security");
    } else if (password.length <= 12 && hasLetter && hasNumbers && hasSpecialChars) {
        strengthText += "Good";
        strengthClass = "good";
        tips.push("Try increasing password length to 12 characters or more");
    } else if (password.length > 12 && hasLetter && hasNumbers && hasSpecialChars) {
        strengthText += "Strong";
        strengthClass = "strong";
        tips.push("Your password looks strong; consider using a passphrase or password manager for more complex passwords.");
    } else {
        strengthText += "Weak";
        strengthClass = "weak";
        tips.push("Try to include a mix of letters, numbers, and special characters.");
    }

    strengthMessage.textContent = strengthText;
    strengthMessage.className = strengthClass;
    tipsMessage.textContent = tips.join(" ");
});


    

    



    
    
    

    


    