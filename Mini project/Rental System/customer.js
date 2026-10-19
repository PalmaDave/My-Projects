/*
==========================================
APARTMENT RENTAL SYSTEM
CUSTOMER JAVASCRIPT
==========================================
*/


/* ==========================================
   1. CHECK CUSTOMER LOGIN
========================================== */

// Kunin ang naka-login na user.
const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);

// Customer account lang ang puwedeng pumasok.
if (
    !loggedInUser ||
    loggedInUser.role !== "customer"
) {
    window.location.href = "login.html";
}


/* ==========================================
   2. GET HTML ELEMENTS
========================================== */

const customerNameEl = document.getElementById("customer-name");
const welcomeNameEl = document.getElementById("welcome-name");
const pageTitleEl = document.getElementById("page-title");

const dashboardRoomEl = document.getElementById("dashboard-room");
const dashboardRentEl = document.getElementById("dashboard-rent");
const dashboardPaymentEl = document.getElementById("dashboard-payment");

const roomNumberEl = document.getElementById("room-number");
const roomTypeEl = document.getElementById("room-type");
const roomRentEl = document.getElementById("room-rent");
const roomStatusEl = document.getElementById("room-status");

const recentPaymentsEl = document.getElementById("recent-payments");
const paymentTableEl = document.getElementById("payment-table");

const profileNameEl = document.getElementById("profile-name");
const profileEmailEl = document.getElementById("profile-email");

const logoutBtn = document.getElementById("logout-btn");


/* ==========================================
   3. CUSTOMER INFORMATION
========================================== */

// Kunin ang pangalan at email mula sa login session.
const customerName = loggedInUser?.name || "Customer";
const customerEmail = loggedInUser?.email || "";

// Ipakita ang customer information sa page.
customerNameEl.textContent = customerName;
welcomeNameEl.textContent = customerName;

profileNameEl.textContent = customerName;
profileEmailEl.textContent = customerEmail;


/* ==========================================
   4. LOAD ADMIN DATA
========================================== */

// Pareho ang localStorage keys na ginagamit ng admin.js.
const rooms = JSON.parse(
    localStorage.getItem("rooms")
) || [];

const tenants = JSON.parse(
    localStorage.getItem("tenants")
) || [];

const payments = JSON.parse(
    localStorage.getItem("payments")
) || [];


/* ==========================================
   5. HELPER FUNCTIONS
========================================== */

// I-format ang amount bilang Philippine peso.
function formatMoney(amount) {
    return "₱" + Number(amount || 0).toLocaleString("en-PH");
}


// Gawing lowercase para madaling magkumpara.
function normalizeText(value) {
    return String(value || "").trim().toLowerCase();
}


/* ==========================================
   6. FIND CUSTOMER TENANT
========================================== */

// Sa kasalukuyang admin.js mo, walang email
// field ang tenant record.
//
// Kaya pangalan muna ang gagamitin natin para
// i-match ang customer account sa tenant record.
//
// Kapag nagdagdag tayo ng email field sa admin
// tenant form, puwede rin nating gamitin iyon.

function getCustomerTenant() {

    return tenants.find(function(tenant) {

        const isSameName =
            normalizeText(tenant.name) ===
            normalizeText(customerName);

        const isSameEmail =
            tenant.email &&
            normalizeText(tenant.email) ===
            normalizeText(customerEmail);

        const isActive =
            normalizeText(tenant.status) === "active";

        return (
            (isSameName || isSameEmail) &&
            isActive
        );

    }) || null;

}


/* ==========================================
   7. FIND CUSTOMER ROOM
========================================== */

function getCustomerRoom() {

    const tenant = getCustomerTenant();

    if (!tenant) {
        return null;
    }

    // Sa admin.js, ang tenant.room ay room number.
    return rooms.find(function(room) {

        return String(room.roomNumber) ===
            String(tenant.room);

    }) || null;

}


/* ==========================================
   8. GET CUSTOMER PAYMENTS
========================================== */

function getCustomerPayments() {

    const tenant = getCustomerTenant();

    if (!tenant) {
        return [];
    }

    // Sa admin.js, ang payment.tenant ay tenant name
    // at ang payment.room ay room number.
    return payments.filter(function(payment) {

        const matchesTenant =
            normalizeText(payment.tenant) ===
            normalizeText(tenant.name);

        const matchesRoom =
            String(payment.room) ===
            String(tenant.room);

        // Pangalan ang pangunahing match.
        // Room number ang fallback kung walang tenant name.
        return matchesTenant || (
            !payment.tenant && matchesRoom
        );

    });

}


/* ==========================================
   9. DISPLAY ROOM INFORMATION
========================================== */

function renderCustomerRoom() {

    const tenant = getCustomerTenant();
    const room = getCustomerRoom();

    // Kapag wala pang tenant record ang customer.
    if (!tenant) {

        dashboardRoomEl.textContent = "Not assigned";
        dashboardRentEl.textContent = "₱0";
        dashboardPaymentEl.textContent = "No record";

        roomNumberEl.textContent = "Not assigned";
        roomTypeEl.textContent = "-";
        roomRentEl.textContent = "₱0";
        roomStatusEl.textContent = "No room assigned";

        return;
    }

    // Gamitin ang tenant.room at tenant.rent
    // dahil ito ang structure ng admin.js mo.
    dashboardRoomEl.textContent = tenant.room || "-";

    const rent = Number(
        tenant.rent ?? room?.price ?? 0
    );

    dashboardRentEl.textContent = formatMoney(rent);

    roomNumberEl.textContent = tenant.room || "-";
    roomTypeEl.textContent = room?.type || "-";
    roomRentEl.textContent = formatMoney(rent);

    roomStatusEl.textContent =
        room?.status || tenant.status || "-";


    // I-update ang payment status sa dashboard.
    const customerPayments = getCustomerPayments();

    if (customerPayments.length === 0) {

        dashboardPaymentEl.textContent = "No record";

    } else {

        const hasUnpaid = customerPayments.some(function(payment) {
            return normalizeText(payment.status) === "unpaid";
        });

        const hasPartial = customerPayments.some(function(payment) {
            return normalizeText(payment.status) === "partial";
        });

        if (hasUnpaid) {
            dashboardPaymentEl.textContent = "Unpaid";
        } else if (hasPartial) {
            dashboardPaymentEl.textContent = "Partial";
        } else {
            dashboardPaymentEl.textContent = "Paid";
        }

    }

}


/* ==========================================
   10. DISPLAY PAYMENT HISTORY
========================================== */

function renderCustomerPayments() {

    const customerPayments = getCustomerPayments();

    // Linisin muna ang tables.
    recentPaymentsEl.innerHTML = "";
    paymentTableEl.innerHTML = "";


    // Kapag walang payment record.
    if (customerPayments.length === 0) {

        recentPaymentsEl.innerHTML = `
            <tr>
                <td colspan="3">No payment records yet.</td>
            </tr>
        `;

        paymentTableEl.innerHTML = `
            <tr>
                <td colspan="4">No payment records yet.</td>
            </tr>
        `;

        return;
    }


    // Ipakita ang pinakabagong record sa unahan.
    const sortedPayments = [...customerPayments].reverse();


    sortedPayments.forEach(function(payment, index) {

        const date = payment.date || "-";
        const amount = formatMoney(payment.amount);
        const status = payment.status || "Unpaid";

        const safeStatus = [
            "paid",
            "unpaid",
            "partial"
        ].includes(normalizeText(status))
            ? normalizeText(status)
            : "unpaid";


        // Recent Payments: hanggang 5 records.
        if (index < 5) {

            const recentRow = document.createElement("tr");

            const dateCell = document.createElement("td");
            const amountCell = document.createElement("td");
            const statusCell = document.createElement("td");
            const statusSpan = document.createElement("span");

            dateCell.textContent = date;
            amountCell.textContent = amount;

            statusSpan.textContent = status;
            statusSpan.classList.add("status", safeStatus);

            statusCell.appendChild(statusSpan);

            recentRow.append(
                dateCell,
                amountCell,
                statusCell
            );

            recentPaymentsEl.appendChild(recentRow);

        }


        // Buong Payment History.
        const paymentRow = document.createElement("tr");

        const dateCell = document.createElement("td");
        const roomCell = document.createElement("td");
        const amountCell = document.createElement("td");
        const statusCell = document.createElement("td");
        const statusSpan = document.createElement("span");

        dateCell.textContent = date;
        roomCell.textContent = payment.room || "-";
        amountCell.textContent = amount;

        statusSpan.textContent = status;
        statusSpan.classList.add("status", safeStatus);

        statusCell.appendChild(statusSpan);

        paymentRow.append(
            dateCell,
            roomCell,
            amountCell,
            statusCell
        );

        paymentTableEl.appendChild(paymentRow);

    });

}


/* ==========================================
   11. NAVIGATION
========================================== */

const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const sectionId = button.dataset.section;

        // Alisin ang active state sa lahat ng buttons.
        navButtons.forEach(function(navButton) {
            navButton.classList.remove("active");
        });

        // Itago muna ang lahat ng sections.
        sections.forEach(function(section) {
            section.classList.remove("active");
        });

        // I-activate ang piniling button.
        button.classList.add("active");

        // Ipakita ang section na pinili.
        const selectedSection = document.getElementById(sectionId);

        if (selectedSection) {
            selectedSection.classList.add("active");
        }

        // I-update ang title.
        pageTitleEl.textContent = button.textContent
            .replace(/[📊🚪💰👤]/g, "")
            .trim();

    });

});


/* ==========================================
   12. LOGOUT
========================================== */

logoutBtn.addEventListener("click", function() {

    const confirmed = confirm("Are you sure you want to log out?");

    if (!confirmed) {
        return;
    }

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";

});


/* ==========================================
   13. INITIAL LOAD
========================================== */

renderCustomerRoom();
renderCustomerPayments();
