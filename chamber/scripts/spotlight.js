const spotlightContainer = document.querySelector("#spotlight-container");

async function getSpotlights() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Network response was not ok");

    const members = await response.json();
    displaySpotlights(members);
  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

function displaySpotlights(members) {
  if (!spotlightContainer) return;

    // ✔️ Only Silver (2) and Gold (3)
    console.log("Members loaded:", members);

  const qualified = members.filter(
    member => member.level === 2 || member.level === 3
  );

  // ✔️ Random order
  const shuffled = qualified.sort(() => 0.5 - Math.random());

  // ✔️ Show 2 o 3 only
  const selected = shuffled.slice(0, Math.random() > 0.5 ? 3 : 2);

  spotlightContainer.innerHTML = "";

  selected.forEach(member => {
    const card = document.createElement("article");
    card.classList.add("spotlight");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <h3>${member.name}</h3>
      <p><strong>Membership:</strong> ${getLevel(member.membership)}</p>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    spotlightContainer.appendChild(card);
  });
}

function getLevel(level) {
  if (level === 3) return "Gold";
  if (level === 2) return "Silver";
  return "Member";
}

getSpotlights();
