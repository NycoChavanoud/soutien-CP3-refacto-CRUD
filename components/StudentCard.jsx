import style from "./style/StudentCard.module.css";
import icon from "../public/edit.png";
import Link from "next/link";

const StudentCard = ({ firstname, lastname, campus, id }) => {
  return (
    <div className={style.userCardContainer}>
      <div className={style.nameContainer}>
        <div>
          {firstname} {lastname}{" "}
          <Link href={`/form/${id}`}>
            <img
              src={icon.src}
              alt="edit-icon"
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
      <div className={style.city}>Je suis Wilder(euse) à {campus}</div>
    </div>
  );
};

export default StudentCard;
