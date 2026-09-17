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

  const search = document
    .getElementById("searchName")
    .value
    .trim()
    .toLowerCase();

  const result = document.getElementById("result");

  // Empty search
  if (search === "") {
    result.innerHTML = `
      <h3>Please enter a name</h3>
      <p>Enter your first name, last name, or full name to find your table.</p>
    `;
    return;
  }

  // Search by first name, last name, OR full name
  const matches = guests.filter(guest => {
    const fullName = `${guest.firstName} ${guest.lastName}`.toLowerCase();

    return (
      fullName === search ||
      guest.firstName.toLowerCase() === search ||
      guest.lastName.toLowerCase() === search
    );
  });

  // No match
  if (matches.length === 0) {
    result.innerHTML = `
      <h3>We couldn't find that name</h3>
      <p>Please check the spelling and try again.</p>
    `;
    return;
  }

  // ONE guest found
  if (matches.length === 1) {
    const guest = matches[0];

    result.innerHTML = `
      <h2>Welcome, ${guest.firstName} ${guest.lastName}</h2>

      <p class="table-label">Your table is</p>

      <h1>${guest.table}</h1>

      <p class="message">
        We are so grateful you're here to celebrate this chapter with us.
      </p>

      <img
        src="floorplan.png"
        alt="Wedding Floor Plan"
        class="floorplan"
      >
    `;

    return;
  }

  // MULTIPLE guests found
  matches.sort((a, b) => a.table - b.table);

  let guestCards = "";

  matches.forEach(guest => {
    guestCards += `
      <div class="guest-card">
        <div class="guest-name">${guest.firstName} ${guest.lastName}</div>
        <div class="guest-table">Table ${guest.table}</div>
      </div>
    `;
  });

  result.innerHTML = `
    <h2>Guests Found</h2>

    <p class="message">
      We found ${matches.length} guests matching "<strong>${search}</strong>".
    </p>

    <div class="guest-list">
      ${guestCards}
    </div>

    <p class="message seating-message">
      Here is the seating plan so you can see where everyone is seated.
    </p>

    <img
      src="floorplan.png"
      alt="Wedding Floor Plan"
      class="floorplan"
    >
  `;
}