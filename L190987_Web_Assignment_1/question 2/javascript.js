document.getElementById('jobApplicationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Extract form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const resume = document.getElementById('resume').value.split('\\').pop(); // Get file name
    const coverLetter = document.getElementById('coverLetter').value;
    const education = document.getElementById('education').value;
    const school = document.getElementById('school').value;
    const major = document.getElementById('major').value;
    const skills = document.getElementById('skills').value;
    const referenceName = document.getElementById('referenceName').value;
    const referenceContact = document.getElementById('referenceContact').value;

    // Log the form data (simulating data processing)
    console.log({
        firstName,
        lastName,
        email,
        phone,
        resume,
        coverLetter,
        education,
        school,
        major,
        skills,
        referenceName,
        referenceContact
    });

    // Insert data into table
    const tableBody = document.getElementById('applicationsTableBody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${firstName} ${lastName}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${resume}</td>
        <td>${coverLetter}</td>
        <td>${education}, ${school}, ${major}</td>
        <td>${skills}</td>
        <td>${referenceName}, ${referenceContact}</td>
    `;

    tableBody.appendChild(row);

    // Clear form fields
    document.getElementById('jobApplicationForm').reset();
});

document.getElementById('viewTableBtn').addEventListener('click', function () {
    const table = document.getElementById('applicationsTable');
    table.style.display = 'table'; // Show the table
});
