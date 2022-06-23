import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import style from "./style/AddUserForm.module.css";

const AddWilders = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [campus, setCampus] = useState("");

  const router = useRouter();

  const handleCreateStudent = (e) => {
    e.preventDefault();
    axios
      .post(`/api/students`, {
        firstname,
        lastname,
        campus,
      })
      .then(() => router.push("/studentList"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form className={style.formContainer} onSubmit={handleCreateStudent}>
      <label htmlFor="firstname" className={style.labelForm}>
        Firstname :{" "}
      </label>
      <input
        type="text"
        id="firstname"
        className={style.inputForm}
        required
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
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
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
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
        value={campus}
        onChange={(e) => setCampus(e.target.value)}
        maxLength={40}
      />

      <button className={style.btnForm}>Valider</button>
    </form>
  );
};

export default AddWilders;
