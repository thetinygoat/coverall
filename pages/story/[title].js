import axios from 'axios';
import Head from 'next/head';
import Layout from '../../components/Layout';

const Story = ({ url, content, title }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <iframe title={url} srcDoc={content} className="h-screen mx-auto w-screen py-4" />
  </Layout>
);

export async function getServerSideProps({ query }) {
  const res = await axios.get(query.url);
  return { props: { url: query.url, content: res.data, title: query.title } };
}

export default Story;
