document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-Button');
    const toggleContent = document.getElementById('toggle-Content');

    toggleButton.addEventListener('click', function() {
        if (toggleContent.style.display === 'none' || toggleContent.style.display === '') {
            toggleContent.style.display = 'block';
        } else {
            toggleContent.style.display = 'none';
        }
    });
});
