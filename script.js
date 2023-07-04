function draw(diameter) {
    if (!diameter) { diameter = 25 }
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const radius = diameter < canvas.width / 10 && diameter >= 0 ? diameter / 2 : 25;

    for (x = -radius; x < radius; x++) {
        for (y = -radius; y < radius; y++) {
            if ((x + 0.5) * (x + 0.5) + (y + 0.5) * (y + 0.5) <= radius * radius) {
                ctx.fillRect((radius + x) * 10 + 0.25 + (500 - radius * 20) / 2, (radius + y) * 10 + 0.25 + (500 - radius * 20) / 2, 9.5, 9.5);
            }
        }
    }
}

function changeDiameter() {
    const diameter = document.getElementById('diameter').value; 
    draw(diameter);
}

