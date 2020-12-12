import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import getTop from "../api/top";
import StoryCard from "../components/StoryCard";

const index = () => {
  let [data, setdata] = useState([]);
  useEffect(() => {
    getTop().then((d) => setdata(d.articles));
  }, []);
  console.log(data);
  return (
    <Layout>
      <h1 className="col-start-2 col-span-10 pt-2 pb-4 text-3xl font-black">
        Top Stories
      </h1>
      {data &&
        data.map((article) => (
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

export default index;
