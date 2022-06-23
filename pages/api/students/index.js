const { createStudent, getStudents } = require("../../../models/student");

async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, campus } = req.body;
    const user = await createStudent(req.body);
    return res.status(201).send(user);
  } else if (req.method === "GET") {
    const users = await getStudents();
    return res.status(201).send(users);
  }
}

export default handler;
