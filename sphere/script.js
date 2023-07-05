let diameter = 25;
let layer = 7;

const squareScale = 10;

function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const radius = diameter / 2;

    for (x = -radius; x < radius; x++) {
        for (y = -radius; y < radius; y++) {
            if ((x + 0.5) * (x + 0.5) + (y + 0.5) * (y + 0.5) + (layer - diameter / 2 - 0.5) * (layer - diameter / 2 - 0.5) <= radius * radius) {
                ctx.fillRect((radius + x) * squareScale + 0.25 + (500 - radius * 2 * squareScale) / 2, (radius + y) * squareScale + 0.25 + (500 - radius * 2 * squareScale) / 2, squareScale - 0.5, squareScale - 0.5);
            }
        }
    }
}

function onChange() {
    diameter = parseInt(document.getElementById('diameter').value);
    if (diameter > 50) {
        diameter = 50;
    } else if (diameter < 5) {
        diameter = 5;
    }
    document.getElementById('diameter').value = diameter;
    layer = parseInt(document.getElementById('layer').value);
    if (layer > diameter) {
        layer = diameter;
    } else if (layer < 1) {
        layer = 1;
    }
    document.getElementById('layer').value = layer;
    draw();
}