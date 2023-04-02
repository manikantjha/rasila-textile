import FAQsMain from "@/components/faqs/FAQsMain";
import Layout from "@/layout/Layout";
import Head from "next/head";

export default function FAQs() {
  return (
    <>
      <Head>
        <title>FAQs</title>
        <meta name="description" content="FAQs page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="">
          <FAQsMain />
        </main>
      </Layout>
    </>
  );
}
