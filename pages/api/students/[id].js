import base from "../../../middlewares/common";
import {
  getOneStudent,
  patchOneStudent,
  deleteOneStudent,
} from "../../../models/student";

const handleGetOne = async (req, res) => {
  const student = await getOneStudent(req.query.id);
  return res.status(201).send(student);
};

const patchStudent = async (req, res) => {
  const studentToPatch = await patchOneStudent(req.body);
  return res.status(201).send(studentToPatch);
};

const deleteStudent = async (req, res) => {
  const studentToDelete = await deleteOneStudent(req.query.id);
  return res.status(201).send(studentToDelete);
};

export default base()
  .get(handleGetOne)
  .patch(patchStudent)
  .delete(deleteStudent);
