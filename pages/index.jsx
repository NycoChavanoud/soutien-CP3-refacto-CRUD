import Layout from "../components/Layout";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle={"ACCUEIL "}>
      <div className={style.homeContainer}>
        ACCUEIL
        <div className={style.textHome}>
          Bienvenue sur le second DOJO DEBUG de la saison. Comme vous êtes tous
          de jeunes dévéloppeurs incroyablement brillants, je ne doute pas que
          cet exercice va être d&apos;une incroyable facilité...
        </div>
        <div className={style.textHome}>
          Ce site est la version modèle, pour que vous puissiezanalyser ce que
          l&apos;on attend de vous. Ensuite, allez cloner le repo à débugger !!!
          Lien en bas ;)
        </div>
        <div className={style.textHome}>
          Un fichier seed.js vous permettras d&apos;initialiser une base de
          données avec les bonnes informations de départ... Let&apos;s go...
          Chasse aux bugs...
        </div>
        <div className={style.textHome}>
          <a
            href=" https://github.com/NycoChavanoud/start-debug-round2"
            target="_blank"
          >
            https://github.com/NycoChavanoud/start-debug-round2
          </a>
        </div>
      </div>
    </Layout>
  );
}
