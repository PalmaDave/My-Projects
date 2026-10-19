const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let particles = [];
let nameY = canvas.height + 100; // Start sa ibaba
let targetY = canvas.height / 2; // Hihinto sa gitna
let speed = 2; // Bilis ng pag-akyat

function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Carnation Pink
function randomColor() {
    return "#FFA6C9";
}

function explode(x, y) {

    let color = randomColor();

    for (let i = 0; i < 100; i++) {

        let angle = (Math.PI * 2 / 100) * i;
        let speed = random(2, 8);

        particles.push({
            x: x,
            y: y,

            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,

            radius: random(2, 4),

            alpha: 1,

            life: 100,

            color: color
        });

    }

}

canvas.addEventListener("click", (e) => {

    explode(e.clientX, e.clientY);

});

setInterval(() => {

  explode(
    random(100, canvas.width - 100),
    random(100, canvas.height / 2)
);

}, 1000);

// ===========================
// DRAW NAME
// ===========================

function drawName() {

    if (nameY > targetY) {
        nameY -= speed;
    }

    ctx.save();

    ctx.font = "bold 80px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.shadowBlur = 35;
    ctx.shadowColor = "#FFA6C9";

    ctx.fillStyle = "#FFA6C9";

    ctx.fillText("I miss you Coco by Angel 🥹🥹", canvas.width / 2, nameY);

    ctx.restore();

}

function animate() {

    requestAnimationFrame(animate);

    // Trail Effect
    ctx.fillStyle = "rgba(0,0,0,0.18)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw name
    drawName();

    for (let i = particles.length - 1; i >= 0; i--) {

        let p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Gravity
        p.vy += 0.05;

        p.life--;

        p.alpha = p.life / 100;

        ctx.save();

        ctx.globalAlpha = p.alpha;

        // Glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        ctx.fillStyle = p.color;
        ctx.fill();

        ctx.restore();

        if (p.life <= 0) {
            particles.splice(i, 1);
        }

    }

}

animate();