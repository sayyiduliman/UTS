function toggleInfo(paragraphId, buttonId) {
    var paragraph = document.getElementById(paragraphId);
    var button = document.getElementById(buttonId);

    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
        paragraph.style.display = 'block';
        button.textContent = 'Less Info';
    } else {
        paragraph.style.display = 'none';
        button.textContent = 'More Info';
    }
}