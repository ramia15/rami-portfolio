document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const toastElement = document.getElementById('toast');
    const toastMessageElement = document.getElementById('toastMessage');
    const toastIconElement = document.getElementById('toastIcon');

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
            toastMessageElement.textContent = 'Email sent successfully!';
            toastIconElement.innerHTML = '<i class="fas fa-check-circle"></i>';
            toastElement.style.backgroundColor = '#4CAF50';
        } else {
            toastMessageElement.textContent = 'Failed to send email. Please try again later.';
            toastIconElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
            toastElement.style.backgroundColor = '#f44336';
        }
    } catch (error) {
        console.error('Fetch error:', error.message);
        toastMessageElement.textContent = 'An error occurred. Please try again later.';
        toastIconElement.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        toastElement.style.backgroundColor = '#f44336';
    }

    // Display the toast and then hide after a few seconds
    toastElement.classList.add('show');
    setTimeout(() => toastElement.classList.remove('show'), 3000);
});
