// Kinukuha ang form
const loginForm = document.getElementById("login-form");

// Kinukuha ang email input
const email = document.getElementById("email");

// Kinukuha ang password input
const password = document.getElementById("password");


// Kinukuha ang error message elements
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");


// Nakikinig kung may mag-submit ng form
loginForm.addEventListener("submit", function(event) {

    // Pinipigilan ang default behavior ng form
    event.preventDefault();


    // Tinatanggal muna ang previous errors
    emailError.style.display = "none";
    passwordError.style.display = "none";

    emailError.textContent = "";
    passwordError.textContent = "";


    // Sa simula, assume natin na valid ang form
    let isValid = true;


    // CHECK EMAIL
    if (email.value.trim() === "") {

        emailError.textContent = "Email is required.";

        emailError.style.display = "block";

        isValid = false;
    }


    // CHECK PASSWORD
    if (password.value.trim() === "") {

        passwordError.textContent = "Password is required.";

        passwordError.style.display = "block";

        isValid = false;
    }

    // Check kung less than 6 characters
    else if (password.value.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters.";

        passwordError.style.display = "block";

        isValid = false;
    }


    // Kapag walang validation error
    if (isValid) {

        alert("Login successful!");

        // Nililinis ang form
        loginForm.reset();
    }

});

