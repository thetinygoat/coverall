import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import getTop from '../api/top';
import StoryCard from '../components/StoryCard';

const index = ({ data }) => {
  const a = 12;
  console.log(data);
  return (
    <Layout>
      <Navbar />
      <h1 className="col-start-2 col-span-10 pt-2 pb-4 text-3xl font-black">Top Stories</h1>
      {data.articles.map((article) => (
        <StoryCard
          author={article.author}
          title={article.title}
          description={article.description}
          url={article.url}
          img={article.urlToImage}
          time={article.publishedAt}
          key={article.title}
        />
      ))}
    </Layout>
  );
};

export async function getServerSideProps() {
  const topStories = await getTop();
  return { props: { data: topStories } };
}

export default index;
