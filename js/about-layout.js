document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.employee-grid');
    if (!container) return;

    const circles = container.querySelectorAll('.employee-item');
    const numCircles = circles.length;

    // Use a setTimeout to ensure the container has rendered and has accurate dimensions
    // Or just use fixed dimensions for the layout circle for now.
    // Let's use fixed dimensions and adjust if needed.

    // Define the radius of the circle on which employee items will be placed
    const layoutRadius = 250; // Adjust as needed
    const circleDiameter = 100; // From CSS .employee-item width/height

    // Position the container in the center
    container.style.width = `${layoutRadius * 2 + circleDiameter}px`;
    container.style.height = `${layoutRadius * 2 + circleDiameter}px`;
    // The #employee-display flexbox will center this 'container' div.

    circles.forEach((circle, index) => {
        const angle = (index / numCircles) * 2 * Math.PI; // Angle in radians

        // Calculate the x and y coordinates on the circle
        // Adjust by half the circleDiameter to center the item's own center on the layout circle
        const x = layoutRadius * Math.cos(angle) + layoutRadius;
        const y = layoutRadius * Math.sin(angle) + layoutRadius;

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    });
});
