import Layout from "../components/Layout";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle={"ACCUEIL "}>
      <div className={style.homeContainer}>
        <h2>Soutien au checkpoint de demain...</h2>
        <div className={style.textHome}>Voici le nouveau but du jeu :</div>
        <div className={style.textHome}>
          On va refactoriser le code de l&apos;API en utilisant le package next
          connect. Donc on oublie pas le middleware.. n&apos;est ce pas...? On
          va réécrire toute les routes avec un peu plus d&apos;élégance
        </div>
        <div className={style.textHome}>
          Allé, fait un Use this template, on met en place le projet, sans
          oublié la db, on execute le seed...
        </div>
      </div>
    </Layout>
  );
}
