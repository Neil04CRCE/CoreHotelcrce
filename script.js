// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Calculate total price for booking
function calculateTotalPrice(roomRate) {
    const checkinDate = new Date(document.getElementById('checkinDate').value);
    const checkoutDate = new Date(document.getElementById('checkoutDate').value);

    const timeDiff = checkoutDate - checkinDate;
    const nights = timeDiff / (1000 * 3600 * 24); // Calculate nights
    const totalPrice = roomRate * nights;

    if (!isNaN(totalPrice) && totalPrice > 0) {
        document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    } else {
        document.getElementById('totalPrice').textContent = 'Invalid dates';
    }
}