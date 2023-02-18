function changeBrightness() {
    let brightness = document.getElementById('brightness').value;
    let background = document.querySelector('.opacity');
    
    background.style.opacity = brightness / 100;
}