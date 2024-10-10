document.getElementById('demographics-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const gender = document.getElementById('gender').value;
    const condition = document.getElementById('mental-health-condition').value;

    document.getElementById('demographics-output').innerHTML = `
        <h3>Demographics Summary</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Age: ${age}</p>
        <p>Location: ${location}</p>
        <p>Gender: ${gender}</p>
        <p>Mental Health Condition: ${condition}</p>
    `;
});

document.getElementById('submit-usage-patterns').addEventListener('click', function() {
    const therapyFrequency = document.getElementById('therapy-frequency').value;
    const forumParticipation = document.getElementById('forum-participation').value;
    const contentInteractions = document.getElementById('content-interactions').value;

    document.getElementById('usage-patterns-output').innerHTML = `
        <h3>Usage Patterns Summary</h3>
        <p>Virtual Therapy Sessions per Week: ${therapyFrequency}</p>
        <p>Forum Participation (posts per week): ${forumParticipation}</p>
        <p>Educational Content Interactions: ${contentInteractions}</p>
    `;
});

const counselors = [
    { name: 'Jamaya D. Binns', expertise: 'Eating Disorders', availability: 'Mon-Fri', rating: 5.0 },
    { name: 'Kaitlyn M. Ingram', expertise: 'PTSD and Trauma', availability: 'Tue-Thurs', rating: 4.7 },
    { name: 'Letitia Minor', expertise: 'Anxiety and Depression', availability: 'Mon-Fri', rating: 4.9 }
];

document.addEventListener('DOMContentLoaded', function() {
    const counselorList = document.getElementById('counselors-list');
    
    counselors.forEach(counselor => {
        const counselorDiv = document.createElement('div');
        counselorDiv.innerHTML = `
            <h3>${counselor.name}</h3>
            <p>Expertise: ${counselor.expertise}</p>
            <p>Availability: ${counselor.availability}</p>
            <p>User Rating: ${counselor.rating} / 5</p>
            <hr>
        `;
        counselorList.appendChild(counselorDiv);
    });
});


document.getElementById('session-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const sessionNotes = document.getElementById('session-notes').value;
    const progressUpdate = document.getElementById('progress-update').value;
    const feedback = document.getElementById('feedback').value;

    document.getElementById('session-output').innerHTML = `
        <h3>Session Data Summary</h3>
        <p><strong>Session Notes:</strong> ${sessionNotes}</p>
        <p><strong>Progress Update:</strong> ${progressUpdate}</p>
        <p><strong>User Feedback:</strong> ${feedback}</p>
    `;
});
// Handle support form submission
document.getElementById('support-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const issue = document.getElementById('issue').value;

    if (name === '' || issue === '') {
        alert('Please fill in all fields');
        return;
    }

    // Simulate sending form data to server
    document.getElementById('support-response').textContent =
    "Thank you, ${name}! Your message has been sent. Well get back to you shortly regarding ${issue}";
});