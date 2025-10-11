/*Java Script for Nearby Page Dropdowns*/
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const dropdown = button.parentElement.nextElementSibling;
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
            button.textContent = "▼";
        } else {
            dropdown.style.display = "block";
            button.textContent = "▲";
        }
    });
});

