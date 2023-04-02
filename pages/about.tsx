import AboutMain from "@/components/about/AboutMain";
import Layout from "@/layout/Layout";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="">
          <AboutMain />
        </main>
      </Layout>
    </>
  );
}
