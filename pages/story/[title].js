import axios from 'axios';
import Layout from '../../components/Layout';

const Story = ({ url, content }) => (
  <Layout>
    <iframe title={url} srcDoc={content} className="h-screen mx-auto w-screen py-4" />
  </Layout>
);

export async function getServerSideProps({ query }) {
  const res = await axios.get(query.url);
  return { props: { url: query.url, content: res.data } };
}

export default Story;
