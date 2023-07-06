let diameter;
let layer;
let height;

const squareScale = 10;

function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const startRadius = diameter / 2;
    const radius = (1 - (layer/height)) * (startRadius) + 1;
    console.log(layer/height);
    for (x = -startRadius; x < startRadius; x++) {
        for (y = -startRadius; y < startRadius; y++) {
            if ((x + 0.5) * (x + 0.5) + (y + 0.5) * (y + 0.5) <= radius * radius) {
                ctx.fillRect((startRadius + x) * squareScale + 0.25 + (500 - diameter * squareScale) / 2, (startRadius + y) * squareScale + 0.25 + (500 - diameter * squareScale) / 2, squareScale - 0.5, squareScale - 0.5);
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

    height = parseInt(document.getElementById('height').value);
    if (height > 100) {
        height = 100;
    } else if (height < 5) {
        diameter = 5;
    }
    document.getElementById('height').value = height;

    layer = parseInt(document.getElementById('layer').value);
    if (layer > height) {
        layer = height;
    } else if (layer < 1) {
        layer = 1;
    }
    document.getElementById('layer').value = layer;
    draw();
}