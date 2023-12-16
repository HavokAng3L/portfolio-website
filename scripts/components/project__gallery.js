const GITHUB_REPOS_URL = "https://api.github.com/users/HavokAng3L/repos";
const projectGallery = document.getElementById("project-section__gallery");

class Card {
  constructor(name, url, description) {
    this.name = name;
    this.url = url;
    this.description = description;
  }

  createCard() {
    // Initializing the card
    const card = document.createElement("div");

    // Initializing the recipe for the card (What each card MUST contain for this section)
    const cardTitle = document.createElement("h3");
    const cardUrl = document.createElement("a");
    const cardDesc = document.createElement("p");

    // setting the class to gallery__card for styling
    card.setAttribute("class", "gallery__card");
    cardUrl.setAttribute('href', `${this.url}`)
    cardUrl.setAttribute('target', '_blank');

    // setting the text content within the important pieces
    cardTitle.textContent = this.name;
    cardUrl.textContent = this.url;
    cardDesc.textContent = this.description;

    card.appendChild(cardTitle);
    card.appendChild(cardUrl);
    card.appendChild(cardDesc);

    return card;
  }
}

function cardGenerator(name, url, desc) {
  const card = new Card(name, url, desc);
  projectGallery.appendChild(card.createCard());
}

fetch(GITHUB_REPOS_URL)
  .then((res) => res.json())
  .then((res) => {
    for (const project of res) {
      if (project.stargazers_count > 0) {
        cardGenerator(project.name, project.html_url, project.description);
      }
    }
  });
