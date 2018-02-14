import * as utils from 'utils';

const fileInput = document.querySelector('.file-input');
const droparea = document.querySelector('.file-drop-area');
let data;

// highlight drag area
utils.addListenerMulti(fileInput, 'dragenter focus click', () => {
    droparea.classList.add('is-active');
});

// back to normal state
utils.addListenerMulti(fileInput, 'dragleave blur drop', () => {
    droparea.classList.remove('is-active');
});