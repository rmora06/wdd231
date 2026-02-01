const container = document.getElementById("courses");
const totalCreditsSpan = document.getElementById("totalCredits");

function displayCourses(list) {
  container.innerHTML = "";

  const total = list.reduce((sum, course) => sum + course.credits, 0);
  totalCreditsSpan.textContent = total;

  list.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h3>${course.subject} ${course.number}</h3>
      <p>${course.title}</p>
      <p>${course.credits} credits</p>
    `;

    card.addEventListener("click", () => {
    displayCourseDetails(course);
  });

    container.appendChild(card);
    
  });
}

// Show all when loads
displayCourses(courses);

// Buttons
document.getElementById("all").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("wdd").addEventListener("click", () => {
  const filtered = courses.filter(c => c.subject === "WDD");
  displayCourses(filtered);
});

document.getElementById("cse").addEventListener("click", () => {
  const filtered = courses.filter(c => c.subject === "CSE");
  displayCourses(filtered);
});
