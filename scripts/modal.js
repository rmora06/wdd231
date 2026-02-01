const courseDetails = document.querySelector("#course-details");

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>

    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
    courseDetails.showModal();
    
    // Close button
    document
        .querySelector("#closeModal")
        .addEventListener("click", () => {
            courseDetails.close();
        });
  
    // Click outside to close
  courseDetails.addEventListener("click", (e) => {
    const rect = courseDetails.getBoundingClientRect();

    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      courseDetails.close();
    }
  });
}