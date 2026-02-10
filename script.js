// Sliders
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

// Inputs
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

// Previews
const redPreview = document.getElementById("redPreview");
const greenPreview = document.getElementById("greenPreview");
const bluePreview = document.getElementById("bluePreview");

// Visualización
const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

function updateColor(r, g, b) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    red.value = redInput.value = r;
    green.value = greenInput.value = g;
    blue.value = blueInput.value = b;

    // Color final
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;

    // Previews individuales
    redPreview.style.backgroundColor = `rgb(${r},0,0)`;
    greenPreview.style.backgroundColor = `rgb(0,${g},0)`;
    bluePreview.style.backgroundColor = `rgb(0,0,${b})`;

    // HEX
    const hex = "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexValue.textContent = hex.toUpperCase();
}

// Eventos
[red, green, blue].forEach(() =>
    updateColor(+red.value, +green.value, +blue.value)
);

red.addEventListener("input", () => updateColor(+red.value, +green.value, +blue.value));
green.addEventListener("input", () => updateColor(+red.value, +green.value, +blue.value));
blue.addEventListener("input", () => updateColor(+red.value, +green.value, +blue.value));

redInput.addEventListener("input", () => updateColor(+redInput.value, +green.value, +blue.value));
greenInput.addEventListener("input", () => updateColor(+red.value, +greenInput.value, +blue.value));
blueInput.addEventListener("input", () => updateColor(+red.value, +green.value, +blueInput.value));

// Inicialización
updateColor(0, 0, 0);
