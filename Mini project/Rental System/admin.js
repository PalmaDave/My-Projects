
/*
==========================================
APARTMENT RENTAL SYSTEM
ADMIN JAVASCRIPT
==========================================
*/


/* ==========================================
   CHECK ADMIN LOGIN
========================================== */

// Kunin ang kasalukuyang login session.
const loggedInUser =
    JSON.parse(localStorage.getItem("loggedInUser")) || {};

// Kapag hindi admin, ibalik sa login page.
if (loggedInUser.role !== "admin") {
    window.location.replace("login.html");
}


/* ==========================================
   DEFAULT DATA
========================================== */

// Default rooms.
let rooms = JSON.parse(localStorage.getItem("rooms")) || [
    {
        id: 1,
        roomNumber: "101",
        type: "Single",
        price: 5000,
        status: "Occupied"
    },
    {
        id: 2,
        roomNumber: "102",
        type: "Single",
        price: 5000,
        status: "Available"
    },
    {
        id: 3,
        roomNumber: "103",
        type: "Double",
        price: 7500,
        status: "Occupied"
    },
    {
        id: 4,
        roomNumber: "104",
        type: "Family",
        price: 10000,
        status: "Available"
    },
    {
        id: 5,
        roomNumber: "105",
        type: "Single",
        price: 5000,
        status: "Available"
    },
    {
        id: 6,
        roomNumber: "106",
        type: "Double",
        price: 7500,
        status: "Available"
    },
    {
        id: 7,
        roomNumber: "107",
        type: "Family",
        price: 10000,
        status: "Available"
    }
];

// Default tenants.
let tenants = JSON.parse(localStorage.getItem("tenants")) || [
    {
        id: 1,
        name: "Juan Cruz",
        phone: "09123456789",
        room: "101",
        rent: 5000,
        status: "Active"
    },
    {
        id: 2,
        name: "Maria Santos",
        phone: "09987654321",
        room: "103",
        rent: 7500,
        status: "Active"
    }
];

// Default payments.
let payments = JSON.parse(localStorage.getItem("payments")) || [
    {
        id: 1,
        tenant: "Juan Cruz",
        room: "101",
        amount: 5000,
        date: "2026-10-01",
        status: "Paid"
    },
    {
        id: 2,
        tenant: "Maria Santos",
        room: "103",
        amount: 7500,
        date: "2026-10-02",
        status: "Paid"
    }
];


/* ==========================================
   SAVE DATA
========================================== */

function saveData() {
    localStorage.setItem("rooms", JSON.stringify(rooms));
    localStorage.setItem("tenants", JSON.stringify(tenants));
    localStorage.setItem("payments", JSON.stringify(payments));
}


/* ==========================================
   GET HTML ELEMENTS
========================================== */

const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

const pageTitle = document.getElementById("page-title");
const adminName = document.getElementById("admin-name");
const profileName = document.getElementById("profile-name");

const totalRooms = document.getElementById("total-rooms");
const occupiedRooms = document.getElementById("occupied-rooms");
const availableRooms = document.getElementById("available-rooms");
const totalTenants = document.getElementById("total-tenants");

const roomTable = document.getElementById("room-table");
const tenantTable = document.getElementById("tenant-table");
const paymentTable = document.getElementById("payment-table");
const recentPayments = document.getElementById("recent-payments");

const customerAccountsTable =
    document.getElementById("customer-accounts-table");


/* ==========================================
   DISPLAY ADMIN NAME
========================================== */

if (adminName) {
    adminName.textContent = loggedInUser.name || "Admin";
}

if (profileName) {
    profileName.textContent = loggedInUser.name || "Admin";
}


/* ==========================================
   NAVIGATION
========================================== */

navButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const sectionName = button.dataset.section;

        // Alisin ang active class sa lahat ng buttons.
        navButtons.forEach(function(navButton) {
            navButton.classList.remove("active");
        });

        // I-activate ang piniling button.
        button.classList.add("active");

        // Itago ang lahat ng sections.
        sections.forEach(function(section) {
            section.classList.remove("active");
        });

        // Ipakita ang napiling section.
        const selectedSection =
            document.getElementById(sectionName);

        if (selectedSection) {
            selectedSection.classList.add("active");
        }

        // Palitan ang page title.
        if (pageTitle) {
            pageTitle.textContent =
                button.textContent.trim();
        }

        // I-refresh ang customer accounts tuwing bubuksan ito.
        if (sectionName === "customer-accounts") {
            renderCustomerAccounts();
        }

    });

});


/* ==========================================
   DASHBOARD
========================================== */

function updateDashboard() {

    totalRooms.textContent = rooms.length;

    occupiedRooms.textContent = rooms.filter(
        function(room) {
            return room.status === "Occupied";
        }
    ).length;

    availableRooms.textContent = rooms.filter(
        function(room) {
            return room.status === "Available";
        }
    ).length;

    totalTenants.textContent = tenants.length;

    renderRecentPayments();
}


/* ==========================================
   RECENT PAYMENTS
========================================== */

function renderRecentPayments() {

    recentPayments.innerHTML = "";

    payments.slice(-5).reverse().forEach(
        function(payment) {

            const row = document.createElement("tr");

            const tenantCell = document.createElement("td");
            tenantCell.textContent = payment.tenant;

            const roomCell = document.createElement("td");
            roomCell.textContent = payment.room;

            const amountCell = document.createElement("td");
            amountCell.textContent =
                "₱" + Number(payment.amount).toLocaleString();

            const dateCell = document.createElement("td");
            dateCell.textContent = payment.date;

            const statusCell = document.createElement("td");
            const statusBadge = document.createElement("span");

            statusBadge.className =
                "status " + String(payment.status).toLowerCase();

            statusBadge.textContent = payment.status;

            statusCell.appendChild(statusBadge);

            row.append(
                tenantCell,
                roomCell,
                amountCell,
                dateCell,
                statusCell
            );

            recentPayments.appendChild(row);
        }
    );
}


/* ==========================================
   ROOMS
========================================== */

function renderRooms(list = rooms) {

    roomTable.innerHTML = "";

    if (list.length === 0) {
        roomTable.innerHTML =
            '<tr><td colspan="5">No rooms found.</td></tr>';
        return;
    }

    list.forEach(function(room) {

        const row = document.createElement("tr");

        const roomCell = document.createElement("td");
        roomCell.textContent = room.roomNumber;

        const typeCell = document.createElement("td");
        typeCell.textContent = room.type;

        const priceCell = document.createElement("td");
        priceCell.textContent =
            "₱" + Number(room.price).toLocaleString();

        const statusCell = document.createElement("td");
        const statusBadge = document.createElement("span");

        statusBadge.className =
            "status " + String(room.status).toLowerCase();

        statusBadge.textContent = room.status;
        statusCell.appendChild(statusBadge);

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.className = "action-btn delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            deleteRoom(room.id);
        });

        actionCell.appendChild(deleteButton);

        row.append(
            roomCell,
            typeCell,
            priceCell,
            statusCell,
            actionCell
        );

        roomTable.appendChild(row);
    });
}


/* ==========================================
   ADD ROOM MODAL
========================================== */

const roomModal = document.getElementById("room-modal");
const addRoomBtn = document.getElementById("add-room-btn");
const closeRoomModal = document.getElementById("close-room-modal");
const roomForm = document.getElementById("room-form");

addRoomBtn.addEventListener("click", function() {
    roomForm.reset();
    roomModal.classList.add("show");
});

closeRoomModal.addEventListener("click", function() {
    roomModal.classList.remove("show");
});


/* ==========================================
   SAVE ROOM
========================================== */

roomForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const roomNumber =
        document.getElementById("room-number").value.trim();

    const type =
        document.getElementById("room-type").value;

    const price =
        Number(document.getElementById("room-price").value);

    const status =
        document.getElementById("room-status").value;

    // Huwag payagan ang duplicate room number.
    const duplicateRoom = rooms.some(function(room) {
        return room.roomNumber.toLowerCase() ===
            roomNumber.toLowerCase();
    });

    if (duplicateRoom) {
        alert("This room number already exists.");
        return;
    }

    rooms.push({
        id: Date.now(),
        roomNumber: roomNumber,
        type: type,
        price: price,
        status: status
    });

    saveData();
    renderRooms();
    loadAvailableRooms();
    updateDashboard();

    roomModal.classList.remove("show");
    roomForm.reset();
});


/* ==========================================
   DELETE ROOM
========================================== */

function deleteRoom(id) {

    const room = rooms.find(function(item) {
        return item.id === id;
    });

    if (!room) {
        return;
    }

    // Huwag mag-delete ng room na may tenant.
    const roomHasTenant = tenants.some(function(tenant) {
        return String(tenant.room) === String(room.roomNumber);
    });

    if (roomHasTenant) {
        alert("Cannot delete this room because a tenant is assigned to it.");
        return;
    }

    if (!confirm("Delete room " + room.roomNumber + "?")) {
        return;
    }

    rooms = rooms.filter(function(item) {
        return item.id !== id;
    });

    saveData();
    renderRooms();
    loadAvailableRooms();
    updateDashboard();
}


/* ==========================================
   ROOM SEARCH
========================================== */

const roomSearch = document.getElementById("room-search");

roomSearch.addEventListener("input", function() {

    const search = roomSearch.value.toLowerCase();

    const filteredRooms = rooms.filter(function(room) {
        return String(room.roomNumber)
            .toLowerCase()
            .includes(search);
    });

    renderRooms(filteredRooms);
});


/* ==========================================
   TENANTS
========================================== */

function renderTenants(list = tenants) {

    tenantTable.innerHTML = "";

    if (list.length === 0) {
        tenantTable.innerHTML =
            '<tr><td colspan="6">No tenants found.</td></tr>';
        return;
    }

    list.forEach(function(tenant) {

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = tenant.name;

        const phoneCell = document.createElement("td");
        phoneCell.textContent = tenant.phone;

        const roomCell = document.createElement("td");
        roomCell.textContent = tenant.room;

        const rentCell = document.createElement("td");
        rentCell.textContent =
            "₱" + Number(tenant.rent).toLocaleString();

        const statusCell = document.createElement("td");
        const statusBadge = document.createElement("span");

        statusBadge.className =
            "status " + String(tenant.status).toLowerCase();

        statusBadge.textContent = tenant.status;
        statusCell.appendChild(statusBadge);

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.className = "action-btn delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            deleteTenant(tenant.id);
        });

        actionCell.appendChild(deleteButton);

        row.append(
            nameCell,
            phoneCell,
            roomCell,
            rentCell,
            statusCell,
            actionCell
        );

        tenantTable.appendChild(row);
    });
}


/* ==========================================
   TENANT MODAL
========================================== */

const tenantModal = document.getElementById("tenant-modal");
const addTenantBtn = document.getElementById("add-tenant-btn");
const closeTenantModal = document.getElementById("close-tenant-modal");
const tenantForm = document.getElementById("tenant-form");

addTenantBtn.addEventListener("click", function() {

    tenantForm.reset();
    loadAvailableRooms();

    tenantModal.classList.add("show");
});

closeTenantModal.addEventListener("click", function() {
    tenantModal.classList.remove("show");
});


/* ==========================================
   LOAD AVAILABLE ROOMS
========================================== */

function loadAvailableRooms() {

    const tenantRoomSelect =
        document.getElementById("tenant-room");

    const tenantRentInput =
        document.getElementById("tenant-rent");

    tenantRoomSelect.innerHTML =
        '<option value="">Select available room</option>';

    const availableRoomList = rooms.filter(function(room) {
        return room.status === "Available";
    });

    availableRoomList.forEach(function(room) {

        const option = document.createElement("option");

        option.value = room.roomNumber;
        option.textContent =
            room.roomNumber + " - " + room.type +
            " (₱" + Number(room.price).toLocaleString() + ")";

        option.dataset.price = room.price;

        tenantRoomSelect.appendChild(option);
    });

    tenantRentInput.value = "";
}

// Kapag pumili ng room, automatic na ilagay ang rent.
document.getElementById("tenant-room").addEventListener(
    "change",
    function() {

        const selectedOption =
            this.options[this.selectedIndex];

        const rentInput =
            document.getElementById("tenant-rent");

        rentInput.value =
            selectedOption.dataset.price || "";
    }
);


/* ==========================================
   SAVE TENANT
========================================== */

tenantForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("tenant-name").value.trim();

    const phone =
        document.getElementById("tenant-phone").value.trim();

    const roomNumber =
        document.getElementById("tenant-room").value;

    const rent =
        Number(document.getElementById("tenant-rent").value);

    if (!roomNumber || !rent) {
        alert("Please select an available room.");
        return;
    }

    const selectedRoom = rooms.find(function(room) {
        return String(room.roomNumber) === String(roomNumber);
    });

    if (!selectedRoom || selectedRoom.status !== "Available") {
        alert("That room is no longer available. Please select another room.");
        loadAvailableRooms();
        return;
    }

    // Gumawa ng tenant record.
    tenants.push({
        id: Date.now(),
        name: name,
        phone: phone,
        room: roomNumber,
        rent: rent,
        status: "Active"
    });

    // I-update ang status ng room.
    selectedRoom.status = "Occupied";

    saveData();
    renderTenants();
    renderRooms();
    loadAvailableRooms();
    updateDashboard();

    tenantModal.classList.remove("show");
    tenantForm.reset();

    alert("Tenant added successfully!");
});


/* ==========================================
   DELETE TENANT
========================================== */

function deleteTenant(id) {

    const tenant = tenants.find(function(item) {
        return item.id === id;
    });

    if (!tenant) {
        return;
    }

    if (!confirm("Delete tenant " + tenant.name + "?")) {
        return;
    }

    // Kapag dinelete ang tenant, gawing available ulit ang room.
    const tenantRoom = rooms.find(function(room) {
        return String(room.roomNumber) === String(tenant.room);
    });

    if (tenantRoom) {
        tenantRoom.status = "Available";
    }

    tenants = tenants.filter(function(item) {
        return item.id !== id;
    });

    saveData();
    renderTenants();
    renderRooms();
    loadAvailableRooms();
    updateDashboard();
}


/* ==========================================
   TENANT SEARCH
========================================== */

const tenantSearch = document.getElementById("tenant-search");

tenantSearch.addEventListener("input", function() {

    const search = tenantSearch.value.toLowerCase();

    const filteredTenants = tenants.filter(function(tenant) {
        return (
            String(tenant.name).toLowerCase().includes(search) ||
            String(tenant.phone).toLowerCase().includes(search) ||
            String(tenant.room).toLowerCase().includes(search)
        );
    });

    renderTenants(filteredTenants);
});


/* ==========================================
   PAYMENTS
========================================== */

function renderPayments() {

    paymentTable.innerHTML = "";

    if (payments.length === 0) {
        paymentTable.innerHTML =
            '<tr><td colspan="6">No payments found.</td></tr>';
        return;
    }

    payments.forEach(function(payment) {

        const row = document.createElement("tr");

        const tenantCell = document.createElement("td");
        tenantCell.textContent = payment.tenant;

        const roomCell = document.createElement("td");
        roomCell.textContent = payment.room;

        const amountCell = document.createElement("td");
        amountCell.textContent =
            "₱" + Number(payment.amount).toLocaleString();

        const dateCell = document.createElement("td");
        dateCell.textContent = payment.date;

        const statusCell = document.createElement("td");
        const statusBadge = document.createElement("span");

        statusBadge.className =
            "status " + String(payment.status).toLowerCase();

        statusBadge.textContent = payment.status;
        statusCell.appendChild(statusBadge);

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.className = "action-btn delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            deletePayment(payment.id);
        });

        actionCell.appendChild(deleteButton);

        row.append(
            tenantCell,
            roomCell,
            amountCell,
            dateCell,
            statusCell,
            actionCell
        );

        paymentTable.appendChild(row);
    });
}


/* ==========================================
   ADD PAYMENT
========================================== */

const addPaymentBtn = document.getElementById("add-payment-btn");

addPaymentBtn.addEventListener("click", function() {

    if (tenants.length === 0) {
        alert("Add a tenant before recording a payment.");
        return;
    }

    const tenantName = prompt(
        "Enter tenant name:\n" +
        tenants.map(function(tenant) {
            return tenant.name + " (Room " + tenant.room + ")";
        }).join("\n")
    );

    if (!tenantName) {
        return;
    }

    const selectedTenant = tenants.find(function(tenant) {
        return tenant.name.toLowerCase() === tenantName.trim().toLowerCase();
    });

    if (!selectedTenant) {
        alert("Tenant not found. Please enter the exact tenant name.");
        return;
    }

    const amountInput = prompt("Enter payment amount:");

    if (amountInput === null || amountInput.trim() === "") {
        return;
    }

    const amount = Number(amountInput);

    if (!Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid payment amount.");
        return;
    }

    const date = new Date().toISOString().split("T")[0];

    payments.push({
        id: Date.now(),
        tenant: selectedTenant.name,
        room: selectedTenant.room,
        amount: amount,
        date: date,
        status: "Paid"
    });

    saveData();
    renderPayments();
    updateDashboard();

    alert("Payment added successfully!");
});


/* ==========================================
   DELETE PAYMENT
========================================== */

function deletePayment(id) {

    if (!confirm("Delete this payment?")) {
        return;
    }

    payments = payments.filter(function(payment) {
        return payment.id !== id;
    });

    saveData();
    renderPayments();
    updateDashboard();
}


/* ==========================================
   CUSTOMER ACCOUNTS
========================================== */

// Kunin ang registered accounts.
function getRegisteredCustomerAccounts() {

    const savedAccounts =
        localStorage.getItem("customerAccounts");

    if (savedAccounts === null) {
        return [];
    }

    try {
        const accounts = JSON.parse(savedAccounts);
        return Array.isArray(accounts) ? accounts : [];
    } catch (error) {
        console.error("Unable to read customer accounts:", error);
        return [];
    }
}


// Ipakita ang registered customers sa admin table.
function renderCustomerAccounts() {

    if (!customerAccountsTable) {
        return;
    }

    const accounts = getRegisteredCustomerAccounts();

    customerAccountsTable.innerHTML = "";

    if (accounts.length === 0) {
        customerAccountsTable.innerHTML =
            '<tr><td colspan="5">No registered customer accounts yet.</td></tr>';
        return;
    }

    accounts.forEach(function(account) {

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = account.name || "-";

        const emailCell = document.createElement("td");
        emailCell.textContent = account.email || "-";

        const phoneCell = document.createElement("td");
        phoneCell.textContent = account.phone || "-";

        const statusCell = document.createElement("td");
        const statusBadge = document.createElement("span");

        const status = account.status || "Pending";

        statusBadge.className =
            "status " + String(status).toLowerCase();

        statusBadge.textContent = status;

        statusCell.appendChild(statusBadge);

        const actionCell = document.createElement("td");
        const actionContainer = document.createElement("div");

        actionContainer.className = "account-action";

        if (status === "Pending") {

            const approveButton =
                document.createElement("button");

            approveButton.className =
                "action-btn approve-btn";

            approveButton.textContent = "Approve";

            approveButton.addEventListener("click", function() {
                approveCustomerAccount(account.id);
            });

            const rejectButton =
                document.createElement("button");

            rejectButton.className =
                "action-btn reject-btn";

            rejectButton.textContent = "Reject";

            rejectButton.addEventListener("click", function() {
                rejectCustomerAccount(account.id);
            });

            actionContainer.append(
                approveButton,
                rejectButton
            );

        } else {

            actionContainer.textContent = "No action available";

        }

        actionCell.appendChild(actionContainer);

        row.append(
            nameCell,
            emailCell,
            phoneCell,
            statusCell,
            actionCell
        );

        customerAccountsTable.appendChild(row);
    });
}


// APPROVE customer account.
function approveCustomerAccount(id) {

    const accounts = getRegisteredCustomerAccounts();

    const account = accounts.find(function(item) {
        return String(item.id) === String(id);
    });

    if (!account || account.status !== "Pending") {
        return;
    }

    if (!confirm("Approve account for " + account.name + "?")) {
        return;
    }

    account.status = "Approved";

    localStorage.setItem(
        "customerAccounts",
        JSON.stringify(accounts)
    );

    renderCustomerAccounts();

    alert(
        "Customer account approved! The customer can now log in."
    );
}


// REJECT customer account.
function rejectCustomerAccount(id) {

    const accounts = getRegisteredCustomerAccounts();

    const account = accounts.find(function(item) {
        return String(item.id) === String(id);
    });

    if (!account || account.status !== "Pending") {
        return;
    }

    if (!confirm("Reject account for " + account.name + "?")) {
        return;
    }

    account.status = "Rejected";

    localStorage.setItem(
        "customerAccounts",
        JSON.stringify(accounts)
    );

    renderCustomerAccounts();

    alert("Customer registration rejected.");
}


/* ==========================================
   LOGOUT
========================================== */

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", function() {

    if (!confirm("Are you sure you want to log out?")) {
        return;
    }

    localStorage.removeItem("loggedInUser");

    window.location.replace("login.html");
});


/* ==========================================
   INITIAL LOAD
========================================== */

// I-save ang default data sa unang paggamit.
saveData();

// I-render ang dashboard tables.
renderRooms();
renderTenants();
renderPayments();
renderCustomerAccounts();

// I-load ang available rooms sa tenant form.
loadAvailableRooms();

// I-update ang dashboard counts.
updateDashboard();
