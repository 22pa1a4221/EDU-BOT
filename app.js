// app.js
document.addEventListener('DOMContentLoaded', function () {
    displayCourses();
});

function displayCourses() {
    const courses = [
        { id: 'math', title: 'Mathematics', content: 'Learn the basics of mathematics.' },
        { id: 'python', title: 'Python Programming', content: 'Introduction to Python programming.' },
        { id: 'science', title: 'Introduction to Science', content: 'Explore the wonders of science.' },
        { id: 'history', title: 'World History', content: 'A journey through historical events.' },
    ];

    const courseListDiv = document.getElementById('courseList');
    courseListDiv.innerHTML = '';

    courses.forEach(course => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'courseCard';
        cardDiv.innerHTML = `<h3>${course.title}</h3><p>${course.content}</p>`;
        courseListDiv.appendChild(cardDiv);
    });
}

function enroll() {
    const courseId = document.getElementById('courseIdInput').value;
    // Implement the enrollment logic (e.g., send a request to the server)
    alert(`Enrolled in course with ID: ${courseId}`);
}

function search() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const courses = [
        { id: 'math', title: 'Mathematics', content: 'Learn the basics of mathematics.' },
        { id: 'python', title: 'Python Programming', content: 'Introduction to Python programming.' },
        { id: 'science', title: 'Introduction to Science', content: 'Explore the wonders of science.' },
        { id: 'history', title: 'World History', content: 'A journey through historical events.' },
    ];

    const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchQuery));

    const courseListDiv = document.getElementById('courseList');
    courseListDiv.innerHTML = '';

    filteredCourses.forEach(course => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'courseCard';
        cardDiv.innerHTML = `<h3>${course.title}</h3><p>${course.content}</p>`;
        courseListDiv.appendChild(cardDiv);
    });
}
