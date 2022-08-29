const form = document.getElementById("form");
const cardDiv = document.getElementById("card-div");
const cardDiv2Last = document.getElementById("card-div2-last");
const loading = document.getElementById("lds-circle");
let servicePresent = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  loading.style.display = "flex";
  const bill = e.target.bill.value;
  const people = e.target.people.value;
  const service = e.target.service.value;

  setTimeout(() => {
    if (!bill) {
      let p = document.createElement("p");
      p.innerText = "Bill Amount Cannot Be Blank";
      cardDiv.appendChild(p);
      loading.style.display = "none";
    }
    if (!people) {
      let p = document.createElement("p");
      p.innerText = "Number Of Users Must Be Greater Than Zero";
      cardDiv.appendChild(p);
      loading.style.display = "none";
    }
    if (service === "Choose...") {
      let p = document.createElement("p");
      p.innerText = "You Must Select A Service";
      cardDiv.appendChild(p);
      loading.style.display = "none";
    } else if (service === "Great - 20%") {
      servicePresent = 20;
    } else if (service === "Good - 10%") {
      servicePresent = 10;
    } else if (service === "Bad - 2%") {
      servicePresent = 2;
    }
    setTimeout(() => {
      cardDiv.innerHTML = "";
    }, 2500);

    if (bill && people && service !== "Choose...") {
      const percent = +bill * (servicePresent / 100);
      const sum = +bill + percent;
      const eachP = sum / people;
      cardDiv2Last.innerHTML = `
                <p>Tip Amount $ ${percent}</p>
                <p>Total Amount $ ${sum}</p>
                <p>Each Person Owes $ ${eachP}</p>
            `;
      loading.style.display = 'none'
      setTimeout(() => {
        e.target.reset();
        cardDiv2Last.innerHTML = "";
      }, 3500);
    }
  }, 1000);
});
