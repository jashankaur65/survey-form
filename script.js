// Get form element
const form = document.getElementById("surveyForm");

// Listen to submit event
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default submission

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(span => span.textContent = "");

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    }

    // Movie radio validation
    const movieChecked = document.querySelector('input[name="movie"]:checked');
    if (!movieChecked) {
        document.getElementById("movieError").textContent = "Please select a movie genre";
        isValid = false;
    }

    // Hobby checkbox validation
    const hobbyChecked = document.querySelectorAll('input[name="hobby"]:checked');
    if (hobbyChecked.length === 0) {
        document.getElementById("hobbyError").textContent = "Select at least one hobby";
        isValid = false;
    }

    // Country dropdown validation
    const country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").textContent = "Please select your country";
        isValid = false;
    }

    // Username regex validation (letters & numbers)
    const username = document.getElementById("username").value.trim();
    const usernameRegex = /^[A-Za-z0-9]+$/;
    if (!usernameRegex.test(username)) {
        document.getElementById("usernameError").textContent = "Username must be letters and numbers only";
        isValid = false;
    }

    // Age validation
    const age = document.getElementById("age").value.trim();
    if (age === "") {
        document.getElementById("ageError").textContent = "Please enter your age";
        isValid = false;
    }

    // If all valid, submit the form
    if (isValid) {
        form.submit();
    }
});