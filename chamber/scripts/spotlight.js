// Membership levels:
// 1 = Member
// 2 = Silver
// 3 = Gold
// console.log("spotlight.js loaded");

// const spotlightContainer = document.querySelector("#spotlight-container");
// const membersURL = "data/members.json";

// async function getSpotlights() {
//   try {
//     const response = await fetch(membersURL);
//     if (response.ok) {
//       const data = await response.json();
//       displaySpotlights(data);
//     } else {
//       throw Error("Members data not available");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// function displaySpotlights(members) {
//   // 👉 Solo silver (2) y gold (3)
//   const qualifiedMembers = members.filter(
//     member => member.membership === 2 || member.membership === 3
//   );

//   // 👉 Randomizar
//   qualifiedMembers.sort(() => 0.5 - Math.random());

//   // 👉 Mostrar 2 o 3
//   const numberToShow = Math.floor(Math.random() * 2) + 2;
//   const selectedMembers = qualifiedMembers.slice(0, numberToShow);

//   spotlightContainer.innerHTML = "";

//   selectedMembers.forEach(member => {
//     const card = document.createElement("article");
//     card.classList.add("spotlight");

//     card.innerHTML = `
//       <img src="images/${member.image}" alt="${member.name} logo">
//       <h3>${member.name}</h3>
//       <p><strong>Membership:</strong> ${member.membership === 3 ? "Gold" : "Silver"}</p>
//       <p>${member.address}</p>
//       <p>${member.phone}</p>
//       <a href="${member.website}" target="_blank">Visit Website</a>
//     `;

//     spotlightContainer.appendChild(card);
//   });
// }

// getSpotlights();

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

    // ✔️ Solo Silver (2) y Gold (3)
    console.log("Members loaded:", members);

  const qualified = members.filter(
    member => member.level === 2 || member.level === 3
  );

  // ✔️ Random order
  const shuffled = qualified.sort(() => 0.5 - Math.random());

  // ✔️ Mostrar solo 2 o 3
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
