document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const toastElement = document.getElementById('toast');
    const toastMessageElement = document.getElementById('toastMessage');

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            toastMessageElement.textContent = 'Email sent successfully!';
            toastElement.style.backgroundColor = '#4CAF50';
        } else {
            toastMessageElement.textContent = 'Failed to send email. Please try again later.';
            toastElement.style.backgroundColor = '#f44336';
        }
    } catch (error) {
        toastMessageElement.textContent = 'An error occurred. Please try again later.';
        toastElement.style.backgroundColor = '#f44336';
    }

    // Display the toast and then hide after a few seconds
    toastElement.classList.add('show');
    setTimeout(() => toastElement.classList.remove('show'), 3000);
});
