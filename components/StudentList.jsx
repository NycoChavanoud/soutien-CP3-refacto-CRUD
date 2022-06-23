import style from "./style/StudentCard.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchUserList = () => {
    axios
      .get(`/api/students`)
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/students/${id}`).then(() => fetchUserList());
  };

  return (
    <div className={style.listContainer}>
      {students.map((user) => {
        return (
          <div key={user.id} className={style.mapCardContainer}>
            <StudentCard
              firstname={user.firstname}
              lastname={user.lastname}
              campus={user.campus}
              id={user.id}
            />
            <button
              className={style.deleteBtn}
              onClick={() => {
                handleDelete(user.id);
              }}
            >
              supprimer
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default StudentList;
