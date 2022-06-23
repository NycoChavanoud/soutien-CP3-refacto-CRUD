import Head from "next/head";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          key="viewport"
        />
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <Header />

      <main>{children}</main>
    </>
  );
};

export default Layout;
