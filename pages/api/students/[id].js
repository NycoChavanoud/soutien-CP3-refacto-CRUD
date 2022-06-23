const {
  deleteOneStudent,
  getOneStudent,
  patchOneStudent,
} = require("../../../models/student");

async function handler(req, res) {
  if (req.method === "DELETE") {
    const studentToDelete = await deleteOneStudent(req.query.id);
    return res.status(201).send(studentToDelete);
  } else if (req.method === "PATCH") {
    const studentToPatch = await patchOneStudent(req.body);
    return res.status(201).send(studentToPatch);
  } else if (req.method === "GET") {
    const student = await getOneStudent(req.query.id);
    return res.status(201).send(student);
  }
}

export default handler;
