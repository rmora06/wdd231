const results = document.querySelector("#results");

const params = new URLSearchParams(window.location.search);

const fullname = params.get("fullname");
const email = params.get("email");
const artist = params.get("artist");
const message = params.get("message");

if (results) {
  results.innerHTML = `
    <p><strong>Name:</strong> ${fullname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Artist:</strong> ${artist}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
}

if (!fullname || !email) {
  results.innerHTML = "<p>Missing required information.</p>";
}
