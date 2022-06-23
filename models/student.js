const db = require("../lib/prisma");

module.exports.createStudent = async ({ firstname, lastname, campus }) => {
  return await db.student.create({
    data: { firstname, lastname, campus },
  });
};

module.exports.getStudents = () =>
  db.student.findMany({
    orderBy: {
      lastname: "asc",
    },
  });

module.exports.getOneStudent = (id) => {
  return db.student.findUnique({
    where: { id },
  });
};

module.exports.deleteOneStudent = (id) => {
  return db.student.delete({
    where: {
      id,
    },
  });
};

module.exports.patchOneStudent = async (data) => {
  return await db.student
    .update({
      where: { id: data.id },
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        campus: data.campus,
      },
    })
    .catch((_) => false);
};
