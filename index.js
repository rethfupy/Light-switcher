function changeBrightness() {
    let brightness = document.getElementById('brightness').value;
    let background = document.querySelector('.opacity');
    let color = document.getElementById('color').value;
    
    background.style.backgroundColor = color;
    background.style.opacity = brightness / 100;
}