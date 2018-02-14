const fileInput = document.querySelector('.file-input');
const droparea = document.querySelector('.file-drop-area');
let data;

// highlight drag area
// Requires Utils.js to be imported first
addListenerMulti(fileInput, 'dragenter focus click', () => {
    droparea.classList.add('is-active');
});

// back to normal state
// Requires Utils.js to be imported first
addListenerMulti(fileInput, 'dragleave blur drop', () => {
    droparea.classList.remove('is-active');
});