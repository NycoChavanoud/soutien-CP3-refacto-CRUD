import base from "../../../middlewares/common";
import { createStudent, getStudents } from "../../../models/student";

const handlePost = async (req, res) => {
  // const { firstname, lastname, campus } = req.body;
  const user = await createStudent(req.body);
  return res.status(201).send(user);
};

const handleGet = async (req, res) => {
  const users = await getStudents();
  return res.status(201).send(users);
};

export default base().post(handlePost).get(handleGet);
