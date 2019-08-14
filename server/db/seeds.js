use hotel;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Albert Henckels",
    email: "EdNorton@hotmail.com",
    checked_in: true
  },
  {
    name: "Jopling",
    email: "Will_dee_foe_shure@gmail.com",
    checked_in: false
  },
  {
    name: "Dimitri",
    email: "Brody_A@outlook.com",
    checked_in: false
  }
])
