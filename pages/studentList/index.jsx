import style from "../../styles/StudentList.module.css";
import Layout from "../../components/Layout";
import StudentList from "../../components/StudentList";

const List = () => {
  return (
    <Layout>
      <div className={style.studentListContainer}>LISTE DES WILDERS</div>
      <StudentList />
    </Layout>
  );
};

export default List;
