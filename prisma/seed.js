const db = require("../lib/prisma");

async function seed() {
  await db.student.deleteMany();
  await db.student.createMany({
    data: [
      {
        firstname: "Adrien",
        lastname: "Gaucher",
        campus: "Lyon",
      },
      {
        firstname: "Anna",
        lastname: "Boval",
        campus: "Lyon",
      },
      {
        firstname: "Benjamin",
        lastname: "Dervieux",
        campus: "Lyon",
      },
      {
        firstname: "Christelle",
        lastname: "Rouzé",
        campus: "Lyon",
      },
      {
        firstname: "Claire",
        lastname: "Machet",
        campus: "Lyon",
      },
      {
        firstname: "Clément",
        lastname: "Moreno",
        campus: "Lyon",
      },
      {
        firstname: "Florent",
        lastname: "Flachat",
        campus: "Lyon",
      },
      {
        firstname: "Félix",
        lastname: "Berger",
        campus: "Lyon",
      },
      {
        firstname: "Gaspard",
        lastname: "Mazataud",
        campus: "Lyon",
      },
      {
        firstname: "Ismaël",
        lastname: "Bouhassoun",
        campus: "Lyon",
      },
      {
        firstname: "Jean-Marie",
        lastname: "Jacquier",
        campus: "Lyon",
      },
      {
        firstname: "Jennifer",
        lastname: "De Leo",
        campus: "Lyon",
      },
      {
        firstname: "Jonathan",
        lastname: "Billault",
        campus: "Lyon",
      },
      {
        firstname: "Julie",
        lastname: "Rasamoelina",
        campus: "Lyon",
      },
      {
        firstname: "Léo",
        lastname: "Laborie",
        campus: "Lyon",
      },
      {
        firstname: "Mahamat",
        lastname: "Adnan",
        campus: "Lyon",
      },
      {
        firstname: "Mylène",
        lastname: "Mercier",
        campus: "Lyon",
      },
      {
        firstname: "Pierre",
        lastname: "Dartevelle",
        campus: "Lyon",
      },
      {
        firstname: "Quentin",
        lastname: "Jouanne",
        campus: "Lyon",
      },
      {
        firstname: "Rayane",
        lastname: "Arroudj",
        campus: "Lyon",
      },
      {
        firstname: "Simon",
        lastname: "Guy-Buchwalter",
        campus: "Lyon",
      },
      {
        firstname: "Thierno",
        lastname: "Diallo",
        campus: "Lyon",
      },
      {
        firstname: "Timo",
        lastname: "Nicolaux",
        campus: "Lyon",
      },
      {
        firstname: "Werner",
        lastname: "Mona",
        campus: "Lyon",
      },
    ],
  });
}

seed();

module.exports = seed;
