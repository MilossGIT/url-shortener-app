document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('urlForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch('/shortUrls', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      form.style.display = 'none';
      successMessage.style.display = 'block';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  });
});
