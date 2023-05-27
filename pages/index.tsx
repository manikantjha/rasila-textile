import HomeMain from "@/components/home/HomeMain";
import Layout from "@/layout/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sardarji Dropin</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="">
          <HomeMain />
        </main>
      </Layout>
    </>
  );
}
