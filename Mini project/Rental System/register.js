
/*
==========================================
APARTMENT RENTAL SYSTEM
REGISTER JAVASCRIPT
==========================================
*/

// Kunin ang registration form.
const registerForm = document.getElementById("register-form");

// Kunin ang message element.
const registerMessage = document.getElementById("register-message");

// Kunin ang existing customer accounts.
// Kung wala pa, gumawa ng default approved demo account.
function getCustomerAccounts() {
    const savedAccounts = localStorage.getItem("customerAccounts");

    if (savedAccounts !== null) {
        return JSON.parse(savedAccounts);
    }

    // Para gumana pa rin ang existing demo login ni Juan.
    const defaultAccounts = [
        {
            id: 2,
            name: "Juan Cruz",
            email: "juan@gmail.com",
            phone: "",
            password: "juan123",
            role: "customer",
            status: "Approved"
        }
    ];

    localStorage.setItem(
        "customerAccounts",
        JSON.stringify(defaultAccounts)
    );

    return defaultAccounts;
}

// Kapag nag-submit ng registration form.
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Kunin ang values sa form.
    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim().toLowerCase();
    const phone = document.getElementById("register-phone").value.trim();
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Siguraduhing magkapareho ang passwords.
    if (password !== confirmPassword) {
        registerMessage.textContent = "Passwords do not match.";
        registerMessage.style.color = "#dc2626";
        return;
    }

    // Kunin ang accounts na na-save na.
    const customerAccounts = getCustomerAccounts();

    // Huwag payagang ma-register ang parehong email.
    const emailExists = customerAccounts.some(function(account) {
        return account.email.toLowerCase() === email;
    });

    if (emailExists) {
        registerMessage.textContent = "This email is already registered.";
        registerMessage.style.color = "#dc2626";
        return;
    }

    // Gumawa ng bagong account.
    const newAccount = {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: "customer",
        status: "Pending"
    };

    // Idagdag sa listahan ng customer accounts.
    customerAccounts.push(newAccount);

    // I-save sa localStorage.
    localStorage.setItem(
        "customerAccounts",
        JSON.stringify(customerAccounts)
    );

    // Ipakita ang confirmation.
    registerMessage.textContent =
        "Registration submitted! Please wait for admin approval.";

    registerMessage.style.color = "#15803d";

    // Linisin ang form.
    registerForm.reset();
});
