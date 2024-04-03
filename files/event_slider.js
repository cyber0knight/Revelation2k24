document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll('.slider span');

    spans.forEach(span => {
        span.addEventListener('mouseover', () => {
            // Stop the animation
            document.querySelector('.slider').style.animationPlayState = 'paused';

            // Highlight the hovered span image
            // span.style.border = '2px solid white';
        });

        span.addEventListener('mouseout', () => {
            // Resume the animation
            document.querySelector('.slider').style.animationPlayState = 'running';

            // Remove the border highlighting
            span.style.border = 'none';
        });
    });
});
