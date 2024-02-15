var Map = new Datamap({
  element: document.getElementById("map"),
  projection: "mercator",
  // responsive: true,
  geographyConfig: {
    popupOnHover: true,
    highlightOnHover: true,
    highlightFillColor: "#BCBCBC",
    highlightBorderWidth: 0,
    popupTemplate: function (geography) {
      //this function should just return a string
      return '<div class="custom-popover"></div>';
    },
  },
  fills: {
    defaultFill: "#E2E2E2",
  },
  // data: {
  //      USA: { fillKey: "authorHasTraveledTo" },
  // },
});

Map.resize();
var events = [
  {
    name: "CAN",
    radius: 5,
    centered: "USA",
  },
  {
    name: "RUS",
    radius: 5,
    centered: "RUS",
  },
  {
    name: "JPN",
    radius: 5,
    centered: "JPN",
  },
];

//draw bubbles for bombs
if (events.length > 0) {
  Map.bubbles(events);
  addCircles();
}

// '<div class="hoverinfo">' + data.name,
// "<br/>Payload: " + data.yield + " kilotons",
// "<br/>Country: " + data.country + "",
// "<br/>Date: " + data.date + "",
// "</div>",

function addCircles() {
  const bubbles = document.getElementsByClassName("bubbles");
  const bubblesArray = document.getElementsByClassName("datamaps-bubble");
  // const bubble = document.getElementById("bubble");

  for (let i = 0; i < bubblesArray.length; i++) {
    const circle_0 = drawCircle(
      0.5,
      5,
      bubblesArray[i].attributes.cx.value,
      bubblesArray[i].attributes.cy.value,
      0
    );
    const circle_1 = drawCircle(
      1,
      9,
      bubblesArray[i].attributes.cx.value,
      bubblesArray[i].attributes.cy.value,
      0.2
    );

    const circle_2 = drawCircle(
      1,
      11,
      bubblesArray[i].attributes.cx.value,
      bubblesArray[i].attributes.cy.value,
      0.6
    );
    const circle_3 = drawCircle(
      1,
      14,
      bubblesArray[i].attributes.cx.value,
      bubblesArray[i].attributes.cy.value,
      0.8
    );
    bubbles[0].appendChild(circle_0);
    bubbles[0].appendChild(circle_1);
    bubbles[0].appendChild(circle_2);
    bubbles[0].appendChild(circle_3);
  }
}

function drawCircle(stokeWidth, radius, cx, cy, animationDelay) {
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("r", radius);
  circle.setAttribute("stroke", "blue");
  circle.setAttribute("stroke-width", stokeWidth);
  circle.setAttribute("fill", "transparent");

  circle.classList.add("custom-bubble");
  circle.setAttribute("cx", cx); // Set position
  circle.setAttribute("cy", cy);
  circle.style.setProperty("--radius", `${radius}`);
  circle.style.setProperty("--radius-max", `${radius + 4}`);
  circle.style.setProperty("--animation-delay", `${animationDelay}s`);
  return circle;
}
