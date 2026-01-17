const url = 'data/members.json';
const container = document.querySelector('#members');

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

const displayMembers = (members) => {
  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    const name = document.createElement('h3');
    name.textContent = member.name;

    const img = document.createElement('img');
    img.src = `images/${member.image}`;
    img.alt = member.name;
    img.loading = "lazy";

    const address = document.createElement('p');
    address.textContent = member.address;

    const phone = document.createElement('p');
    phone.textContent = member.phone;

    const link = document.createElement('a');
    link.href = member.website;
    link.textContent = "Visit Website";

    card.append(name, img, address, phone, link);
    container.appendChild(card);
  });
};

// Toggle views
document.querySelector('#grid').addEventListener('click', () => {
  container.classList.add('grid-view');
  container.classList.remove('list-view');
});

document.querySelector('#list').addEventListener('click', () => {
  container.classList.add('list-view');
  container.classList.remove('grid-view');
});

// Footer dates
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

getMembers();
