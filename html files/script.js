/*-- Button Section -- */

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const view = document.getElementById('view');
const review = document.getElementById('review');

function showView () {
    view.classList.add('show');
    review.classList.remove('show');
}

function showReview () {
    review.classList.add('show');
    view.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function () {
    showView();
});

btn1.addEventListener('click', showView);
btn2.addEventListener('click', showReview);

