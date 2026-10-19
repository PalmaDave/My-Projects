
/*
==========================================
APARTMENT RENTAL SYSTEM
LOGIN JAVASCRIPT
==========================================
*/

// Kunin ang login form at message element.
const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

// Default admin account.
const adminAccount = {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin123",
    role: "admin"
};

// Kunin ang customer accounts mula sa localStorage.
function loadCustomerAccounts() {
    const savedAccounts = localStorage.getItem("customerAccounts");

    // Kung may existing accounts, gamitin ang mga ito.
    if (savedAccounts !== null) {
        try {
            const accounts = JSON.parse(savedAccounts);
            return Array.isArray(accounts) ? accounts : [];
        } catch (error) {
            console.error("Unable to read customer accounts:", error);
            return [];
        }
    }

    // Default demo customer para sa unang paggamit.
    const defaultAccounts = [
        {
            id: 2,
            name: "Juan Cruz",
            email: "juan@gmail.com",
            phone: "09123456789",
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

// Patakbuhin kapag nag-submit ng login form.
loginForm.addEventListener("submit", function(event) {

    // Pigilan ang automatic page refresh.
    event.preventDefault();

    // Kunin ang input values.
    const email = document
        .getElementById("email")
        .value.trim()
        .toLowerCase();

    const password = document
        .getElementById("password")
        .value;

    // Linisin ang dating message.
    loginMessage.textContent = "";

    // CHECK ADMIN LOGIN.
    if (
        email === adminAccount.email &&
        password === adminAccount.password
    ) {
        // Huwag isama ang password sa login session.
        const loggedInAdmin = {
            id: adminAccount.id,
            name: adminAccount.name,
            email: adminAccount.email,
            role: "admin"
        };

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(loggedInAdmin)
        );

        window.location.href = "admin.html";
        return;
    }

    // CHECK CUSTOMER LOGIN.
    const customerAccounts = loadCustomerAccounts();

    const customer = customerAccounts.find(function(account) {
        return (
            String(account.email || "").toLowerCase() === email &&
            account.password === password
        );
    });

    // Kung walang tugmang email at password.
    if (!customer) {
        loginMessage.textContent = "Invalid email or password.";
        loginMessage.style.color = "#dc2626";
        return;
    }

    // Pending: kailangan pang aprubahan ng admin.
    if (customer.status === "Pending") {
        loginMessage.textContent =
            "Your account is still pending admin approval.";
        loginMessage.style.color = "#b45309";
        return;
    }

    // Rejected: hindi puwedeng mag-login.
    if (customer.status === "Rejected") {
        loginMessage.textContent =
            "Your registration was rejected. Please contact the admin.";
        loginMessage.style.color = "#dc2626";
        return;
    }

    // Tanging Approved customer ang makakapasok.
    if (customer.status !== "Approved") {
        loginMessage.textContent =
            "Your account is not approved.";
        loginMessage.style.color = "#dc2626";
        return;
    }

    // Gumawa ng login session na walang password.
    const loggedInCustomer = {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        phone: customer.phone || "",
        role: "customer"
    };

    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(loggedInCustomer)
    );

    // Dalhin sa customer dashboard.
    window.location.href = "customer.html";
});
