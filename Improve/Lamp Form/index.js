
// ==========================================
// GET HTML ELEMENTS
// ==========================================

const loginForm = document.getElementById("form");

const FullName = document.getElementById("fullname");
const Password = document.getElementById("password");
const Country = document.getElementById("country");

const buttonDark = document.getElementById("dark");

const room = document.getElementById("room");
const pullCord = document.getElementById("pull-cord");
const statusText = document.getElementById("light-status-text");
const swatches = document.querySelectorAll(".swatch");


// ==========================================
// FORM SUBMIT
// ==========================================

loginForm.addEventListener("submit", function (e) {

    // Pigilan ang page na mag-refresh.
    e.preventDefault();

    // Kunin ang values ng form.
    const fullnameValue = FullName.value.trim();
    const passwordValue = Password.value;
    const countryValue = Country.value;

    // Check kung may empty field.
    if (
        fullnameValue === "" ||
        passwordValue === "" ||
        countryValue === ""
    ) {

        alert("Please fill up all fields!");

    } else {

        alert("Success login!");

        // I-reset ang form pagkatapos mag-submit.
        loginForm.reset();

    }

});


// ==========================================
// DARK MODE BUTTON
// ==========================================

// Sa simula, dark ang background ng page.
// Kapag pinindot ang button, i-o-on o i-o-off
// nito ang light appearance ng buong page.

buttonDark.addEventListener("click", function () {

    // I-toggle ang light-mode class sa body.
    document.body.classList.toggle("light-mode");

    // Tingnan kung naka-light mode.
    const isLightMode = document.body.classList.contains("light-mode");

    // Palitan ang text ng button.
    buttonDark.textContent = isLightMode
        ? "Dark"
        : "Light";

});


// ==========================================
// LAMP SETTINGS
// ==========================================

let isLightOn = false;
let currentMood = "amber";


// ==========================================
// PULL CORD SOUND
// ==========================================

function playSwitchSound() {

    try {

        const audioCtx = new (
            window.AudioContext ||
            window.webkitAudioContext
        )();

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "triangle";

        osc.frequency.setValueAtTime(
            isLightOn ? 380 : 260,
            audioCtx.currentTime
        );

        gain.gain.setValueAtTime(
            0.15,
            audioCtx.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioCtx.currentTime + 0.08
        );

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);

        // Isara ang audio context kapag tapos na.
        osc.onended = function () {
            audioCtx.close();
        };

    } catch (error) {

        console.log("Sound is not supported:", error);

    }

}


// ==========================================
// TOGGLE LAMP ON / OFF
// ==========================================

function toggleLight() {

    // Baligtarin ang light state.
    isLightOn = !isLightOn;

    // Idagdag o alisin ang lamp effect.
    room.classList.toggle("light-on", isLightOn);

    // I-update ang status text.
    statusText.textContent = isLightOn
        ? `Light is ON (${currentMood.toUpperCase()})`
        : "Light is OFF";

    // I-play ang switch sound.
    playSwitchSound();

}


// I-click ang pull cord para kontrolin ang lamp.
pullCord.addEventListener("click", toggleLight);


// ==========================================
// CHANGE LAMP COLOR
// ==========================================

swatches.forEach(function (swatch) {

    swatch.addEventListener("click", function () {

        // Alisin ang active class sa lahat.
        swatches.forEach(function (item) {
            item.classList.remove("active");
        });

        // I-highlight ang napiling color.
        swatch.classList.add("active");

        // Kunin ang color mula sa data-color.
        currentMood = swatch.dataset.color;

        // Alisin ang dating theme.
        room.classList.remove(
            "cyan-theme",
            "emerald-theme"
        );

        // Idagdag ang bagong theme.
        if (currentMood === "cyan") {

            room.classList.add("cyan-theme");

        } else if (currentMood === "emerald") {

            room.classList.add("emerald-theme");

        }

        // I-update ang status kung bukas ang lamp.
        if (isLightOn) {

            statusText.textContent =
                `Light is ON (${currentMood.toUpperCase()})`;

        }

    });

});
