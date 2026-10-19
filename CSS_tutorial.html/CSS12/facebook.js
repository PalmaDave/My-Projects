// 1. Kunin ang mga elements
const loginBtn = document.querySelector('button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// 2. Click event
loginBtn.addEventListener('click', () => {
    
    // LOGIC: Gamit ang Logical OR (||)
    // "Kung walang laman ang email O walang laman ang password"
    if (!emailInput.value || !passwordInput.value) {
        
        alert("Hoy! Sagotan mo.");
        
        // Dagdagan natin ng visual feedback
        if (!emailInput.value) emailInput.style.borderColor = "red";
        if (!passwordInput.value) passwordInput.style.borderColor = "red";
        
    } else {
        // Kung okay lahat
        emailInput.style.borderColor = "#ccc"; // balik sa dati
        passwordInput.style.borderColor = "#ccc";
        alert("Successfull");
    }
});

// 3. BONUS: Tanggalin ang red border pag nagsimula nang mag-type
emailInput.addEventListener('input', () => emailInput.style.borderColor = "#ccc");
passwordInput.addEventListener('input', () => passwordInput.style.borderColor = "#ccc");