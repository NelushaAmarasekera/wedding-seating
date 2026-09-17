const guests = [
  { firstName: "Oshadhi", lastName: "Amarasekera", table: 2 },
  { firstName: "Subodhi", lastName: "Amarasekera", table: 2 },
  { firstName: "Anoma", lastName: "Amarasekera", table: 2 },
  { firstName: "Keerthi", lastName: "Amarasekera", table: 3 },
  { firstName: "Subhavi", lastName: "Kariyawasam", table: 4 },
  { firstName: "Tachini", lastName: "Fernando", table: 5 },
  { firstName: "Parami", lastName: "Anuttara", table: 10 },
  { firstName: "Binuri", lastName: "Karapitiya", table: 11 },
  { firstName: "Ashan", lastName: "Thebuwana", table: 9 },
  { firstName: "Ashan", lastName: "Senanayake", table: 7 },
  { firstName: "Supun", lastName: "Amarasekera", table: 16 },
  { firstName: "Amanda", lastName: "Amarasekera", table: 15 },
  { firstName: "Indika", lastName: "Wijesinghe", table: 12 },
  { firstName: "Enuka", lastName: "Wijesinghe", table: 14 },
  { firstName: "Kavindi", lastName: "Wijesinghe", table: 13 }
];

function findGuest() {

  const firstName = document
    .getElementById("firstName")
    .value
    .trim()
    .toLowerCase();

  const lastName = document
    .getElementById("lastName")
    .value
    .trim()
    .toLowerCase();

  const result = document.getElementById("result");

  // Nothing entered
  if (!firstName && !lastName) {
    result.innerHTML = `
      <h3>Please enter a name</h3>
      <p>Enter your first name, last name, or both to find your table.</p>
    `;
    return;
  }

  // BOTH first and last name entered → Single guest
  if (firstName && lastName) {

    const guest = guests.find(g =>
      g.firstName.toLowerCase() === firstName &&
      g.lastName.toLowerCase() === lastName
    );

    if (guest) {

      result.innerHTML = `
        <h2>Welcome, ${guest.firstName} ${guest.lastName}</h2>

        <p class="table-label">Your table is</p>

        <h1>${guest.table}</h1>

        <p class="message">
          We are so grateful you're here to celebrate this chapter with us.
        </p>

        <img
          src="./floorplan.png"
          alt="Wedding Floor Plan"
          class="floorplan"
        >
      `;

    } else {

      result.innerHTML = `
        <h3>We couldn't find your name</h3>

        <p>Please check the spelling of your first and last name and try again.</p>
      `;
    }

    return;
  }

  // ONLY first name OR ONLY last name entered
  const matches = guests.filter(g => {

    if (firstName) {
      return g.firstName.toLowerCase() === firstName;
    }

    return g.lastName.toLowerCase() === lastName;

  });

  if (matches.length > 0) {

    let guestList = "";

    matches.forEach(g => {

      guestList += `
        <div class="guest-card">
          <div class="guest-name">${g.firstName} ${g.lastName}</div>
          <div class="guest-table">Table ${g.table}</div>
        </div>
      `;

    });

    result.innerHTML = `
      <h2>Guests Found</h2>

      <p class="message">
        We found ${matches.length} guest${matches.length > 1 ? "s" : ""}.
      </p>

      <div class="guest-list">
        ${guestList}
      </div>
    `;

  } else {

    result.innerHTML = `
      <h3>We couldn't find that name</h3>

      <p>Please check the spelling and try again.</p>
    `;

  }

}