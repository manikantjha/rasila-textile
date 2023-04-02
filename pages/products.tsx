import ProductsMain from "@/components/products/ProductsMain";
import Layout from "@/layout/Layout";
import Head from "next/head";

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="">
          <ProductsMain />
        </main>
      </Layout>
    </>
  );
}
