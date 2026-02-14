const artists = [
  {
    name: "Jhonny Ventura",
    genre: "Merengue",
    image: "images/jhonny.webp",
    bio: "When we talk about the best Dominican singers, one name resonates powerfully: Johnny Ventura," +
         " the undisputed 'King of Merengue.' His influence not only shaped the history of this genre but also propelled it internationally," +
         " making it one of the most popular Latin rhythms in the world."
  },
  {
    name: "Milly Quezada",
    genre: "Merengue",
    image: "images/milly.webp",
    bio: "Milly Quezada's songs have captivated audiences across the globe. Tracks like 'La Mala Suerte,'" +
         "'Dile a Tu Novia,' 'Te Tengo Bajo Control,' 'No Te Apartes de Mí,' 'Para Darte Mi Vida,' and 'Vive' have become anthems of modern merengue,"+
         "crossing borders and bringing Dominican rhythm to every corner of the planet."
  },
  {
    name: "Juan Luis Guerra",
    genre: "Merengue & Bachata",
    image: "images/luis.webp",
    bio: "Juan Luis Guerra's songs are pure poetry set to music. Tracks like 'Burbujas de Amor'" +
          "(Bubbles of Love), 'La Traicionera'(The Traitor), 'Para Ti'(For You), 'Amor de Conuco'(Love from the Farm), 'Frío o Calor'" +
          "(Cold or Heat), 'Bachata Rosa'(Pink Bachata), and 'Las Avispas'(The Wasps) have become anthems of love and romance, winning" + 
          "hearts around the world."
  },
  {
    name: "RobertLove",
    genre: "Bachata & Merengue",
    image: "images/robertlove.webp",
    bio: "With a whole album (Entre el Amor y el Desamor), full of romantic and hera-breaker songs, Robertlove makes music that makes you " +
         " either dance or cry. His biggest hit is 'Me Perdi' (I lost Myself). He is our main artist right now and can be your favorite if you" +
         "give him a try"
  },
  {
    name: "Anthony Santos",
    genre: "Bachata",
    image: "images/anthony.webp",
    bio: "As the lead singer of the group Aventura, Anthony Santos spearheaded a bachata revolution, taking this Dominican" +
         "rhythm to international stages and winning over new audiences.Songs like 'Obsesión,' 'Dile Que No Te Olvide,' 'Un Beso,' 'El Desamor,'" +
         "'Cuando Volverás,' 'Lloraré,' and Mi Santa Mujer' became anthems of modern bachata, transcending borders and bringing Dominican" +
         "romanticism to every corner of the planet."
  },
  {
    name: "Fernando Villalona",
    genre: "Bachata",
    image: "images/fernando.webp",
    bio: "In the pantheon of the best Dominican singers, we find Fernando Villalona, ​​the legendary 'Mayoral of Bachata.'" +
         "A key figure in the development of the genre, Villalona revolutionized bachata with his unique style, powerful voice, and infectious energy," +
         "making it one of the most popular rhythms in the Dominican Republic and the world."
  },
  {
    name: "Hector Acosta",
    genre: "Merengue & Bachata",
    image: "images/torito.webp",
    bio: "El Torito has a knack for getting crowds dancing with his infectious rhythms. Songs like 'Me Voy' and 'Sin Perdón'" +
         "are just a few of the many hits that have resonated at parties and events around the world.Each song is an invitation to the dance floor," +
         "solidifying his place among the best Dominican singers."
  },
  {
    name: "Romeo Santos",
    genre: "Bachata",
    image: "images/romeo.webp",
    bio: "After Aventura's breakup in 2011, Romeo Santos embarked on a solo career that solidified his status as 'The King of Modern Bachata.'" +
      "His debut solo album, 'Fórmula Vol. 1,' broke sales records and established him as one of the top Dominican singers of the moment."
  },
  {
    name: "July Mateo",
    genre: "Merengue",
    image: "images/mateo.webp",
    bio: "Known artistically as Rasputin, this popular Dominican singer, trumpeter, and orchestra leader was part of several orchestras in the 1980s:" +
         "Los Hijos del Rey, Wilfredo Vargas, and Los Kenton.He is considered one of the best interpreters of danceable merengue from the 1980s," +
         "and songs like 'El Carrito' and 'La Primavera,' among others, remain popular today."
  },
  {
    name: "Miriam Cruz",
    genre: "Merengue",
    image: "images/miriam.webp",
    bio: "Miriam Cruz, known as 'The Diva of Merengue,' is one of the greatest Dominican singers of all time. Her powerful and versatile voice," +
         "combined with her undeniable charisma and stage presence, have made her a merengue legend.From her beginnings with the merengue orchestras" +
         "'Las Chicas del Can' and 'Banda Roja,' Miriam Cruz captivated audiences with her unique style and infectious energy."
  },
  {
    name: "Sergio Vargas",
    genre: "Bachata",
    image: "images/sergio.webp",
    bio: "Sergio Vargas, known as 'The Iron Man' of bachata, is one of the greatest Dominican singers of all time. His raspy, powerful voice,"+ 
         "along with his passionate and heartfelt performance style, have made him a bachata legend."
  },
  {
    name: "Bonny Cepeda",
    genre: "Merengue",
    image: "images/bonny.webp",
    bio: "This Dominican singer, pianist, and composer boasts a talented and respected artistic career spanning more than three decades in music." +
         "He is credited as the first artist in his genre to achieve various accolades in Puerto Rico, Panama, Venezuela, Colombia, Peru," +
         "and the Dominican Republic."
  },
  {
    name: "Jose Tamarez Mateo",
    genre: "Merengue",
    image: "images/joseito.webp",
    bio: "Popularly known in the musical field as Joseíto Mateo, one of the great legends of Dominican merengue began his artistic career in 1930," +
      "and given his contributions to merengue and Dominican culture, he has gained some national and international recognition as 'The King of Merengue'"
  },
  {
    name: "Shakira",
    genre: "Pop",
    image: "images/shakira.webp",
    bio: "She took Latin pop to unprecedented heights by combining Colombian influences with elements of reggae and hip-hop in songs like" +
     "“Hips Don’t Lie.” This groundbreaking hit reached number one on the Billboard Hot 100."
  },
  {
    name: "Selena",
    genre: "Tex-Mex",
    image: "images/selena.webp",
    bio: "Known as the Queen of Tejano, she brought regional Mexican sounds to the mainstream with hits like 'Amor prohibido'" +
         "at a time when Spanish- language music had difficulty crossing borders in the United States."
  }
];

const container = document.querySelector(".artists-grid");
const modal = document.querySelector("#artist-modal");
const modalBody = document.querySelector("#modal-body");
const closeButton = document.querySelector(".close-button");

if (container) {
  artists.forEach((artist) => {
  const card = document.createElement("div");
  card.classList.add("artist-card");

  card.innerHTML = `
    <img src="${artist.image}" alt="${artist.name}" width="400" height="300" loading="lazy">
    <h3>${artist.name}</h3>
    <p>${artist.genre}</p>
    <button>View Details</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    modalBody.innerHTML = `
      <h2>${artist.name}</h2>
      <p><strong>Genre:</strong> ${artist.genre}</p>
      <p>${artist.bio}</p>
    `;
    modal.classList.add("open");

    localStorage.setItem("lastViewedArtist", artist.name);
  });

  container.appendChild(card);
  });
}


closeButton.addEventListener("click", () => {
  modal.classList.remove("open");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("open");
  }
});

if (closeButton) {
  closeButton.addEventListener("click", () => {
    modal.classList.remove("open");
  });
}

if (modal) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("open");
    }
  });
}
