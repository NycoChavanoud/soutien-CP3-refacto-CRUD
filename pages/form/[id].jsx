import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import style from "../../components/style/AddUserForm.module.css";

const UpdateStudents = () => {
  const router = useRouter();
  const { id } = router.query;

  const [student, setStudent] = useState("");

  useEffect(() => {
    axios.get(`/api/students/${id}`).then((res) => setStudent(res.data));
  }, [id]);

  const handlePatch = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/students/${id}`, {
        id: student.id,
        firstname: student.firstname,
        lastname: student.lastname,
        campus: student.campus,
      })
      .then(() => router.push("/studentList"))
      .catch(console.error);
  };

  return (
    <Layout>
      <form className={style.formContainer} onSubmit={handlePatch}>
        <label htmlFor="firstname" className={style.labelForm}>
          Firstname :{" "}
        </label>
        <input
          type="text"
          id="firstname"
          className={style.inputForm}
          required
          value={student.firstname || ""}
          onChange={(e) =>
            setStudent({ ...student, firstname: e.target.value })
          }
          maxLength={40}
        />

        <label htmlFor="lastname" className={style.labelForm}>
          Lastname :{" "}
        </label>
        <input
          type="text"
          id="lastname"
          className={style.inputForm}
          required
          value={student.lastname || ""}
          onChange={(e) => setStudent({ ...student, lastname: e.target.value })}
          maxLength={40}
        />

        <label htmlFor="campus" className={style.labelForm}>
          Campus :{" "}
        </label>
        <input
          type="text"
          id="campus"
          className={style.inputForm}
          required
          value={student.campus || ""}
          onChange={(e) => setStudent({ ...student, campus: e.target.value })}
          maxLength={40}
        />

        <button className={style.btnForm}>Valider</button>
      </form>
    </Layout>
  );
};

export default UpdateStudents;
