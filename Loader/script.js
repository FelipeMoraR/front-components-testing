document.addEventListener('DOMContentLoaded', () => {
   
    const closeLoaderBtn = document.getElementById('close-loader');
    const topFace = document.querySelector('.top-face');
    const rightFace = document.querySelector('.right-face');
    const bottomFace = document.querySelector('.bottom-face');
    const leftFace = document.querySelector('.left-face');
    const centralLogo = document.querySelector('.central-logo');
    const textLoader = document.querySelector('.loader-text');
    console.log(textLoader);

    closeLoaderBtn.addEventListener('click', () => {
        topFace.classList.toggle('hide');
        rightFace.classList.toggle('hide');
        bottomFace.classList.toggle('hide');
        leftFace.classList.toggle('hide');
        centralLogo.classList.toggle('hide');
        textLoader.classList.toggle('hide');
    });

})