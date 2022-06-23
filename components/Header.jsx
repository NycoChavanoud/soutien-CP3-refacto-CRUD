import style from "./style/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <Link href={"/"}>
        <div className={style.linkHeader}>ACCUEIL</div>
      </Link>
      <Link href={"/form"}>
        <div className={style.linkHeader}>FORM</div>
      </Link>
      <Link href={"/studentList"}>
        <div className={style.linkHeader}>LIST</div>
      </Link>
    </div>
  );
};

export default Header;
