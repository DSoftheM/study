const card = document.querySelector('.body-card');
const center = document.querySelector('.center');

card.addEventListener('mouseenter', () => {
    center.classList.add('move');
    center.classList.remove('moveReversed');
});
card.addEventListener('mouseleave', () => {
    center.classList.add('moveReversed');
    center.classList.remove('move');
});