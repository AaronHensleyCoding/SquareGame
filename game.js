const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Define quadrants and colors
const colors = ['green', 'blue', 'yellow', 'red'];
const icons = ['🖐️', '🙌', '🦶', '👣'];
let currentIcon = '';

function drawQuadrants() {
    const w = canvas.width;
    const h = canvas.height;
    const halfW = w / 2;
    const halfH = h / 2;

    // Top left
    ctx.fillStyle = colors[0];
    ctx.fillRect(0, 0, halfW, halfH);

    // Top right
    ctx.fillStyle = colors[1];
    ctx.fillRect(halfW, 0, halfW, halfH);

    // Bottom left
    ctx.fillStyle = colors[2];
    ctx.fillRect(0, halfH, halfW, halfH);

    // Bottom right
    ctx.fillStyle = colors[3];
    ctx.fillRect(halfW, halfH, halfW, halfH);
}

function flashRandomSquare() {
    drawQuadrants();

    // Pick a random quadrant
    const quadrant = Math.floor(Math.random() * 4);
    const w = canvas.width / 2;
    const h = canvas.height / 2;
    const x = (quadrant % 2) * w;
    const y = Math.floor(quadrant / 2) * h;

    // Highlight the chosen quadrant
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.strokeRect(x, y, w, h);

    // Pick a random icon
    currentIcon = icons[Math.floor(Math.random() * icons.length)];

    // Draw the icon in the center of the chosen quadrant
    ctx.fillStyle = 'white';
    ctx.font = `${Math.min(w, h) * 0.4}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(currentIcon, x + w / 2, y + h / 2);

    // Flash again in 3 seconds
    setTimeout(flashRandomSquare, 4000);
}

// Initial draw and start flashing
drawQuadrants();
flashRandomSquare();
