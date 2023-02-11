let card = [
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
const card2 = document.querySelector(".card-two");
const card3 = document.querySelector(".card-three");
const card4 = document.querySelector(".card-four");

card1.innerHTML =
  card[0].sportingClub + " year:" + card[0].year + " " + card[0].description;
card2.innerHTML =
  card[1].sportingClub + " year:" + card[1].year + " " + card[1].description;
card3.innerHTML =
  card[2].sportingClub + " year:" + card[2].year + " " + card[2].description;
card4.innerHTML =
  card[3].sportingClub + "  " + card[3].year + "   " + card[3].description;

/*function displayCards() {
  var result = '';
	card.forEach(function(cards) {
    result += '<div class="item col-sm-4"><h2>' + card.sportingClub +  '"></div><p class="text-right">' + card.y + '</p></div></div>';
});

document.getElementById('.card-one').innerHTML = result;

}

displayCards();
*/
