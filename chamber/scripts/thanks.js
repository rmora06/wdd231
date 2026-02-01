const params = new URLSearchParams(window.location.search);

const submittedData = {
  "First Name": params.get("fname"),
  "Last Name": params.get("lname"),
  "Email": params.get("email"),
  "Mobile Number": params.get("phone"),
  "Business Name": params.get("organization"),
  "Submitted On": params.get("timestamp")
};

const infoList = document.getElementById("infoList");

for (const label in submittedData) {
  const value = submittedData[label];

  if (value) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${label}:</strong> ${value}`;
    infoList.appendChild(li);
  }
}