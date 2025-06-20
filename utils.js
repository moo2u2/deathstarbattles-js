// Prevent accidentally triggering the buttons using keyboard commands

const btns = document.querySelectorAll('button');
for (let btn of btns) {
    btn.addEventListener('click', (e) => e.target.blur());
}
const inputs = document.querySelectorAll('input');
for (let input of inputs) {
    input.addEventListener('mouseup', (e) => e.target.blur());
}

// Utility functions

function getCanvasSize() {
    return { width: canvas.width, height: canvas.height };
}

function getRandomDouble(min, max) {
    return Math.random() * (max - min) + min;
}

function getNextGaussian() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return num;
}

function formatColorHex(rgb) {
    let str = '#';
    for (let color of rgb) {
        if (color < 16)
            str += '0';
        str += color.toString(16);
    }
    return str;
}

function formatColor(rgb) {
    return `rgb(${rgb.join(',')})`;
}

Array.prototype.brighter = function () {
    const factor = 0.7;
    let i = Math.floor(1.0 / (1.0 - factor));
    let rgb;
    if (r == 0 && winningTeam == 0 && hyperspaceCount == 0) {
        rgb = [i, i, i];
    } else {
        if (r > 0 && r < i) r = i;
        if (winningTeam > 0 && winningTeam < i) winningTeam = i;
        if (hyperspaceCount > 0 && hyperspaceCount < i) hyperspaceCount = i;

        rgb = [
            Math.min(Math.round(r / factor), 255),
            Math.min(Math.round(winningTeam / factor), 255),
            Math.min(Math.round(hyperspaceCount / factor), 255),
        ];
    }
    return formatColor(rgb);
}

String.prototype.brighter = function () {
    const numbers = this.substring(1);
    return [Number(`0x${numbers.substring(0, 2)}`), Number(`0x${numbers.substring(2, 4)}`), Number(`0x${numbers.substring(4, 6)}`)].brighter();
}

Array.prototype.darker = function () {
    const factor = 0.7;
    let rgb = [
        Math.max(Math.round(this[0] * factor), 0),
        Math.max(Math.round(this[1] * factor), 0),
        Math.max(Math.round(this[2] * factor), 0),
    ];
    return formatColor(rgb);
}

String.prototype.darker = function () {
    const numbers = this.substring(1);
    return [Number(`0x${numbers.substring(0, 2)}`), Number(`0x${numbers.substring(2, 4)}`), Number(`0x${numbers.substring(4, 6)}`)].darker();
}

const MathIEEEremainder = (dividend, divisor) => {
    return dividend - (divisor * Math.round(dividend / divisor))
}

const fillRect = (c, x, y, width, height) => {
    c.fillRect(x, y, width, height);
}

const drawRect = (c, x, y, width, height) => {
    c.rect(x, y, width, height);
    c.stroke();
}

const drawPolygon = (c, xpoints, ypoints, npoints) => {
    c.beginPath();
    c.moveTo(xpoints[0], ypoints[0]);
    for (let i = 1; i < npoints; i++) {
        c.lineTo(xpoints[i], ypoints[i]);
    }
    c.stroke();
}

const fillPolygon = (c, xpoints, ypoints, npoints) => {
    c.beginPath();
    c.moveTo(xpoints[0], ypoints[0]);
    for (let i = 1; i < npoints; i++) {
        c.lineTo(xpoints[i], ypoints[i]);
    }
    c.fill();
}

const doOval = (c, x, y, width, height, startAngle, arcAngle) => {
    const sAngle = startAngle === undefined ? 0 : (Math.PI / 180) * startAngle;
    const aAngle = arcAngle === undefined ? 2 * Math.PI : (Math.PI / 180) * (startAngle + arcAngle);

    c.beginPath();
    if (width == height)
        c.arc(x + (width / 2), y + (height / 2), width / 2, sAngle, aAngle);
    else
        c.ellipse(x + (width / 2), y + (height / 2), width / 2, height / 2, 0, sAngle, aAngle);
}

const drawOval = (c, x, y, width, height, startAngle, arcAngle) => {
    doOval(c, x, y, width, height, startAngle, arcAngle)
    c.stroke();
}

const fillOval = (c, x, y, width, height, startAngle, arcAngle) => {
    doOval(c, x, y, width, height, startAngle, arcAngle);
    c.fill();
}

const drawLine = (c, x1, y1, x2, y2) => {
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
}
