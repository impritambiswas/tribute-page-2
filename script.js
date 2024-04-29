function openMenu() {
    let x = document.getElementById('menu');
    if (x.style.translate === '50vw') {
        x.style.translate = '0vw';
    } else {
        x.style.translate = '50vw';
    }
}