import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }: any) => {
  const route = useRouter().route;

  return (
    <>
      <Head>
        <title>NextRead</title>
        <Meta />
      </Head>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="grid justify-center h-full place-items-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
