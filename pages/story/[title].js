import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { ceil } from "lodash";
import Layout from "../../components/Layout";
import predict from "../../api/predict";

const Story = ({ url, content, title, score }) => {
  function calcClassName() {
    if (1 - score < 0.3) {
      return "bg-red-400 mt-2 p-2 mb-2 rounded-sm text-center text-2xl font-bold col-start-1 col-span-12";
    }
    if (1 - score >= 0.3 && 1 - score <= 0.7) {
      return "bg-yellow-400 mt-2 p-2 mb-2 rounded-sm text-center text-2xl font-bold col-start-1 col-span-12";
    }
    return "bg-green-400 mt-2 p24 mb-2rounded-sm text-center text-2xl font-bold col-start-1 col-span-12";
  }
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={calcClassName(score)}>
        {100 - ceil(parseFloat(score) * 100)}% trusted
      </div>
      <iframe
        title={url}
        srcDoc={content}
        className="h-screen mx-auto w-screen py-4 col-start-0 col-span-10"
      />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const res = await axios.get(query.url);
  const data = await predict(query.url);
  return {
    props: {
      url: query.url,
      content: res.data,
      title: query.title,
      score: data.score,
    },
  };
}

export default Story;
