import style from "../../styles/Form.module.css";
import Layout from "../../components/Layout";
import AddWilders from "../../components/AddWilders";

const Form = () => {
  return (
    <Layout>
      <div className={style.formContainer}>
        <div>AJOUTES DES WILDERS</div>
        <AddWilders />
      </div>
    </Layout>
  );
};

export default Form;
