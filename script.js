let cards = [
  {
    sportingClub: ["Manchester united  "],
    year: ["2003-2008 "],
    description: [
      "Ronaldo's move to Manchester United was completed on 12 August 2003, too late for the 2003 FA Community Shield but in time for their game against Bolton Wanderers on the opening day of the 2003–04 season, and made him the first Portuguese player to sign for the club.",
    ],
  },
  {
    sportingClub: ["Real madrid"],
    year: ["2009-2018"],
    description: [
      "Ahead of the 2009–10 season, Ronaldo joined Real Madrid for a world record transfer fee at the time of £80 million (€94 million).His contract, which ran until 2015, was worth €11 million per year and contained a €1 billion buy-out clause.",
    ],
  },
  {
    sportingClub: ["Juventus"],
    year: ["2018-2021"],
    description: [
      "Despite months of negotiation to sign a new Real Madrid contract, on 10 July 2018, Ronaldo signed a four-year contract with Italian club Juventus after completing a €100 million transfer, which included an additional €12 million in other fees and solidarity contributions to Ronaldo's youth clubs.",
    ],
  },
  {
    sportingClub: ["Al nassr"],
    year: ["2022"],
    description: [
      "On 30 December 2022, Saudi club Al Nassr reached an agreement for Ronaldo to join the club effective 1 January 2023, signing a contract until 2025. As reported by Fabrizio Romano of The Guardian, Ronaldo received the highest football salary in history, worth €200 million per year, this included an annual guaranteed football salary of €90 million.",
    ],
  },
];

const card1 = document.querySelector(".card-one");

//foreach da anein bo away bo har danekyan awaman bobkat w function eky anonym da anein ka parameter akay nawakay nzikbet la eshakawa
cards.forEach(function (card, index) {
  //elementeky taza drust akain w aikaina naw class
  let cardEl = document.createElement("div");
  cardEl.classList.add("card");
  card1.appendChild(cardEl);

  let contentEl = document.createElement("div");
  cardEl.appendChild(contentEl);

  //heading 2 ayayn ba nawy aw yanay yary krdwa ley enja content akay te akain
  let spClubEl = document.createElement("h2");
  spClubEl.textContent = card.sportingClub;
  contentEl.appendChild(spClubEl);

  let yearEl = document.createElement("h3");
  yearEl.textContent = card.year;
  contentEl.appendChild(yearEl);

  let descEl = document.createElement("p");
  descEl.textContent = card.description;
  contentEl.appendChild(descEl);
});
