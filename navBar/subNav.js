window.onload = changeLinks;

function changeLinks() {
    var subject = localStorage.getItem('subject');
    var basePath2 = localStorage.getItem('folder');

    var chapterLink = document.getElementById('sec-1');
    var syllabusLink = document.getElementById('sec-2');
    var questionLink = document.getElementById('sec-3');
    var solutionLink = document.getElementById('sec-4');

    var basePath = '';

    // Check if basePath2 is not empty or undefined
    if (basePath2) {
        basePath += '../' + basePath2 + '/';
    }

    chapterLink.href = basePath + (subject ? subject + '1.html' : '');
    syllabusLink.href = basePath + (subject ? subject + '2.html' : '');
    questionLink.href = basePath + (subject ? subject + '3.html' : '');
    solutionLink.href = basePath + (subject ? subject + '4.html' : '');
    loadContent(chapterLink.href, 'content');
}

function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// When a link is clicked, load the content of the corresponding section
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the hyperlink
        loadContent(this.href, 'content');
    });
});
