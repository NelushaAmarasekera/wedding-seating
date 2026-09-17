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

  const guest = guests.find(
    g =>
      g.firstName.toLowerCase() === firstName &&
      g.lastName.toLowerCase() === lastName
  );

  const result = document.getElementById("result");

  if (guest) {
    result.innerHTML = `
        <h2>Welcome, ${guest.firstName} ${guest.lastName}</h2>

        <h1>Table ${guest.table}</h1>

        <p>Your seat has been reserved for you. We can't wait to celebrate with you.</p>

        <img
            src="./floorplan.png"
            alt="Wedding Floor Plan"
            class="floorplan"
        >
        `;
  } else {
    result.innerHTML = `
        <h3>We couldn't find your name</h3>

        <p>Please check the spelling of your first and last name, or speak to a member of our wedding team for assistance.</p>
        `;
  }
}