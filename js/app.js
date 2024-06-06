const portfolioArray = [
  {
    title: "example app",
    imageUrl: "./images/Square_200x200.svg",
    description: "placeholder description here",
    gitLink: "https://github.com",
  },
  {
    title: "example app 2",
    imageUrl: "./images/Square_200x200.svg",
    description: "placeholder description here",
    gitLink: "https://github.com",
  },
  {
    title: "example app 3",
    imageUrl: "./images/Square_200x200.svg",
    description: "placeholder description here",
    gitLink: "https://github.com",
  },
  {
    title: "example app 4",
    imageUrl: "./images/Square_200x200.svg",
    description: "placeholder description here",
    gitLink: "https://github.com",
  },
  {
    title: "example app 5",
    imageUrl: "./images/Square_200x200.svg",
    description: "placeholder description here",
    gitLink: "https://github.com",
  },
  {
    title: "example app 6",
    imageUrl: "./images/Square_200x200.svg",
    description: "placeholder description here",
    gitLink: "https://github.com",
  },
  {
    title: "example app 7",
    imageUrl: "./images/Square_200x200.svg",
    description: "placeholder description here",
    gitLink: "https://github.com",
  },
  {
    title: "example app 8",
    imageUrl: "./images/Square_200x200.svg",
    description: "placeholder 8",
    gitLink: "https://github.com",
  },
];

const techArray = [
  {
    techName: "Java",
    imageUrl: "./images/tech-icons/java-original.svg",
  },
  {
    techName: "Javascript",
    imageUrl: "./images/tech-icons/javascript-plain.svg",
  },
  {
    techName: "HTML",
    imageUrl: "./images/tech-icons/html5-original.svg",
  },
  {
    techName: "CSS",
    imageUrl: "./images/tech-icons/css3-original.svg",
  },
  {
    techName: "C#",
    imageUrl: "./images/tech-icons/csharp-plain.svg",
  },
  {
    techName: "Python",
    imageUrl: "./images/tech-icons/python-original.svg",
  },
];

function element(elementID) {
  return document.getElementById(elementID);
}

function buildPortfolioBox(
  baseElementID,
  projectTitle,
  imageURL,
  description,
  github
) {
  var baseElement = element(baseElementID);
  var newDiv = document.createElement("div");

  newDiv.innerHTML =
    `<img src="${imageURL}" alt="Portfolio Image">` +
    `<h2 class="project-title">${projectTitle}</h2>` +
    `<p class="project-description">${description}</p>` +
    `<ul>` +
    `<li><a href="${github}">` +
    `<img src="./images/tech-icons/github-original-wordmark.svg">` +
    `</a></li>` +
    `<li><a href="${github}">` +
    `<img src="./images/tech-icons/right-arrow.svg">` +
    `</a></li>` +
    `</ul>`;
  baseElement.appendChild(newDiv);
}

function buildTechBox(baseElementID, techName, imageURL) {
  var baseElement = element(baseElementID);
  var newDiv = document.createElement("div");

  newDiv.innerHTML =
    `<img src="${imageURL}" alt="Tech Image">` +
    `<h2 class="tech-name">${techName}</h2>`;
  baseElement.appendChild(newDiv);
}

function populateProjects() {
  for (var i = 0; i < portfolioArray.length; i++) {
    buildPortfolioBox(
      "portfolio",
      portfolioArray[i].title,
      portfolioArray[i].imageUrl,
      portfolioArray[i].description,
      portfolioArray[i].gitLink
    );
  }
}

function populateTechs() {
  for (var i = 0; i < techArray.length; i++) {
    buildTechBox("experience", techArray[i].techName, techArray[i].imageUrl);
  }
}

populateProjects();
populateTechs();
